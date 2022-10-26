<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="logo">EKON - African Trivia</div>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:active={$page.url.pathname === '/about'}>
				<a href="/about">About</a>
			</li>
			<li class:active={$page.url.pathname.startsWith('/sverdle')}>
				<a href="/play">Play</a>
			</li>
		</ul>
	</nav>
	<div class="links">
		<a>Follow us</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.logo,
	.links {
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
</style>
