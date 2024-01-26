<script lang="ts">
	export let title: string = 'Card title';
	export let description: string =
		'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';
	export let image: string =
		'https://www.pixelstalk.net/wp-content/uploads/2016/11/Nature-Images-Foggy-Forest.jpg';
	let alt: string = title + ' image';
</script>

<div class="card card-hover rounded-t-md w-80">
	<img src={image} {alt} class="w-full rounded-t-md" />
	<h2 class="text-2xl p-5">{title}</h2>

	<div class="footer p-5">
		<p>{description}</p>
	</div>
</div>
