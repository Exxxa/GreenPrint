<script lang="ts">
	import { AppShell } from "@skeletonlabs/skeleton";
    import Navigation from "./navigation.svelte";
</script>

<!-- App Shell -->
<AppShell>
    <svelte:fragment slot="header">
        <Navigation />
    </svelte:fragment>
    <slot />
</AppShell>