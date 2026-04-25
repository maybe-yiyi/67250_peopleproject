<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

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
		{ sectionId: 'team', label: 'Team' }
	] as const;

	function hrefForSection(sectionId: string): string {
		return `${base}#${sectionId}`;
	}
</script>

<nav
	class="flex flex-row flex-wrap items-center justify-end gap-x-6 gap-y-2"
	aria-label="Main navigation"
>
	{#each links as { sectionId, label } (sectionId)}
		<a
			href={hrefForSection(sectionId)}
			class="inline-flex items-center rounded-md px-3 py-2 text-base font-medium text-navy transition-colors hover:bg-sky hover:text-blue"
			class:bg-blue={page.route.id === '/' && $activeSectionId === sectionId}
			class:text-white={page.route.id === '/' && $activeSectionId === sectionId}
			aria-current={page.route.id === '/' && $activeSectionId === sectionId ? 'page' : undefined}
		>
			{label}
		</a>
	{/each}
</nav>
