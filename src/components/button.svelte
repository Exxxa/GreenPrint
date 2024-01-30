<script lang="ts">
	import type { Icon } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	import { mg } from '../lib/utils';

	export let color: 'primary' | 'default' = 'default';
  	export let type: 'outline' | 'ghost' | 'full' = 'full';
	export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let link: string = '#';
	export let icon: ComponentType<Icon>;
</script>

<a href={link}>
	<button
		class={mg(
			'btn',
			"flex gap-2 items-center justify-center text-centers",
			size === 'sm' && 'btn-sm',
			size === 'md' && 'btn-md',
			size === 'lg' && 'btn-lg',
			size === 'xl' && 'btn-xl',
			color === 'primary' && 'text-primary-700',
			type === 'outline' && 'variant-outline',
			type === 'full' && 'variant-filled',
			type === 'ghost' && 'variant-ghost'
		)}
	>
	{#if icon !== undefined}
		<svelte:component this={icon} class="w-5" />
	{/if}
		<slot />
	</button>	
</a>