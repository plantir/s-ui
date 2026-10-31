<script lang="ts">
	import { Avatar, Chat, ChatBubble, ChatImage } from '$lib/index';

	const messages = [
		'It was said that you would, destroy the Sith, not join them.',
		'It was you who would bring balance to the Force',
		'Not leave it in Darkness'
	];
</script>

{#each messages as message (message)}
	<Chat>
		<ChatImage>
			<Avatar src="/images/people/profile-picture-5.jpg" alt="Obi-Wan Kenobi" />
		</ChatImage>
		<ChatBubble>{message}</ChatBubble>
	</Chat>
{/each}
