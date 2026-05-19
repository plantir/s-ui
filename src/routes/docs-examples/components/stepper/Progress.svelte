<script lang="ts">
  import { ProgressStepper } from "$lib";
  import { CheckOutline, UserSolid, CreditCardSolid } from "flowbite-svelte-icons";
</script>

<ProgressStepper steps={[{ status: "completed" }, { status: "current" }, { status: "pending" }]} />

<ProgressStepper
  steps={[
    { status: "completed", icon: CheckOutline },
    { status: "current", icon: UserSolid },
    { status: "pending", icon: CreditCardSolid }
  ]}
/>
