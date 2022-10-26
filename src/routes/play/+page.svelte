<script>
	import { confetti } from '@neoconfetti/svelte';
	let points = 0;

	let questions = [
		{
			question: 'What is the capital city of Kenya?',
			possibleAnswers: ['Kigali', 'Nairobi', 'Timbuktu', 'Harare'],
			correctAnswerIndex: 1
		},
		{
			question: 'What is the capital city of Zimbabwe?',
			possibleAnswers: ['Kigali', 'Nairobi', 'Timbuktu', 'Harare'],
			correctAnswerIndex: 3
		},
		{
			question: 'What is the capital city of Mali?',
			possibleAnswers: ['Kigali', 'Nairobi', 'Timbuktu', 'Harare'],
			correctAnswerIndex: 2
		}
	];

	const tags = [
		'BETTER LUCK NEXT TIME',
		'NOT BAD',
		'ALMOST THERE',
		'SPLENDID',
		'AWESOME',
		'LEGEND'
	];

	function* generateQuestion() {
		for (let question of questions) {
			yield question;
		}
	}

	const questionGenerator = generateQuestion();

	let currentQuestion = questionGenerator.next();

	function attempt(index, target) {
		if (currentQuestion.value.correctAnswerIndex === index) {
			points += 10;
			changeColour(target, 'green');
		} else {
			changeColour(target, 'red');
		}

		currentQuestion = questionGenerator.next();
	}

	function changeColour(element, colour) {
		element.style.backgroundColor = colour;
		setTimeout(() => {
			element.style.backgroundColor = 'rgb(228, 228, 228)';
		}, 400);
	}
</script>

<section>
	{#if !currentQuestion.done}
		<div class="question">
			<div class="title">Score: {points} XP</div>
			<h2>{currentQuestion.value.question}</h2>
			<div class="answers">
				{#each currentQuestion.value.possibleAnswers as possibleAnswer, index}
					<button
						on:click={(event) => {
							attempt(index, event.target);
						}}
					>
						{possibleAnswer}
					</button>
				{/each}
			</div>
		</div>
	{:else}
		<div class="score-display">
			<div class="end" use:confetti />
			<img src="./treasure-chest.png" alt="Treasure chest" />
			<h1>{points} XP</h1>
			"Play again"
			<audio src="/final-success.mp3" autoplay={true} />
		</div>
	{/if}
</section>

<style>
	section {
		color: white;
		padding: 50px;
		height: 80vh;
		background-repeat: repeat;
		background-image: url('https://img.freepik.com/free-vector/flat-african-pattern-design_23-2149376292.jpg?w=2000');
	}

	.question {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		background-color: rgb(53, 29, 18);
		padding: 20px;
		height: 100%;
	}

	.score-display {
		height: 100%;
		padding: 40px;
	}

	h1 {
		font-size: 3.5rem;
	}

	h2 {
		font-size: 3rem;
	}

	.answers {
		display: flex;
		justify-content: center;
	}

	button {
		padding: 10px 20px;
		border: 1px solid rgb(199, 199, 199);
		box-shadow: 5px 5px 10px rgb(36, 19, 12);
		background-color: rgb(228, 228, 228);
		color: rgb(39, 39, 39);
		border-radius: 10px;
		font-size: 1.3rem;
		margin: 10px;
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
</style>
