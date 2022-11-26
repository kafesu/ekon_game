<script>
	export let name, img, bio;
	let showBio = false;
</script>

<div class="card">
	<img src={img} alt={'A picture of ' + name} />
	<div class="bio">
		<h3>{name}</h3>
		<p>{bio}</p>
	</div>
</div>

<style>
	.card {
		max-width: 400px;
	}

	p {
		text-align: center;
		color: lightgray;
	}

	h3 {
		font-size: 1.5rem;
		text-align: center;
	}

	img {
		width: 100%;
	}
</style>
