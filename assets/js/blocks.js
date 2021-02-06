function createBlocks() {
	const div = document.getElementsByClassName("bga");
	const block = document.createElement("div");
	block.classList.add("bg");
	block.style.transform = "scale(" + Math.random() + ")";

	block.style.top = Math.random() * innerHeight + "px";

	var right = Math.random() * 250 + 250;
	block.style.right = "-" + right + "px";

	block.style.opacity = Math.random() * 0.5;

	console.log(div);
	console.log(block);

	div[0].appendChild(block);

	setTimeout(() => {
		block.remove();
	}, 30000);
}
setInterval(createBlocks, 3000);
