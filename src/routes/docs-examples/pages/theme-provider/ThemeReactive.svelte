<script lang="ts">
	import { Button, ThemeProvider } from 'flowbite-svelte';

	let n = $state(0);
	const theme = $derived({
		button: {
			base: n % 2 === 0 ? 'bg-blue-600 text-white' : 'bg-rose-600 text-white'
		}
	});
</script>

<ThemeProvider {theme}>
	<Button onclick={() => (n += 1)}>Bump theme ({n})</Button>
</ThemeProvider>
