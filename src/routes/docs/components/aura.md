---
layout: componentLayout
title: Svelte Aura
breadcrumb_title: Svelte Aura
component_title: Aura
dir: Components
description: Aura is a border light effect that can wrap around any component to highlight it
---

<script lang="ts">
  import { GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  const dirName = toKebabCase(component_title)
</script>

Aura is a border light effect that can wrap around any component. It is a great way to add a cool, eye-catching visual effect to your components. Use it for the most important button, card, or div that you want to highlight.

## Setup

```svelte example hideOutput
<script lang="ts">
	import { Aura } from '$lib/index';
</script>
```

## Aura around a card

```svelte example
{#include Default.svelte}
```

## Aura around a button

```svelte example
{#include Button.svelte}
```

## Aura styles

Use the `variant` prop to change the light effect: `dual` uses two lights, `rainbow`, `holo`, `gold` and `silver` use colorful gradients, and `glow` uses a pulsing glow instead of a rotating border.

```svelte example class="flex flex-col items-start gap-6"
{#include Variants.svelte}
```

## Colors

Use the `color` prop to pick a light color from the palette.

```svelte example class="flex flex-wrap gap-4"
{#include Colors.svelte}
```

## Custom color and background

Set the `--aura-color` CSS variable for any custom light color, and use a `bg-*` class to change the color of the border track.

```svelte example class="flex flex-col items-start gap-6"
{#include CustomColor.svelte}
```

## Aura rainbow around a pricing card

```svelte example
{#include Pricing.svelte}
```

## Sizes

```svelte example class="flex flex-wrap items-center gap-4"
{#include Sizes.svelte}
```

## Custom animation duration

Use the `duration` prop (in milliseconds) or a Tailwind `duration-*` class.

```svelte example class="flex flex-col items-start gap-6"
{#include Duration.svelte}
```

## Props

| Prop       | Type                                                                         | Default     |
| ---------- | ---------------------------------------------------------------------------- | ----------- |
| `variant`  | `'default' \| 'dual' \| 'rainbow' \| 'holo' \| 'gold' \| 'silver' \| 'glow'` | `'default'` |
| `color`    | Palette color (`primary`, `secondary`, `red`, `blue`, …)                     | `'primary'` |
| `size`     | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                                       | `'md'`      |
| `rounded`  | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'`                  | `'lg'`      |
| `duration` | `number` (ms)                                                                | `4000`      |

## References

- [daisyUI Aura](https://daisyui.com/components/aura/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
