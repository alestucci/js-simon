//Click sul bottone crea 5 numeri casuali (da 1 a 100??) non ripetuti
const playBtn = document.querySelector(".play");
console.log(playBtn);
const numbersGiven = [];

playBtn.addEventListener("click", randomFiveNumbersGenerator);
// playBtn.addEventListener("click", startTimeout);
playBtn.addEventListener("click", deactivateBtn);

//i numeri vengono mostrati a video per 30 secondi (le prove le faremo con 3 secondi)
//playBtn.addEventListener('click', numbersShow);

// dopo i 30 secondi i numeri scompaiono e compaiono 5 campi per l'inserimento dei numeri
//playBtn.addEventListener('click', timerThirtySec);

//dopo aver inserito i 5 numeri il programma controlla quanti e quali siano esatti

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", reloadPage);

function hideNumbers() {
	// console.log("qui nascondo i numeri");
	const messageBox = document.querySelector(".given-numbers");
	console.log(messageBox);
	messageBox.innerHTML = "";
	const message = document.createElement("div");
	message.classList.add("message");
	message.innerHTML = "Insert numbers:";
	messageBox.append(message);
	// const messageDiv = document.querySelector('#message');
	// console.log(messageDiv);
	//message.classList.toggle("display-none");
}

function showFields() {
	const inputBox = [...document.querySelectorAll(".prompt")];
	console.log(inputBox);
	for (let i = 0; i < inputBox.length; i++) {
		inputBox[i].classList.toggle("display-none");
	}
	const checkBtn = document.querySelector(".check");
	console.log(checkBtn);
    checkBtn.classList.toggle('hidden');
	checkBtn.addEventListener("click", prova);
}

function deactivateBtn() {
	this.classList = "inactive";
	this.innerHTML = "Playing...";
}

function prova() {
	console.log("la funzione prova viene avviata correttamente");
}

function randomFiveNumbersGenerator() {
	// const numbersGiven = [];
	while (numbersGiven.length < 5) {
		let randomNum = Math.floor(Math.random() * 99 + 1);
		console.log(randomNum);
		if (numbersGiven.indexOf(randomNum) == -1) {
			numbersGiven.push(randomNum);
		}
	}
	console.log(numbersGiven);

	const numbersShow = document.querySelector(".given-numbers");
	console.log(numbersShow);
	for (let i = 0; i < numbersGiven.length; i++) {
		let box = document.createElement("div");
		box.classList.add("box");
		box.innerHTML = numbersGiven[i];
		numbersShow.append(box);
	}

	playBtn.removeEventListener("click", randomFiveNumbersGenerator);

	setTimeout(hideNumbers, 1000);
	setTimeout(showFields, 1000);
}

function reloadPage() {
	location.reload();
}
