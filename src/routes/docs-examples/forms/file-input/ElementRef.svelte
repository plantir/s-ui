<script lang="ts">
  import { Fileupload } from "$lib";
</script>

<Fileupload
  id="event"
  clearable
  clearableOnClick={() => {
    alert("Clicked close button!");
  }}
/>
