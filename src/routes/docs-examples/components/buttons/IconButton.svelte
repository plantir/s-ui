<script lang="ts">
	import { Button } from 's-ui';
	import { ThumbsUpSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Button class="p-2!"><ArrowRightOutline class="h-6 w-6" /></Button>
<Button pill={true} class="p-2!"><ArrowRightOutline class="h-6 w-6" /></Button>
<Button outline={true} class="p-2!" size="lg">
	<ThumbsUpSolid class="h-7 w-7 text-primary-700" />
</Button>
<Button pill={true} outline={true} class="p-2!" size="xl">
	<ThumbsUpSolid class="h-6 w-6 text-primary-700" />
</Button>
