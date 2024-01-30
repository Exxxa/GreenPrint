<script lang="ts">
	export let data;
	let username = '';
	let ideas = data.ideas.items;
	if (data.user && data.user.model !== null) {
		username = data.user.model.username;
	}
</script>

<p>{username}</p>

{#each ideas as idea}
	<p>{idea.title}</p>
	<p>{idea.description}</p>
{/each}
