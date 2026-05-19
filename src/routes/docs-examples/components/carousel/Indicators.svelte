<script lang="ts">
  import { Carousel, CarouselIndicators } from "$lib";
  import images from "./imageData/images.json";
</script>

<div class="max-w-4xl">
  <Carousel {images}>
    <CarouselIndicators />
  </Carousel>
</div>
