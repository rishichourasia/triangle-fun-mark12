const length = document.querySelectorAll(".len-input");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");

btn.addEventListener("click", function () {
	const lengthA = Number(length[0].value);
	const lengthB = Number(length[1].value);

	if (lengthA > 0 && lengthB > 0) {
		calculateHypo(lengthA, lengthB);
	} else {
		message.innerText = "Enter Valid Length";
	}
});

function remove() {
	message.innerText = "";
}

function calculateHypo(a, b) {
	const sum = a * a + b * b;

	const lengthOfHypo = Math.floor(Math.sqrt(sum));
	message.innerText = `The length of the hypotenuse is ${lengthOfHypo} cm`;

	length[0].value = "";
	length[1].value = "";
}
