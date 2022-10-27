<script>
	import { points } from './points';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let answers = [],
		correctAnswer = 0;

	function attempt(index, el) {
		if (index === correctAnswer) {
			// Increase points
			points.update((p) => p + 10);

			// Change button colour
			changeColour(el, 'green');
		} else {
			changeColour(el, 'red');
		}

		// Notify the parent component to change the question
		dispatch('answered');
	}

	function changeColour(element, colour) {
		const orginalColour = element.style.backgroundColor;

		element.style.backgroundColor = colour;

		setTimeout(() => {
			element.style.backgroundColor = orginalColour;
		}, 400);
	}
</script>

<div>
	{#each answers as answer, index}
		<button on:click={(e) => attempt(index, e.target)}>{answer}</button>
	{/each}
</div>

<style>
	button {
		background-color: rgba(255, 255, 255, 0.1);
		border: 1px solid saddlebrown;
		color: white;
		padding: 10px;
		font-size: 0.9rem;
		width: 100%;
	}

	div {
		width: 100%;
		max-width: 800px;
		display: grid;
		grid-template-columns: 1fr;
		gap: 5px;
	}

	@media (min-width: 600px) {
		div {
			grid-template-columns: 1fr 1fr;
		}

		button {
			font-size: 1rem;
		}
	}

	@media (min-width: 800px) {
		button {
			font-size: 1.2rem;
		}
	}

	@media (min-width: 950px) {
		div {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

		button {
			font-size: 1.3rem;
		}
	}
</style>
