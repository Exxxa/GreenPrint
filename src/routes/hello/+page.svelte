<script lang="ts">
    export let data
    let idea = data.idea
    import { Heart } from 'lucide-svelte';
    import { Plus } from 'lucide-svelte';
    
    let NomDuProjet:string = idea.title
    let TypeDeProjet:string = idea.type
    let Récompenses:string = idea.reward + " €"
    let DescriptionText:string = idea.description
    let MissionsText:string = idea.mission
    let Commanditaire:string = idea.creators
    let CommanditaireText:string = "Texte intégral en vigueur à jour de la révision constitutionnelle du 23 juillet 2008"
    let NumODD:string = idea.odd
    let NumVote:string = "0"
</script>

<div class="grid grid-cols-5 ">
	<div class="col-span-4 h-screen flex flex-col gap-5 p-16">
        <h1 class="text-3xl" >{NomDuProjet}</h1>
        <h2 class="text-2xl" >{TypeDeProjet}</h2>
        <div>
            <p><span class="underline"> Récompense :</span> {Récompenses}</p>
        </div>
        <div>
            <p class="underline">Description :</p>
            <p>{DescriptionText}</p>
        </div>
        <div>
            <p class="underline">Liste des missions :</p>
            <p>{MissionsText}</p> 
        </div>

        
	</div>

	<div class="col-span-1 h-screen flex flex-col gap-14 p-8">
        <button type="button" class="btn variant-filled">ODD    N° <a href="#">{NumODD}</a></button>
        
        <button type="button" class="btn variant-filled">            
            <span>Votes</span>
            <span><a href="#"><Plus/></a></span>
            <span>    {NumVote}</span>
        </button>
        
        <button type="button" class="btn variant-filled">            
            <span>Suivre</span>
            <span><a href="#"><Heart/></a></span>
        </button>

        <div>
            <p class="underline">Commanditaire :</p>
            <p>{Commanditaire}</p>
            <p class="underline">A propos du commanditaire :</p>
            <p>{CommanditaireText}</p>
        </div>
	</div>
</div>