<script lang="ts">
	import { A } from 's-ui';

	const myaction = () => {
		console.log('Action triggered');
	};
</script>

<A href="/" onclick={myaction}>Read more</A>
