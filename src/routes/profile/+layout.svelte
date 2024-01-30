<script lang="ts">
    import Icon from "$lib/assets/icon.png"
	import { Avatar, LightSwitch } from "@skeletonlabs/skeleton";
	import { Twitter, Instagram, Gitlab, FolderKanban, ArrowBigUp } from "lucide-svelte";
    import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
	let abonnements = 1;
	let abonnes = 2;

</script>

<div class="m-auto my-4 sm:my-10 w-screen flex flex-col sm:flex-row sm:gap-24 mb-8 justify-center items-center">
    <Avatar src={Icon} width="w-44 h-44" rounded="rounded-full" class="my-8"/>
    <div class="flex flex-col gap-2">
        <h2 class="text-3xl mb-2 font-semibold underline decoration-2 decoration-primary-600 underline-offset-8">Dylouwu</h2>
        <p class="font-bold" >
			<a href="/profile/following" class="hover:text-primary-700 transition-colors">{abonnements} <span class="font-normal">{abonnements === 1? "abonnement" : "abonnements"}</span></a> · <a href="/profile/followers" class="hover:text-primary-700 transition-colors">{abonnes} <span class="font-normal">{abonnes === 1? "abonné" : "abonnés"}</span></a>
		</p>    
        <p>Vive les ODD !</p>
        <div class="flex gap-2 mt-3">
            <a target="_blank" href="https://twitter.com" class="hover:text-primary-700 transition-colors"><Twitter/></a>
            <a target="_blank" href="https://instagram.com" class="hover:text-primary-700 transition-colors"><Instagram/></a>
            <a target="_blank" href="https://gitlab.com" class="hover:text-primary-700 transition-colors"><Gitlab/></a>
        </div>
        
    </div>

</div>

<TabGroup 
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary transition-colors"
	flex="flex-1 lg:flex-none"
	rounded=""
	class="bg-surface-100-800-token w-full sticky top-0 z-[1]"
>
	<TabAnchor href="/profile/projects" selected={$page.url.pathname === '/profile/projects'}>
		<svelte:fragment slot="lead"><FolderKanban class="w-full flex items-center"/></svelte:fragment>
		<span>Projets</span>
	</TabAnchor>
    <TabAnchor href="/profile/upvotedprojects" selected={$page.url.pathname === '/profile/upvotedprojects'}>
		<svelte:fragment slot="lead"><ArrowBigUp class="w-full flex items-center" /></svelte:fragment>
		<span>Upvotes</span>
	</TabAnchor>
</TabGroup>
<slot />