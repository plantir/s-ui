<script lang="ts">
  import { Label, Timepicker } from "$lib";
  import { ClockOutline } from "flowbite-svelte-icons";
</script>

<Label>Select Time (Flowbite Icon):</Label>
<Timepicker Icon={ClockOutline} iconClass="text-red-500" />

<Label>Select Time (Default icon):</Label>
<Timepicker />
