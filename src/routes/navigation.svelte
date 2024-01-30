<script lang="ts">

    import '../app.postcss';
	import {
		AppShell,
		AppBar,
		type DrawerSettings,
		getDrawerStore,
		Drawer,
        popup,
        type PopupSettings,
		TreeView,
		TreeViewItem,
		LightSwitch

	} from '@skeletonlabs/skeleton';
    import { CircleUserRound } from 'lucide-svelte';
    import { AlignJustify } from 'lucide-svelte';
    import { LogIn } from 'lucide-svelte';
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
    const popupFeatured: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupFeatured',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
    };
	const drawerStore = getDrawerStore();
	function opennav() {
		drawerStore.open(drawerSettings);
	}


</script>

<Drawer>
<div class="p-10 flex flex-col gap-10">
		<div class="item-center justify-center font-bold ">
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
			<TreeViewItem on:click={() => window.location.href='/settings'}>Settings</TreeViewItem> <!-- New Settings Button -->
		</TreeView>
	</div>
</Drawer>

<!-- App Bar -->
<AppBar>
    <svelte:fragment slot="lead">
        <!-- Menu Button (on the left) -->
        <button class="btn-icon variant-ghost hover:text-secondary-700 transition-colors" on:click={opennav}><AlignJustify /></button>
    </svelte:fragment>
    <div class="flex item-center justify-center items-center">
        <a href="/" class="flex gap-5 item-center justify-center items-center">
            <Logo width={50} height={50} />
            <strong class="text-xl uppercase flex item-center justify-center">GreenPrint</strong>
        </a>
    </div>
    <svelte:fragment slot="trail">
        <!-- Login/Sign-up Buttons (on the right) -->
        <button class="btn-icon variant-ghost hover:text-secondary-700 transition-colors" use:popup={popupFeatured}><CircleUserRound/></button>
        <div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
            <div class="flex flex-col">
                <button class="btn variant-ghost hover:text-secondary-700 transition-colors"><LogIn /> Log-in</button>
                <a href="/signup" class="hover:text-secondary-700 transition-colors">Sign Up</a>
            </div>
            <div class="arrow bg-surface-100-800-token"></div>
        </div>
        

        </svelte:fragment>
</AppBar>