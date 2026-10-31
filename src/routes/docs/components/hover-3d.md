---
layout: componentLayout
title: Svelte Hover 3D Card
breadcrumb_title: Svelte Hover 3D Card
component_title: Hover 3D
dir: Components
description: Hover 3D is a wrapper that tilts and rotates its content based on the pointer position, creating an interactive 3D effect
---

<script lang="ts">
  import { GitHubCompoLinks, LlmLink } from '../../utils'
</script>

Hover 3D is a wrapper component that adds a 3D hover effect to its content. When you hover over the component, it tilts and rotates based on the pointer position, and an optional glare follows the pointer. The effect is disabled for users who prefer reduced motion.

Only use non-interactive content inside `Hover3d`. If you want to make the entire card clickable, pass `href` so the whole wrapper becomes a link, instead of putting buttons or links inside it.

## Setup

```svelte example hideOutput
<script lang="ts">
	import { Hover3d } from '$lib/index';
</script>
```

## 3D image hover effect

```svelte example
{#include Image.svelte}
```

## 3D card hover effect

The whole card can be a link by passing `href`.

```svelte example
{#include CardLink.svelte}
```

## 3D hover effect for image gallery

```svelte example class="flex flex-wrap gap-6"
{#include Gallery.svelte}
```

## Tilt, scale and glare

Use `tilt` (maximum rotation in degrees), `scale` and `glare` to tune the effect. Set `rounded` to match the corners of your content so the glare and focus ring line up.

```svelte example class="flex flex-wrap gap-6"
{#include Options.svelte}
```

## Props

| Prop      | Type                                               | Default |
| --------- | -------------------------------------------------- | ------- |
| `href`    | `string` (renders an `<a>`)                        | —       |
| `tilt`    | `number` (degrees)                                 | `12`    |
| `scale`   | `number`                                           | `1.05`  |
| `glare`   | `boolean`                                          | `true`  |
| `rounded` | `'none' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl'` | `'2xl'` |
| `classes` | `{ content, glare }`                               | —       |

## References

- [daisyUI Hover 3D Card](https://daisyui.com/components/hover-3d/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
