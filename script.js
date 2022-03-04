const playBtn = document.querySelector(".play");
//console.log(playBtn);
const numbersGiven = [];

const inputBox = [...document.querySelectorAll(".prompt")];

playBtn.addEventListener("click", randomFiveNumbersGenerator);

playBtn.addEventListener("click", deactivateBtn);

const checkBtn = document.querySelector(".check");
checkBtn.addEventListener("click", checkValues);

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", reloadPage);

function hideNumbers() {
	// console.log("qui nascondo i numeri");
	const messageBox = document.querySelector(".given-numbers");
	//console.log(messageBox);
	messageBox.innerHTML = "";
	const message = document.createElement("div");
	message.classList.add("message");
	message.innerHTML = "Insert numbers:";
	messageBox.append(message);
	// const messageDiv = document.querySelector('#message');
	// console.log(messageDiv);
	//message.classList.toggle("display-none");
}

function checkValues() {
	checkBtn.classList = "inactive";
	checkBtn.removeEventListener("click", checkValues);
	for (let i = 0; i < inputBox.length; i++) {
		inputBox[i].disabled = !inputBox[i].disabled;
	}
	let result = 0;
	for (let i = 0; i < inputBox.length; i++) {
		if (numbersGiven.includes(inputBox[i].value)) {
		result++
        console.log('giuste: ' + result);
        }
	}
	resetBtn.classList.toggle("hidden");
}

function showFields() {
	const inputBox = [...document.querySelectorAll(".prompt")];
	//console.log(inputBox);
	for (let i = 0; i < inputBox.length; i++) {
		inputBox[i].classList.toggle("display-none");
	}
	checkBtn.classList.toggle("hidden");
}

function deactivateBtn() {
	this.classList = "inactive";
	this.innerHTML = "Playing...";
}

function randomFiveNumbersGenerator() {
	// const numbersGiven = [];
	while (numbersGiven.length < 5) {
		let randomNum = Math.floor(Math.random() * 99 + 1);
		//console.log(randomNum);
		if (numbersGiven.indexOf(randomNum) == -1) {
			numbersGiven.push(randomNum);
		}
	}
	console.log(numbersGiven);

	const numbersShow = document.querySelector(".given-numbers");
	//console.log(numbersShow);
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
    for (let input = 0; input < inputBox.length; input++) {
        inputBox[input].value = "";
    }
	location.reload();
}