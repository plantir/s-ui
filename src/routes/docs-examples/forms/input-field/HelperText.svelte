<script lang="ts">
	import { Input, Label, Helper } from 's-ui';
</script>

<Label class="flex flex-col gap-2">
	<span>Your email</span>
	<Input id="email" name="email" required placeholder="name@flowbite.com" />
	<Helper class="text-sm">
		We'll never share your details. Read our <a
			href="/"
			class="font-medium text-fg-brand hover:underline">Privacy Policy</a
		>
		.
	</Helper>
</Label>
