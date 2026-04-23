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

	/** Viewport offset below header (matches ~ scroll-mt-28 + border) */
	const HEADER_OFFSET_PX = 112;

	let raf = 0;

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

	function syncFromScroll() {
		const id = pickActiveFromScroll();
		if (get(activeSectionId) !== id) {
			activeSectionId.set(id);
		}

		const nextHash = `#${id}`;
		if (page.url.hash !== nextHash) {
			const url = new URL(page.url.href);
			url.hash = nextHash;
			replaceState(url, page.state);
		}
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
		syncFromHash();
		syncFromScroll();

		window.addEventListener('scroll', schedule, { passive: true });
		window.addEventListener('resize', schedule, { passive: true });
		window.addEventListener('hashchange', syncFromHash);

		return () => {
			window.removeEventListener('scroll', schedule);
			window.removeEventListener('resize', schedule);
			window.removeEventListener('hashchange', syncFromHash);
			if (raf) cancelAnimationFrame(raf);
			activeSectionId.set('home');
		};
	});
</script>
