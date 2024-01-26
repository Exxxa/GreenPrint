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
            title: "Mock Project 1",
            description: "Projet qui met en avant l'ODD 1",
            image: "https://www.wwf.org.uk/sites/default/files/styles/hero_s/public/2023-09/Tropical.jpg?h=790be497&itok=JbFUM0J_",
            link: "/"
        },
        {
            title: "Mock Project 2",
            description: "Projet qui met en avant l'ODD 15",
            image: "https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg",
            link: "/"
        },
        {
            title: "Mock Project 3",
            description: "Projet qui met en avant l'ODD 13",
            image: "https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2023/12/shutterstock_1958468266.jpg",
            link: "/"
        },
        {
            title: "Mock Project 4",
            description: "Projet qui met en avant l'ODD 1",
            image: "https://www.wwf.org.uk/sites/default/files/styles/hero_s/public/2023-09/Tropical.jpg?h=790be497&itok=JbFUM0J_",
            link: "/"
        },
        {
            title: "Mock Project 5",
            description: "Projet qui met en avant l'ODD 15",
            image: "https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg",
            link: "/"
        },
        {
            title: "Mock Project 6",
            description: "Projet qui met en avant l'ODD 13",
            image: "https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2023/12/shutterstock_1958468266.jpg",
            link: "/"
        }
    ];
</script>

<div class="flex flex-wrap justify-center gap-32 p-14">
    {#each ideaList as idea}
        <Card title={idea.title} description={idea.description} image={idea.image} link={idea.link} />
    {/each}
</div>