<script lang="ts">
    import Card from '../../../components/card.svelte';

    interface Idea {
        title: string;
        description: string;
        image: string;
        link: string;
    }

    let ideaList: Idea[] = [
        {
            title: 'test',
            description: 'OKOK',
            image: 'https://f.hellowork.com/blogdumoderateur/2013/10/google-logo.png',
            link: "https://google.com"
        },
        {
            title: 'test',
            description: 'OKOK',
            image: 'https://google.com/test',
            link: "/"
        },
        {
            title: 'test',
            description: 'OKOK',
            image: 'https://google.com/test',
            link: "/"
        }
    ];
</script>

<div class="flex flex-wrap justify-center items-center gap-32 p-14">
    {#each ideaList as idea}
        <Card title={idea.title} description={idea.description} image={idea.image} link={idea.link} />
    {/each}
</div>