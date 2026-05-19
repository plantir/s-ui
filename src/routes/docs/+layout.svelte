<script lang="ts">
  import FlowbiteSvelteLayout from "../layouts/FlowbiteSvelteLayout.svelte";
  import ComponentsLayout from "../layouts/ComponentsLayout.svelte";
	import { onMount } from "svelte";

  let { data, children } = $props();
  onMount(()=>{
    console.log(data,'data');
    
  })
</script>

<FlowbiteSvelteLayout>
  <ComponentsLayout {data}>
    {@render children()}
  </ComponentsLayout>
</FlowbiteSvelteLayout>
