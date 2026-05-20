<script lang="ts">
	import { Card, Button, Label, Input, Checkbox } from 's-ui';
</script>

<Card class="p-4 sm:p-6 md:p-8">
	<form class="flex flex-col space-y-6" action="/">
		<h3 class="text-xl font-medium text-heading">Sign in to our platform</h3>
		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>Your password</span>
			<Input type="password" name="password" placeholder="•••••" required />
		</Label>
		<div class="flex items-start">
			<Checkbox>Remember me</Checkbox>
			<a href="/" class="ms-auto text-sm text-fg-brand hover:underline">Lost password?</a>
		</div>
		<Button type="submit" class="w-full">Login to your account</Button>
		<div class="text-sm font-medium text-body">
			Not registered? <a href="/" class="text-fg-brand hover:underline">Create account</a>
		</div>
	</form>
</Card>
