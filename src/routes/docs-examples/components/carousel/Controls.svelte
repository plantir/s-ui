<script lang="ts">
  import { Carousel, Controls } from "$lib";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl">
  <Carousel {images}>
    <Controls />
  </Carousel>
</div>
