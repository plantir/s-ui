<script lang="ts">
  import { Label, Timepicker } from "$lib";
</script>

<Label for="appointment-time">Choose appointment time:</Label>
<Timepicker id="appointment-time" value="09:00" min="08:00" max="18:00" />
