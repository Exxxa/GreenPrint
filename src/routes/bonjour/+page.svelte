<script lang="ts">
    import { Heart } from 'lucide-svelte';
    import { Plus } from 'lucide-svelte';
    export let NomDuProjet:string = "Nom du projet"
    export let TypeDeProjet:string = "Type de projet"
    export let Récompenses:string = "XX €"
    export let DescriptionText:string = "En vertu de ces principes et de celui de la libre détermination des peuples, la République offre aux territoires d'outre-mer qui manifestent la volonté d'y adhérer des institutions nouvelles fondées sur l'idéal commun de liberté, d'égalité et de fraternité et conçues en vue de leur évolution démocratique."
    export let MissionsText:string[] = ["Premier article","Second article","Troisième article"]
    export let Commanditaire:string = "Acme Inc."
    export let CommanditaireText:string = "Texte intégral en vigueur à jour de la révision constitutionnelle du 23 juillet 2008"
    export let NumODD:string = "1"
    export let NumVote:string = "0"
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
            <ul class="list-disc pl-5">
                {#each MissionsText as mt, index}
                    <li> {mt}</li>
                {/each}
            </ul>
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