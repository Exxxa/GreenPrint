<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Sidebar from './sidebar/+page.svelte';
  
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
  </script>
  
  <AppShell>
	<svelte:fragment slot="header">
	  <AppBar>
		<svelte:fragment slot="lead">
		  <button class="text-white">
			&#9776; Menu
		  </button>
		</svelte:fragment>
		<strong class="text-xl uppercase flex items-center justify-center">GreenPrint</strong> 
		<svelte:fragment slot="trail">
		  <button class="text-white">Login</button> 
		  <button class="text-white border border-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded">Sign Up</button>
		</svelte:fragment>
	  </AppBar>
	</svelte:fragment>
	<slot />
  </AppShell>
  