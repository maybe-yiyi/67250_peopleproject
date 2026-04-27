<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Menu, X } from '@steeze-ui/lucide-icons';

	import { activeSectionId } from '$lib/stores/activeSection';

	const base = resolve('/');

	const links = [
		{ sectionId: 'home', label: 'Home' },
		{ sectionId: 'problem', label: 'Problem' },
		{ sectionId: 'opportunity', label: 'Opportunity' },
		{ sectionId: 'solution', label: 'Solution' },
		{ sectionId: 'strategy', label: 'Strategy' },
		{ sectionId: 'social-theory', label: 'Social Theory' },
		{ sectionId: 'impact', label: 'Impact' },
		{ sectionId: 'team', label: 'Team' },
		{ sectionId: 'references', label: 'References' }
	] as const;

	let menuOpen = $state(false);
	let root: HTMLDivElement | undefined;

	function hrefForSection(sectionId: string): string {
		return `${base}#${sectionId}`;
	}

	function closeMenu() {
		menuOpen = false;
	}

	function toggleMenu(e: MouseEvent) {
		e.stopPropagation();
		menuOpen = !menuOpen;
	}

	$effect(() => {
		if (!menuOpen) return;
		const onDown = (e: MouseEvent) => {
			if (root && !root.contains(e.target as Node)) closeMenu();
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeMenu();
		};
		document.addEventListener('mousedown', onDown);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onDown);
			document.removeEventListener('keydown', onKey);
		};
	});
</script>

<div class="relative flex items-center" bind:this={root}>
	<button
		type="button"
		class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border-2 border-navy p-1.5 text-navy transition-colors hover:bg-sky md:hidden"
		aria-expanded={menuOpen}
		aria-controls="mobile-menu"
		aria-label={menuOpen ? 'Close menu' : 'Open menu'}
		onclick={toggleMenu}
	>
		{#if menuOpen}
			<Icon src={X} class="h-6 w-6" aria-hidden="true" />
		{:else}
			<Icon src={Menu} class="h-6 w-6" aria-hidden="true" />
		{/if}
	</button>

	<nav
		class="hidden flex-row flex-wrap items-center justify-end gap-x-6 gap-y-2 md:flex"
		aria-label="Main navigation"
	>
		{#each links as { sectionId, label } (sectionId)}
			<a
				href={hrefForSection(sectionId)}
				class="inline-flex items-center rounded-lg px-3 py-2 text-base font-medium text-navy transition-colors hover:bg-sky hover:text-blue"
				class:bg-blue={page.route.id === '/' && $activeSectionId === sectionId}
				class:text-white={page.route.id === '/' && $activeSectionId === sectionId}
				aria-current={page.route.id === '/' && $activeSectionId === sectionId ? 'page' : undefined}
			>
				{label}
			</a>
		{/each}
	</nav>

	{#if menuOpen}
		<div
			id="mobile-menu"
			class="absolute right-0 top-full z-50 mt-1 w-[min(18rem,calc(100vw-2.5rem))] rounded-xl border-2 border-navy bg-white py-2 shadow-lg md:hidden"
		>
			<nav
				class="flex max-h-[min(70dvh,40rem)] flex-col overflow-y-auto"
				aria-label="Main navigation"
			>
				{#each links as { sectionId, label } (sectionId)}
					<a
						href={hrefForSection(sectionId)}
						class="px-4 py-3 text-base font-medium text-navy transition-colors hover:bg-sky"
						class:bg-sky={page.route.id === '/' && $activeSectionId === sectionId}
						class:font-semibold={page.route.id === '/' && $activeSectionId === sectionId}
						class:text-blue={page.route.id === '/' && $activeSectionId === sectionId}
						aria-current={page.route.id === '/' && $activeSectionId === sectionId
							? 'page'
							: undefined}
						onclick={closeMenu}
					>
						{label}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</div>
