<script lang="ts">
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
</script>

<a
	href={resolve('/')}
	class="flex items-center gap-2 rounded-md text-navy outline-none ring-blue transition-[color,box-shadow] hover:text-blue focus-visible:ring-2 focus-visible:ring-offset-2"
>
	<img src={favicon} alt="" class="h-8 w-auto shrink-0" width="32" height="38" />
	<span class="text-lg font-semibold tracking-tight">People Project</span>
</a>
