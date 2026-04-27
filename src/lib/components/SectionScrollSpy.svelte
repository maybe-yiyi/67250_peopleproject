<script lang="ts">
	import { replaceState } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	import {
		LANDING_SECTION_IDS,
		activeSectionId,
		parseLandingSectionHash,
		type LandingSectionId
	} from '$lib/stores/activeSection';

	/**
	 * `replaceState` is expensive in SvelteKit (it re-applies the full `page` object to the app).
	 * The scroll handler can call this many times; debouncing avoids hammering the page and fixes
	 * flaky interactivity in dev. A short guard on first load avoids `replaceState` fighting a
	 * deep link (`/#…`) before layout/scroll have settled.
	 */

	/** Viewport offset below header (matches ~ scroll-mt-28 + border) */
	const HEADER_OFFSET_PX = 112;
	const MOUNT_URL_GUARD_MS = 300;
	const REPLACE_STATE_DEBOUNCE_MS = 150;

	let raf = 0;
	let replaceT: ReturnType<typeof setTimeout> | undefined;
	/** setTimeout id (number in the browser) */
	let postMountScheduleT: number | undefined;
	let mountUrlGuardUntil = 0;

	function pickActiveFromScroll(): LandingSectionId {
		let active: LandingSectionId = LANDING_SECTION_IDS[0];
		for (const id of LANDING_SECTION_IDS) {
			const el = document.getElementById(id);
			if (!el) continue;
			if (el.getBoundingClientRect().top <= HEADER_OFFSET_PX) {
				active = id;
			}
		}
		return active;
	}

	function replaceHashToMatchScroll() {
		if (Date.now() < mountUrlGuardUntil) return;

		const id = pickActiveFromScroll();
		const nextHash = `#${id}`;
		if (typeof location !== 'undefined' && location.hash === nextHash) return;
		if (page.url.hash !== nextHash) {
			const url = new URL(page.url.href);
			url.hash = nextHash;
			replaceState(url, page.state);
		}
	}

	function scheduleHashFromScroll() {
		if (replaceT) clearTimeout(replaceT);
		replaceT = setTimeout(() => {
			replaceT = undefined;
			replaceHashToMatchScroll();
		}, REPLACE_STATE_DEBOUNCE_MS);
	}

	function syncFromScroll() {
		const id = pickActiveFromScroll();
		if (get(activeSectionId) !== id) {
			activeSectionId.set(id);
		}

		scheduleHashFromScroll();
	}

	function schedule() {
		if (raf) return;
		raf = requestAnimationFrame(() => {
			raf = 0;
			syncFromScroll();
		});
	}

	function syncFromHash() {
		activeSectionId.set(parseLandingSectionHash(page.url.hash));
	}

	onMount(() => {
		mountUrlGuardUntil = Date.now() + MOUNT_URL_GUARD_MS;

		syncFromHash();
		syncFromScroll();

		window.addEventListener('scroll', schedule, { passive: true });
		window.addEventListener('resize', schedule, { passive: true });
		window.addEventListener('hashchange', syncFromHash);

		postMountScheduleT = window.setTimeout(() => {
			postMountScheduleT = undefined;
			schedule();
		}, MOUNT_URL_GUARD_MS + 50);

		return () => {
			if (replaceT) clearTimeout(replaceT);
			if (postMountScheduleT !== undefined) clearTimeout(postMountScheduleT);
			window.removeEventListener('scroll', schedule);
			window.removeEventListener('resize', schedule);
			window.removeEventListener('hashchange', syncFromHash);
			if (raf) cancelAnimationFrame(raf);
			activeSectionId.set('home');
		};
	});
</script>
