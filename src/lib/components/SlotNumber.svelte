<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	type Props = {
		/** Text to show after the spin (e.g. "32%", "$2.8M", "4.2 hrs") */
		value: string;
		class?: string;
	};

	let { value, class: className = '' }: Props = $props();

	let el: HTMLSpanElement | undefined = $state();
	/** Odometer text while `spinning`; static `value` is shown in HTML until a spin starts. */
	let display = $state('');
	let spinning = $state(false);

	function randomDigit() {
		return String(Math.floor(Math.random() * 10));
	}

	const digitIndices = $derived.by(() => {
		const out: number[] = [];
		for (let i = 0; i < value.length; i++) {
			if (value[i]! >= '0' && value[i]! <= '9') out.push(i);
		}
		return out;
	});

	onMount(() => {
		if (!browser) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}
		if (digitIndices.length === 0) {
			return;
		}

		const node = el;
		if (!node) return;

		const indices = digitIndices;
		let raf = 0;
		let started = false;
		const spinDuration = 850;
		const staggerMs = 75;

		function runSpin() {
			if (started) return;
			started = true;

			const final = value;
			const finalChars = final.split('');
			const order = [...indices].reverse();
			const lockAt: Record<number, number> = {};
			order.forEach((idx, j) => {
				lockAt[idx] = spinDuration + j * staggerMs;
			});
			const t0 = performance.now();
			const endAt = t0 + spinDuration + order.length * staggerMs + 150;

			const buildString = (elapsed: number) => {
				return finalChars
					.map((c, i) => {
						if (!indices.includes(i)) return c;
						if (elapsed >= (lockAt[i] ?? 0)) return finalChars[i]!;
						return randomDigit();
					})
					.join('');
			};

			spinning = true;
			display = buildString(0);

			const step = (now: number) => {
				const elapsed = now - t0;
				if (now >= endAt) {
					display = final;
					spinning = false;
					return;
				}
				display = buildString(elapsed);
				raf = requestAnimationFrame(step);
			};

			raf = requestAnimationFrame(step);
		}

		const obs = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						runSpin();
						obs.disconnect();
						return;
					}
				}
			},
			{ rootMargin: '0px 0px -5% 0px', threshold: 0.15 }
		);
		obs.observe(node);

		const r = node.getBoundingClientRect();
		const inView =
			r.top < window.innerHeight && r.bottom > 0 && r.left < window.innerWidth && r.right > 0;
		if (inView) {
			runSpin();
			obs.disconnect();
		}

		return () => {
			obs.disconnect();
			cancelAnimationFrame(raf);
		};
	});
</script>

<span bind:this={el} class="tabular-nums {className}">{spinning ? display : value}</span>
