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
