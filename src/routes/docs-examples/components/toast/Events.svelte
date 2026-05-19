<script lang="ts">
  import { Toast } from "$lib";
</script>

<Toast onclick={() => alert("Toast clicked")} onclose={() => alert("Toast closing")}>Click this toast or the close button to trigger an event.</Toast>
