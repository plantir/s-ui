<script lang="ts">
  import { Input, Label } from "$lib";
  let value = $state(5);
</script>

<Label class="mb-4 flex flex-col gap-2">
  <span>Your Age</span>
  <Input type="number" bind:value />
</Label>
<div class="dark:text-white">
  <p>Value: {value}</p>
  <p>Type of value: {typeof value}</p>
</div>
