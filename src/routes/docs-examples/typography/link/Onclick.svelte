<script lang="ts">
  import { A } from "$lib";

  const myaction = () => {
    console.log("Action triggered");
  };
</script>

<A href="/" onclick={myaction}>Read more</A>
