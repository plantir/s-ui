<script lang="ts">
	import { ButtonGroup, Button } from 's-ui';
	import {
		UserCircleSolid,
		AdjustmentsVerticalOutline,
		DownloadSolid
	} from 'flowbite-svelte-icons';
</script>

<ButtonGroup class="*:ring-primary-700!">
	<Button>
		<UserCircleSolid class="me-2 h-4 w-4" />
		Profile
	</Button>
	<Button>
		<AdjustmentsVerticalOutline class="me-2 h-4 w-4" />
		Settings
	</Button>
	<Button>
		<DownloadSolid class="me-2 h-4 w-4" />
		Download
	</Button>
</ButtonGroup>
