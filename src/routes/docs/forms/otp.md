---
layout: componentLayout
title: Svelte OTP
breadcrumb_title: Svelte OTP
component_title: OTP
dir: Forms
description: OTP (One-Time Password) input for verification codes used in two-factor authentication or passwordless login
---

<script lang="ts">
  import { GitHubCompoLinks, LlmLink } from '../../utils'
</script>

OTP (One-Time Password) component for inputting verification codes. It's usually 4 to 6 digits long and is used for two-factor authentication (2FA) or passwordless login.

It renders a single input with `autocomplete="one-time-code"`, so pasting a code and SMS autofill work out of the box. The `pattern` and `maxlength` attributes are derived from `count`.

## Setup

```svelte example hideOutput
<script lang="ts">
	import { Otp } from '$lib/index';
</script>
```

## OTP

By default the OTP has 4 digits.

```svelte example
{#include Default.svelte}
```

## OTP with 6 digits

Use the `count` prop to change the number of characters.

```svelte example
{#include SixDigits.svelte}
```

## OTP joined

Use `joined` to connect the character boxes together.

```svelte example
{#include Joined.svelte}
```

## OTP with different sizes

```svelte example class="flex flex-col items-start gap-4"
{#include Sizes.svelte}
```

## OTP with different colors

```svelte example class="flex flex-col items-start gap-4"
{#include Colors.svelte}
```

## OTP disabled

```svelte example
{#include Disabled.svelte}
```

## Binding and completion

Use `bind:value` to read the code and `oncomplete` to react when all characters are entered. Set `numeric={false}` to accept letters as well.

```svelte example class="flex flex-col items-start gap-2"
{#include Binding.svelte}
```

## Props

| Prop         | Type                                                     | Default  |
| ------------ | -------------------------------------------------------- | -------- |
| `count`      | `number`                                                 | `4`      |
| `value`      | `string` (bindable)                                      | `''`     |
| `numeric`    | `boolean`                                                | `true`   |
| `size`       | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                   | `'md'`   |
| `color`      | Palette color (`gray`, `primary`, `secondary`, `red`, …) | `'gray'` |
| `joined`     | `boolean`                                                | `false`  |
| `disabled`   | `boolean`                                                | `false`  |
| `oncomplete` | `(value: string) => void`                                | —        |
| `classes`    | `{ input, cell, caret }`                                 | —        |

Any other attribute (`name`, `required`, `id`, …) is passed to the underlying input.

## References

- [daisyUI OTP](https://daisyui.com/components/otp/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
