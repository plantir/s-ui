---
layout: componentLayout
title: Svelte Hover Gallery
breadcrumb_title: Svelte Hover Gallery
component_title: Hover Gallery
dir: Components
description: Hover Gallery shows the first image by default and reveals the other images as the pointer moves horizontally across it
---

<script lang="ts">
  import { GitHubCompoLinks, LlmLink } from '../../utils'
</script>

Hover Gallery is a container of images. The first image is visible by default, and when you move the pointer horizontally across it, the other images show up. The width is split into one column per image, so with 4 images each quarter reveals one image. It's useful for product cards in ecommerce sites, portfolios or image galleries.

## Setup

```svelte example hideOutput
<script lang="ts">
	import { HoverGallery } from '$lib/index';
</script>
```

## Hover Gallery

Move your mouse on the image horizontally. Pass the images as an array of `<img>` attributes (`src`, `alt`, …) and give the gallery a size or aspect ratio with `class`.

```svelte example
{#include Default.svelte}
```

## Hover Gallery in a card

```svelte example
{#include InCard.svelte}
```

## Binding the index

Use `bind:index` to know which image is visible. Set `indicators={false}` to hide the bars at the bottom.

```svelte example class="flex flex-col gap-3"
{#include Binding.svelte}
```

## Props

| Prop         | Type                               | Default |
| ------------ | ---------------------------------- | ------- |
| `images`     | `HTMLImgAttributes[]`              | —       |
| `index`      | `number` (bindable)                | `0`     |
| `indicators` | `boolean`                          | `true`  |
| `classes`    | `{ image, indicators, indicator }` | —       |

## References

- [daisyUI Hover Gallery](https://daisyui.com/components/hover-gallery/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
