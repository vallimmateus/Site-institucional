const texts = ["você", "o seu negócio", "a sua empresa"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
	if (count === texts.length) {
		count = 0;
	}
	currentText = texts[count];
	letter = currentText.slice(0, ++index);
	let time = 400 / currentText.length;
	document.querySelector(".text").textContent = letter;
	if (letter.length === currentText.length) {
		setTimeout(type, 2500);
		count++;
		index = 0;
	} else {
		setTimeout(type, time);
	}
})();
