<script lang="ts">
	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		type DrawerSettings,
		getDrawerStore,
		Drawer,
		TreeView,
		TreeViewItem,

		LightSwitch

	} from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';
	import Logo from '../components/logo.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();

	const drawerSettings: DrawerSettings = {
		id: 'menu',
		bgDrawer: 'bg-surface-600 text-white',
		bgBackdrop: 'bg-gradient-to-tr from-surface-400/60 to-surface-400/60',
		width: 'w-[280px] md:w-[480px]',
		padding: 'p-4',
		rounded: 'rounded-xl'
	};
	const drawerStore = getDrawerStore();
	function opennav() {
		drawerStore.open(drawerSettings);
	}
	// function closenav() {
	// 	drawerStore.close(drawerSettings);
	// }
</script>

<Drawer>
	<div class="p-10 flex flex-col gap-10">
		<div class="item-center justify-center font-bold">
			<a href="/" class="flex gap-5 item-center justify-center items-center">
				<Logo width={50} height={50} />
				<p class="text-xl uppercase flex item-center justify-center">GreenPrint</p>
			</a>
		</div>
		<TreeView>
			<TreeViewItem>
				Accueil
				<svelte:fragment slot="children">
					<TreeViewItem>
						(Child 1)
						<svelte:fragment slot="children">
							<TreeViewItem>(Child of Child 1)</TreeViewItem>
							<TreeViewItem>(Child of Child 2)</TreeViewItem>
						</svelte:fragment>
					</TreeViewItem>
					<TreeViewItem>(Child 2)</TreeViewItem>
				</svelte:fragment>
			</TreeViewItem>
			<TreeViewItem>A propos de nous</TreeViewItem>
			<TreeViewItem>Les projets</TreeViewItem>
			<TreeViewItem>Les Objectifs du développement durable</TreeViewItem>
			<TreeViewItem>Comment contribuer ?</TreeViewItem>
		</TreeView>
	</div>
</Drawer>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<!-- Menu Button (on the left) -->
				<button class="btn variant-ghost" on:click={opennav}> &#9776; Menu </button>
			</svelte:fragment>
			<div class="gap-5 item-center justify-center items-center">
				<a href="/" class="flex gap-5 item-center justify-center items-center">
					<Logo width={50} height={50} />
					<strong class="text-xl uppercase flex item-center justify-center">GreenPrint</strong>
				</a>
			</div>
			<svelte:fragment slot="trail">
				<!-- Login/Sign-up Buttons (on the right) -->
				<a href="/login">
					<button class="btn variant-outline">Login</button>
				</a>
				<a href="/signup">
					<button class="btn variant-soft-primary">Sign Up</button>
				</a>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />
</AppShell>
