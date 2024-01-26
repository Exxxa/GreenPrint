<script lang="ts">
    export let NomDuProjet:string = "Nom du projet"

</script>

<div class="grid grid-cols-10 ">
	<div class="col-span-2 h-screen flex flex-col gap-5 p-8">
        <h1 class="text-3xl" >{NomDuProjet}</h1>
        <button type="button" class="btn variant-filled">Général</button>
        <button type="button" class="btn variant-filled">Récompenses</button>
        <button type="button" class="btn variant-filled">Contributions</button>
        <button type="button" class="btn variant-filled">??</button>
        
	</div>

	<div class="col-span-6 h-screen flex flex-col gap-14 p-16">  
        <form class="flex flex-col gap-2">
			<label class="label">
				<span>Nom Du Projet :</span>
				<input class="input p-1" placeholder="Le nom du projet" />
			</label>
			<label class="label">
				<span>Type de projet :</span>
				<input class="input p-1" placeholder="Le type de projet" />
			</label>
            <label class="label">
				<span>Introduction :</span>
				<input class="input p-1" placeholder="L'introductio du projet" />
			</label>
            <label class="label">
				<span>Description :</span>
				<input class="input p-1" placeholder="La description du projet" />
			</label>
            <label class="label">
				<span>Missions :</span>
				<input class="input p-1" placeholder="Les missions du projet" />
			</label>
		</form>
		<button type="button" class="btn variant-filled">Sauvegarder</button>
	</div>

	
</div>