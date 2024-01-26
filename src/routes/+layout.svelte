<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
  
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
  </script>
  
  <!-- App Shell -->
  <AppShell>
	<svelte:fragment slot="header">
	  <!-- App Bar -->
	  <AppBar>
		<svelte:fragment slot="lead">
		  <!-- Menu Button (on the left) -->
		  <button class="text-white">
			<!-- You can use an icon or any symbol for the menu -->
			&#9776; Menu
		  </button>
		</svelte:fragment>
		<strong class="text-xl uppercase flex item-center justify-center">GreenPrint</strong> 
		<svelte:fragment slot="trail">
		  <!-- Login/Sign-up Buttons (on the right) -->
		  <button class="text-white">Login</button>
		  <button class="text-white border border-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded">Sign Up</button>
		</svelte:fragment>
	  </AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
  </AppShell>
  