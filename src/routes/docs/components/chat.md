---
layout: componentLayout
title: Svelte Chat Bubble
breadcrumb_title: Svelte Chat Bubble
component_title: Chat
dir: Components
description: Chat bubbles show one line of conversation and all its data, including the author image, author name, time and more
---

<script lang="ts">
  import { GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  const dirName = toKebabCase(component_title)
</script>

Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.

| Component    | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| `Chat`       | Container for one line of conversation. Sets the `placement` |
| `ChatImage`  | Author image                                                 |
| `ChatHeader` | Text above the chat bubble                                   |
| `ChatFooter` | Text below the chat bubble                                   |
| `ChatBubble` | Chat bubble. Accepts a `color`                               |

## Setup

```svelte example hideOutput
<script lang="ts">
	import { Chat, ChatImage, ChatHeader, ChatFooter, ChatBubble } from '$lib/index';
</script>
```

## Start and end placement

Use `placement="start"` or `placement="end"` on `Chat` to align the conversation horizontally.

```svelte example
{#include StartEnd.svelte}
```

## Chat with image

```svelte example
{#include WithImage.svelte}
```

## Chat with image, header and footer

```svelte example
{#include ImageHeaderFooter.svelte}
```

## Chat with header and footer

```svelte example
{#include HeaderFooter.svelte}
```

## Chat bubble with colors

```svelte example
{#include Colors.svelte}
```

## Props

| Component    | Prop        | Type                                                     | Default   |
| ------------ | ----------- | -------------------------------------------------------- | --------- |
| `Chat`       | `placement` | `'start' \| 'end'`                                       | `'start'` |
| `ChatBubble` | `color`     | Palette color (`gray`, `primary`, `secondary`, `red`, …) | `'gray'`  |

## References

- [daisyUI Chat bubble](https://daisyui.com/components/chat/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
