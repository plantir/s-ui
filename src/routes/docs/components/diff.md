---
layout: componentLayout
title: Svelte Diff
breadcrumb_title: Svelte Diff
component_title: Diff
dir: Components
description: The diff component shows a side-by-side comparison of two items with a draggable divider
---

<script lang="ts">
  import { GitHubCompoLinks, LlmLink } from '../../utils'
</script>

The diff component shows a side-by-side comparison of two items. Drag anywhere on it (mouse or touch) to move the divider, or focus the handle and use the arrow keys (`Shift` + arrow for bigger steps, `Home` / `End` to jump to the edges).

## Setup

```svelte example hideOutput
<script lang="ts">
	import { Diff } from '$lib/index';
</script>
```

## Diff

Pass the two items as the `item1` (left) and `item2` (right) snippets. Images and other direct children fill the whole area.

```svelte example
{#include Default.svelte}
```

## Diff text

```svelte example
{#include Text.svelte}
```

## Binding the position

Use `bind:position` (0 to 100, default `50`) to read or control the divider. The aspect ratio defaults to `16/9` and can be changed with a class such as `aspect-4/3`.

```svelte example class="flex flex-col gap-4"
{#include Binding.svelte}
```

## Props

| Prop       | Type                                        | Default                 |
| ---------- | ------------------------------------------- | ----------------------- |
| `item1`    | `Snippet`                                   | required                |
| `item2`    | `Snippet`                                   | required                |
| `position` | `number` (bindable, 0–100)                  | `50`                    |
| `step`     | `number` (keyboard step in percent)         | `1`                     |
| `label`    | `string` (accessible label for the divider) | `'Comparison position'` |
| `classes`  | `{ item1, item2, resizer, handle }`         | —                       |

## References

- [daisyUI Diff](https://daisyui.com/components/diff/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
