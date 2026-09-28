<script lang="ts">
	import { PhoneInput } from "$lib/index";
</script>

<form class="mx-auto max-w-xs">
	<PhoneInput
		phoneType="floating"
		aria-describedby="helper-text-explanation"
		id="floating-phone-number"
		placeholder=" "
		required
	/>
</form>
