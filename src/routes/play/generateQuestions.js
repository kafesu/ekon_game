import questions from './questions.json';

export function* questionGenerator(n) {
	let askedQuestions = [];

	for (let i = 0; i < n; i++) {
		let questionId;

		do {
			questionId = Math.floor(Math.random() * questions.length);
		} while (askedQuestions.includes(questionId));

		askedQuestions.push(questionId);

		yield questions[questionId];
	}
}
