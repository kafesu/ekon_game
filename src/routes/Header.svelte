<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="logo">EKON</div>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname === '/play'}>
				<a href="/play">Play</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.logo {
		padding: 15px 10px;
	}

	ul {
		display: flex;
		list-style-type: none;
	}

	li {
		padding: 15px 10px;
	}

	a {
		text-decoration: none;
		font-weight: bold;
		text-transform: uppercase;
		color: white;
	}

	@media only screen and (max-width: 600px) {
		header {
			font-size: 0.8rem;
		}
	}
</style>
