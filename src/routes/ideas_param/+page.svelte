<script lang="ts">
    export let NomDuProjet:string = "Nom du projet"
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import General from './general.svelte';
	import Recompenses from './rewards.svelte';
	import Contributions from './contrib.svelte';
	let tabSet: number = 0;
</script>

<div class="grid grid-cols-10 ">
	<div class="col-span-10 p-16">
		<TabGroup>
			<Tab bind:group={tabSet} name="tab1" value={0}>
				<span>Général</span>
			</Tab>
			<Tab bind:group={tabSet} name="tab2" value={1}>Récompenses</Tab>
			<Tab bind:group={tabSet} name="tab3" value={2}>Contributions</Tab>
			<Tab bind:group={tabSet} name="tab3" value={3}>(???)</Tab>
			<!-- Tab Panels --->
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<General/>
				{:else if tabSet === 1}
					<Recompenses/>
				{:else if tabSet === 2}
					<Contributions/>
				{:else if tabSet === 3}
					(tab panel 4 contents)
				{/if}
			</svelte:fragment>
		</TabGroup>
	</div>
</div>