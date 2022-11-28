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
		{ name: 'Esther Umunyana', bio: 'Mental health advocate and technology fanatic. Interested in bringing the two world together to help people with mental health challenges.', img: '/team/esther-umunyana.jpg' },
		{
			name: 'Elvis Guy Bakunzi',
			bio: "I'm Elvis, and I am currently interested in Software engineering but looking for a way to break into the industry at ALU",
			img: '/team/elvis-guy-bakunzi.jpg'
		},
		{ name: "Jeremiah Nga'nga", bio: "I am passionate about entrepreneurship and business creation bringing forth to the team an open mind ready to explore opportunities. My Mantra is if it’s legal and ethical just f#cking do it , Grind Win Repeat", img: '/team/jeremiah-nganga.jpg' }
	];
</script>

<h2>The Team</h2>
<section>
	<iframe width="420" height="315" src="https://www.youtube.com/embed/soA17Z2h-_k"> </iframe>
</section>
<div>
	{#each team as { name, bio, img }}
		<TeamCard {name} {bio} {img} />
	{/each}
</div>

<style>
	h2 {
		text-align: center;
		font-size: 2rem;
		font-family: 'Tribeca';
	}

	div {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 40px;
		padding: 50px;
	}
	
	section {
		display: grid;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 600px) {
		div {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 800px) {
		div {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
