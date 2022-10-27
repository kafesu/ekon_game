<script>
	import Answers from './Answers.svelte';

	export let question;
</script>

<div class="container">
	<div class="question">
		<h2>{question.prompt}</h2>
		<Answers
			on:answered
			answers={question.possibleAnswers}
			correctAnswer={question.correctAnswer}
		/>
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		background-color: rgb(133, 61, 28);
		box-shadow: 8px 8px 20px black;
		border-radius: 10px;
	}
	.question {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		background-color: rgb(53, 29, 18);
		box-shadow: 8px 8px 20px black inset;
		border-radius: 10px;
		padding: 20px;
		height: 100%;
		width: 100%;
	}

	h2 {
		font-size: 1.5rem;
		text-align: center;
	}

	@media (min-width: 600px) {
		h2 {
			font-size: 2rem;
		}
	}

	@media (min-width: 750px) {
		h2 {
			font-size: 2.5rem;
		}
	}

	@media (min-width: 1000px) {
		h2 {
			font-size: 3rem;
		}
	}
</style>
