<script lang="ts">
	import Logo from './Logo.svelte';
</script>

<header>
	<Logo></Logo>
</header>

<style>
	header {
		display: flex;
		flex: row;
		justify-content: space-between;
		align-items: center;
		min-height: 4rem;
	}
</style>
