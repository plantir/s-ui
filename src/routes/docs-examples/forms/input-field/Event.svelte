<script lang="ts">
  import { Input } from "$lib";
</script>

<Input
  clearable
  clearableOnClick={() => {
    alert("Clicked close button!");
  }}
  class="my-4"
/>
