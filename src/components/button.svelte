<script lang="ts">
	import { mg } from '../lib/utils';

	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let link: string = '#';
</script>

<a href={link}>
	<button
		class={mg(
			'btn',
			size === 'sm' && 'btn-sm',
			size === 'md' && 'btn-md',
			size === 'lg' && 'btn-lg',
			size === 'xl' && 'btn-xl'
		)}
	>
		<slot />
	</button>
</a>
