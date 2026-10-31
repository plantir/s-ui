<script lang="ts">
	import { Chat, ChatBubble } from '$lib/index';
	import type { ChatBubbleProps, ChatProps } from '$lib/types';

	const messages: {
		placement: ChatProps['placement'];
		color: ChatBubbleProps['color'];
		text: string;
	}[] = [
		{ placement: 'start', color: 'primary', text: 'What kind of nonsense is this' },
		{
			placement: 'start',
			color: 'secondary',
			text: 'Put me on the Council and not make me a Master!??'
		},
		{
			placement: 'start',
			color: 'purple',
			text: "That's never been done in the history of the Jedi."
		},
		{ placement: 'start', color: 'gray', text: "It's insulting!" },
		{ placement: 'end', color: 'blue', text: 'Calm down, Anakin.' },
		{ placement: 'end', color: 'green', text: 'You have been given a great honor.' },
		{ placement: 'end', color: 'yellow', text: 'To be on the Council at your age.' },
		{ placement: 'end', color: 'red', text: "It's never happened before." }
	];
</script>

{#each messages as { placement, color, text } (text)}
	<Chat {placement}>
		<ChatBubble {color}>{text}</ChatBubble>
	</Chat>
{/each}
