<script lang="ts">
	import { Otp } from '$lib/index';

	let value = $state('');
	let completed = $state('');
</script>

<Otp count={6} bind:value oncomplete={(code) => (completed = code)} />
<p class="text-sm text-gray-700 dark:text-gray-300">Value: {value || '—'}</p>
<p class="text-sm text-gray-700 dark:text-gray-300">Completed: {completed || '—'}</p>
