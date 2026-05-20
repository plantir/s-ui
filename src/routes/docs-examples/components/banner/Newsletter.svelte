<script lang="ts">
	import { Banner, Skeleton, ImagePlaceholder, Input, Label, Button } from 's-ui';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner classes={{ content: 'w-full sm:w-auto' }} class="absolute">
	<form action="/" class="flex w-full flex-col gap-2 md:flex-row md:items-center md:gap-4">
		<Label for="email" class="shrink-0 text-body">Sign up for our newsletter</Label>
		<Input
			type="email"
			id="email"
			placeholder="Enter your email"
			class="border-default bg-neutral-primary md:w-64"
			required
		/>
		<Button type="submit" class="w-full sm:w-auto">Subscribe</Button>
	</form>
</Banner>
