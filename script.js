let bookButton = document.getElementById("execButton");

bookButton.addEventListener("click", function() {
	let zodiacInput = document.getElementById("inputZodiac").value;
	generate(zodiacInput);
	restyle(outputText);
});

function generate(zodiac) {

	let books = [ 
		"'Tender is the Flesh'",
		"'Beautiful World, Where are you'",
		"'Normal People'",
		"'A Court of Thorns and Roses'",
		"'Before the Coffee gets Cold'",
		"'If we were villains'",
		"'The Silent Patient'",
		"'The Song of Achilles'",
		"'The Seven Husbands of Evelyn'",
		"'Diary of a Void'",
	];

	let randBookIndex = Math.floor(Math.random() * 10);
	let randBook = books[randBookIndex];
	let output = "Based on your Zodiac Sign, " + zodiac + ", I recommend " + randBook;
	let outputText = document.getElementById("outputText");
	outputText.innerText = output;
}

function restyle(output) {
	var randR = Math.floor(Math.random() * 255);
	var randG = Math.floor(Math.random() * 255);
	var randB = Math.floor(Math.random() * 255);
	output.style.backgroundColor = "rgb("+randR+", "+randG+", "+randB+")";

	var randR2 = Math.floor(Math.random() * 255);
	var randG2 = Math.floor(Math.random() * 255);
	var randB2 = Math.floor(Math.random() * 255);
	output.style.color = "rgb("+randR2+", "+randG2+", "+randB2+")";

	let fonts = ["Times New Roman", "Arial", "Impact", "Verdana", "Courier New"];
	randomStyleNum = Math.floor(Math.random() * 6);
	output.style.fontFamily = fonts[randomStyleNum];
}