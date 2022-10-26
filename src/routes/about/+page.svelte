<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<div class="content">
		<h1>We are Ekon</h1>
		<p>
			We are a think tank at the African Leadership University. We created this game to raise funds
			to fight against child malnutrition in Rwanda.
		</p>
		<p>We also hope that by playing our game, you may learn more about Africa.</p>
	</div>
</div>

<style>
	h1 {
		font-family: 'Tribeca';
		font-size: 3.5rem;
		text-align: center;
		margin-bottom: 50px;
	}

	p {
		text-align: center;
	}
	.text-column {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80vh;
	}

	.content {
		max-width: 800px;
		padding: 15px;
	}
</style>
