import { browser } from '$app/environment';
import type { Action } from 'svelte/action';

export type RevealViewOptions = {
	delay?: number;
	rootMargin?: string;
	threshold?: number;
};

export const revealView: Action<HTMLElement, RevealViewOptions | undefined> = (node, opts) => {
	if (!browser) {
		return {};
	}

	node.classList.add('reveal-enhanced');

	let delay = opts?.delay ?? 0;
	let rootMargin = opts?.rootMargin ?? '0px 0px -5% 0px';
	/** 0 = any overlap; avoids tall blocks (hero column, full grids) never crossing a 6% ratio. */
	let threshold = opts?.threshold ?? 0;

	const applyVisible = () => {
		node.classList.add('reveal-in');
	};

	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		applyVisible();
		return {};
	}

	let done = false;
	let fallbackFrames: number[] = [];
	let observer: IntersectionObserver;

	const disconnect = () => {
		observer?.disconnect();
		for (const id of fallbackFrames) {
			cancelAnimationFrame(id);
		}
		fallbackFrames = [];
	};

	const finish = () => {
		if (done) return;
		done = true;
		disconnect();
		if (delay > 0) {
			setTimeout(applyVisible, delay);
		} else {
			applyVisible();
		}
	};

	/** Run before IO so above-the-fold nodes never get a frame in the pre-reveal state. */
	const inViewport = () => {
		const r = node.getBoundingClientRect();
		const vh = window.innerHeight;
		const vw = window.innerWidth;
		return r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw;
	};

	if (inViewport()) {
		finish();
		return {
			destroy() {
				done = true;
			},
			update(newOpts) {
				delay = newOpts?.delay ?? 0;
			}
		};
	}

	observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					finish();
					return;
				}
			}
		},
		{ rootMargin, threshold }
	);

	observer.observe(node);

	const runFallback = () => {
		if (done) return;
		const r = node.getBoundingClientRect();
		const vh = window.innerHeight;
		const vw = window.innerWidth;
		const visible = r.bottom > 0 && r.top < vh && r.right > 0 && r.left < vw;
		if (visible) finish();
	};

	fallbackFrames.push(
		requestAnimationFrame(() => {
			fallbackFrames.push(requestAnimationFrame(runFallback));
		})
	);

	return {
		destroy() {
			done = true;
			disconnect();
		},
		update(newOpts) {
			delay = newOpts?.delay ?? 0;
			rootMargin = newOpts?.rootMargin ?? '0px 0px -5% 0px';
			threshold = newOpts?.threshold ?? 0;
		}
	};
};
