<script>
	import Timeline from './Timeline.svelte';
</script>

<svelte:head>
	<title>Ekon - Home</title>
	<meta name="description" content="Ekon food donation game" />
</svelte:head>

<section>
	<div class="content">
		<p class="africa-text">n</p>
		<p class="normal">
			We are EKON, an ALU thinktank on a mission to reduce suicide rates among students in Nigeria
		</p>
		<a href="/about">Read more about us</a>
	</div>
</section>
<div>
	<Timeline/>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: rgb(223, 126, 82);
		height: 100%;
		background-image: url('https://img.freepik.com/free-vector/flat-african-pattern-design_23-2149376292.jpg?w=2000');
		background-repeat: repeat;
		padding: 10px;
	}

	a {
		padding: 10px 30px;
		background-color: yellow;
		color: rgb(41, 20, 10);
		text-decoration: none;
		font-weight: bold;
	}

	.normal {
		color: white;
	}

	.content {
		background-color: rgb(41, 20, 10);
		max-width: 500px;
		padding: 20px;
		text-align: center;
		height: 50vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.africa-text {
		font-family: 'WILD AFRICA', sans-serif;
		font-size: 6rem;
	}
</style>
