<script>
	export let name, img, bio;
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
		color: white;
		font-size: 0.9rem;
	}

	h3 {
		font-size: 1.7rem;
		text-align: center;
		margin: 20px 0px;
		color: rgb(255, 255, 164);
	}

	img {
		width: 100%;
	}
</style>
