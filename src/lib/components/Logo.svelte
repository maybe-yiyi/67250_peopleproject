<script lang="ts">
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
</script>

<a
	href={resolve('/')}
	class="flex items-center gap-2 rounded-md text-navy transition-color hover:text-blue"
>
	<img src={favicon} alt="" class="h-10 w-auto shrink-0" />
	<span class="text-base font-regular tracking-tight">Discharge Planning<br />System</span>
</a>
