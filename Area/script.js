const length = document.querySelectorAll(".len-input");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message");

btn.addEventListener("click", function () {
	const base = Number(length[0].value);
	const height = Number(length[1].value);

	if (base > 0 && height > 0) {
		calculateArea(base, height);
	} else {
		message.innerText = "Enter Valid Length";
	}
});

function remove() {
	message.innerText = "";
}

function calculateArea(b, h) {
	const product = b * h;
	const area = (1 / 2) * product;

	message.innerText = `The Area of Triangle is ${area} cm^2`;
	length[0].value = "";
	length[1].value = "";
}
