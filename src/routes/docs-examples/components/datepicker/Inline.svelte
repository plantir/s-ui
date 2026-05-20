<script lang="ts">
	import { Datepicker, P } from 's-ui';
	let selectedDate = $state<Date | undefined>(undefined);
</script>

<div class="md:w-1/2">
	<Datepicker inline bind:value={selectedDate} />
	<P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</P>
</div>
