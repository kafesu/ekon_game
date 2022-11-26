<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<header>
		<Header />
	</header>

	<main>
		<slot />
	</main>

	<footer>Made with ❤️ by Ekon Think Tank in Kigali</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		height: 7vh;
	}

	main {
		width: 100%;
		height: 88vh;
	}

	footer {
		position: fixed;
		bottom: 10px;
		width: 300px;
		left: calc(50% - 150px);
		background-color: rgb(255, 255, 0);
		color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 5vh;
		font-size: 0.75rem;
	}

	@media (max-width: 480px) {
		footer {
			padding: 5px;
		}
	}
</style>
