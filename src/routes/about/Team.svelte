<script>
	import TeamCard from './TeamCard.svelte';

	const team = [
		{
			name: 'Alexier Owomugisha',
			bio: "Open-minded, innovative and goal oriented student pursuing a Bachelor's in Entrepreneurial Leadership with a mission to break down the stigma around mental health by creating a safe space for people to understand their emotions and grow mentally and emotionally. Self- directed and energetic with superior performance in both autonomous or collaborative environments working independently and collaborating with others on group projects.",
			img: '/team/alexier-owomugisha.jpg'
		},
		{
			name: 'Charite Uwatwembi',
			bio: 'Creative Graphic Artist and Designer with talent for developing unique custom artwork. Offering skills of accounting and finance including proficient computer knowledge.',
			img: '/team/charite-uwatwembi.jpg'
		},
		{
			name: 'Anesu Kafesu',
			bio: "A Software Developer and Entrepreneur passionate and curious about how software can be used to solve Africa's problems.",
			img: '/team/anesu-kafesu.jpg'
		},
		{ name: 'Esther Umunyana', bio: '', img: '/team/esther-umunyana.jpg' },
		{
			name: 'Elvis Guy Bakunzi',
			bio: "I'm Elvis, and I am currently interested in Software engineering but looking for a way to break into the industry at ALU",
			img: '/team/elvis-guy-bakunzi.jpg'
		},
		{ name: "Jeremiah Nga'nga", bio: '', img: '/team/jeremiah-nganga.jpg' }
	];
</script>

<h2>The Team</h2>
<div>
	{#each team as { name, bio, img }}
		<TeamCard {name} {bio} {img} />
	{/each}
</div>

<style>
	h2 {
		text-align: center;
		font-size: 2rem;
	}

	div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		row-gap: 40px;
		padding: 50px;
	}
</style>
