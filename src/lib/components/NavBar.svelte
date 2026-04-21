<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	const base = resolve('/');

	const links = [
		{ sectionId: 'home', label: 'Home' },
		{ sectionId: 'problem', label: 'Problem' },
		{ sectionId: 'process', label: 'Process' }
	] as const;

	function hrefForSection(sectionId: string): string {
		return `${base}#${sectionId}`;
	}

	function sectionIsActive(sectionId: string): boolean {
		if (page.url.pathname !== '/') return false;
		const hash = page.url.hash;
		if (sectionId === 'home') return hash === '' || hash === '#home';
		return hash === `#${sectionId}`;
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
			class:bg-blue={sectionIsActive(sectionId)}
			class:text-white={sectionIsActive(sectionId)}
			aria-current={sectionIsActive(sectionId) ? 'page' : undefined}
		>
			{label}
		</a>
	{/each}
</nav>
