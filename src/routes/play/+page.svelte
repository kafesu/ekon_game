<script>
	import { confetti } from '@neoconfetti/svelte';
	import { questionGenerator } from './generateQuestions';
	import { points } from './points';
	import Question from './Question.svelte';

	let questions,
		currentQuestion,
		score = 0;

	points.subscribe((value) => (score = value));

	function startGame() {
		questions = questionGenerator(10);
		currentQuestion = questions.next();
	}

	function changeQuestion() {
		currentQuestion = questions.next();
	}

	startGame();
</script>

<section>
	{#if !currentQuestion.done}
		<Question on:answered={changeQuestion} question={currentQuestion.value} />
	{:else}
		<div class="score-display">
			<div class="end" use:confetti />
			<img src="./treasure-chest.png" alt="Treasure chest" />
			<h1>{score} XP</h1>
			<button on:click={startGame} class="play-again">"Play again"</button>
			<audio src="/final-success.mp3" autoplay={true} />
		</div>
	{/if}
</section>

<style>
	section {
		color: white;
		padding: 50px;
		height: 100%;
		background-repeat: repeat;
		background-image: url('https://img.freepik.com/free-vector/flat-african-pattern-design_23-2149376292.jpg?w=2000');
	}

	.score-display {
		height: 100%;
		padding: 40px;
	}

	h1 {
		font-size: 3.5rem;
	}

	.score-display {
		background-color: rgb(36, 19, 12);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		height: 120px;
	}

	.play-again {
		background-color: yellow;
		padding: 10px 20px;
		border: none;
		font-weight: bold;
	}
</style>
