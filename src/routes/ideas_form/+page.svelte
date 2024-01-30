<script lang="ts">
    export let NomDuProjet:string = "Nom du projet"
	let tabSet: number = 0;
</script>

<div class="max-w-3xl m-auto">

<form class="col-span-5 flex flex-col gap-5">
    <h1 class="text-center text-3xl" >Poster une nouvelle idée</h1>

	<div class="grid grid-cols-22 gap-5">
		<label class="label col-span-12">
			<span>Nom Du Projet :</span>
			<input class="input p-1" placeholder="Le nom du projet" />
		</label>
		<label class="label col-span-3">
			<span>Montant récompense :</span>
			<input class="input p-1" placeholder="XX" />
		</label>
		<label class="label col-span-3">
			<span>Device récompense :</span>
			<select class="select">
				<option value="1">€ </option>
				<option value="2">US$</option>
				<option value="3">£</option>
		</select>
		</label>
		<label class="label col-span-6">
			<span>ODD :</span>
			<input class="input p-1" placeholder="N°" />
		</label>
	</div>

	<div class="grid grid-cols-8 gap-5">
		<label class="label col-span-4">
            <label class="label">
                <span>Type de projet :</span>
                <select class="select">
                    <option value="1">Dev</option>
                    <option value="2">Sécu</option>
                    <option value="3">Initiation/Sensibilisation</option>
                    <option value="4">Autre</option>
                    <option value="5">oui</option>
                </select>
            </label>
		</label>
		
		<label class="label col-span-4">
            <label class="label">
                <span>Commanditaire du projet :</span>
                <select class="select">
                    <option value="1">Jean Michel</option>
                    <option value="2">Prout</option>
                    <option value="3">Zerator</option>
                    <option value="4">Jojo</option>
                    <option value="5">oui</option>
                </select>
            </label>
		</label>
		
	</div>

	<label class="label">
		<span>Description :</span>
        <textarea class="textarea" rows="4" placeholder="La description du projet" />
	</label>
	<label class="label">
		<span>Missions :</span>
        <textarea class="textarea" rows="4" placeholder="Les missions du projet" />
	</label>
	<button type="button" class="btn variant-filled">Sauvegarder</button>
</form>
</div>
