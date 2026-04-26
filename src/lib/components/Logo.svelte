<script lang="ts">
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
</script>

<a
	href={resolve('/')}
	class="flex items-center gap-2 rounded-lg text-navy transition-color hover:text-blue"
>
	<img src={favicon} alt="" class="h-10 w-auto shrink-0" />
	<span class="text-3xl font-regular tracking-tight">FlowState</span>
</a>
