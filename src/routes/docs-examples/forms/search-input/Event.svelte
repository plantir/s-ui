<script lang="ts">
  import { Search } from "$lib";
</script>

<Search
  clearable
  clearableOnClick={() => {
    alert("Clicked clear button!");
  }}
/>
