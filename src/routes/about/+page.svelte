<script>
	import Team from './Team.svelte';
	import Header from './Header.svelte';
	import Mission from './Mission.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<div class="content">
		<Header />
		<Mission />
		<Team />
	</div>
</div>
