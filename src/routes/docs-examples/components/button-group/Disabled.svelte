<script lang="ts">
  import { ButtonGroup, Button } from "$lib";
</script>

<div class="flex flex-col gap-4">
  <ButtonGroup>
    <Button disabled>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>

  <ButtonGroup disabled>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
</div>
