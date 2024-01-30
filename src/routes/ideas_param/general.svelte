

<form class="col-span-5 flex flex-col gap-5">
			
	<div class="grid grid-cols-10 gap-5">
		<label class="label col-span-7">
			<span>Nom Du Projet :</span>
			<input class="input p-1" placeholder="Le nom du projet" />
		</label>
	
		<label class="label col-span-3">
			<span>ODD :</span>
			<input class="input p-1" placeholder="N°" />
		</label>
	</div>

	<div class="grid grid-cols-10 gap-5">
		<label class="label col-span-5">
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
		
		<label class="label col-span-5">
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