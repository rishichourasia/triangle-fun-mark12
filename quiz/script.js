const quizData = document.querySelector(".quiz-form");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");
const msgBox = document.querySelector(".message-box");

const answers = [
	"90°",
	"Right angled",
	"Equilateral triangle",
	"Two sides are equal",
];

btn.addEventListener("click", function (e) {
	e.preventDefault();
	const data = new FormData(quizData);

	let index = 0;
	score = 0;

	for (let each of data.values()) {
		if (each === answers[index]) {
			score++;
		}
		index++;
	}

	message.innerText = `Your Score is ${score} out of 4`;

	msgBox.innerHTML += `<button class="again" onclick="playAgain()" >Play Again</button>`;
	btn.disabled = true;
});

function playAgain() {
	location.reload();
}
