<script lang="ts">
    import Icon from "$lib/assets/icon.png"
	import { Avatar } from "@skeletonlabs/skeleton";
	import { Twitter, Instagram, Gitlab } from "lucide-svelte";
    import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
</script>


<div class="m-auto w-96 flex gap-5 my-10 justify-center items-center">
    <Avatar src={Icon} width="w-32 h-32" rounded="rounded-full" />
    <div class="flex flex-col gap-2">
        <h2 class="text-3xl mb-2 font-semibold underline decoration-2 decoration-primary-600 underline-offset-8">Dylouwu</h2>
        <p class="font-bold" >1 <span class="font-normal">followers</span> · 1 <span class="font-normal">following</span></p>    
        <p>Ma description blablabla</p>
        <div class="flex gap-2">
            <a target="_blank" href="https://twitter.com"><Twitter/></a>
            <a target="_blank" href="https://instagram.com"><Instagram/></a>
            <a target="_blank" href="https://instagram.com"><Gitlab/></a>
        </div>
        
    </div>

</div>

<TabGroup 
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full"
>
	<TabAnchor href="/profile/projects" selected={$page.url.pathname === '/profile/projects'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
    <TabAnchor href="/profile/starredprojects" selected={$page.url.pathname === '/profile/starredprojects'}>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
</TabGroup>
