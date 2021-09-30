const angle = document.querySelectorAll(".angle-input");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");

function remove() {
	message.innerText = "";
}

btn.addEventListener("click", function () {
	const angle1 = parseInt(angle[0].value);
	const angle2 = parseInt(angle[1].value);
	const angle3 = parseInt(angle[2].value);

	if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
		const sum = angle1 + angle2 + angle3;

		if (sum == 180) {
			message.innerText = "Yay Its a triangle !";
		} else {
			message.innerText = "Oh no! Its not a triangle 😞";
		}
		angle[0].value = "";
		angle[1].value = "";
		angle[2].value = "";
	} else {
		message.innerText = "Please Enter Valid Angles !";
	}
});
