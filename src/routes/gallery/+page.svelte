<script>
	import { images } from './images';
</script>

<div>
	{#each images as image}
		<img src={image} alt="EKON thinktank members" />
	{/each}
</div>

<style>
	div {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		gap: 15px;
	}

	img {
		width: 100%;
	}
	
	@media (min-width: 600px) {
		div {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 800px) {
		div {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
