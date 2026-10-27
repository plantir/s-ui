<script lang="ts">
	import { Avatar, Chat, ChatBubble, ChatFooter, ChatHeader, ChatImage } from '$lib/index';
</script>

<Chat placement="start">
	<ChatImage>
		<Avatar src="/images/people/profile-picture-5.jpg" alt="Obi-Wan Kenobi" />
	</ChatImage>
	<ChatHeader>
		Obi-Wan Kenobi
		<time class="text-xs opacity-50">12:45</time>
	</ChatHeader>
	<ChatBubble>You were the Chosen One!</ChatBubble>
	<ChatFooter>Delivered</ChatFooter>
</Chat>
<Chat placement="end">
	<ChatImage>
		<Avatar src="/images/people/profile-picture-3.jpg" alt="Anakin" />
	</ChatImage>
	<ChatHeader>
		Anakin
		<time class="text-xs opacity-50">12:46</time>
	</ChatHeader>
	<ChatBubble>I hate you!</ChatBubble>
	<ChatFooter>Seen at 12:46</ChatFooter>
</Chat>
