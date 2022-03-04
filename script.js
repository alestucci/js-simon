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

const messageBox = document.querySelector(".given-numbers");
//console.log(messageBox);

function hideNumbers() {
	// console.log("qui nascondo i numeri");
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
	let result = 0;
	for (let i = 0; i < inputBox.length; i++) {
		if (isNaN(parseInt(inputBox[i].value))) {
            messageBox.innerHTML = "";
			const message = document.createElement("div");
			message.classList.add("message");
			message.innerHTML = "&#128308; Insert valid numbers &#128308;";
			messageBox.append(message);
		} else {
            inputBox[i].disabled = !inputBox[i].disabled;
            if (numbersGiven.includes(parseInt(inputBox[i].value))) {
                inputBox[i].classList.add("bg-green");
				result++;
			} else {
                inputBox[i].classList.add("bg-red");
			}
            console.log(result);
            resetBtn.classList.toggle("hidden");
            messageBox.innerHTML = "";
            const message = document.createElement("div");
            message.classList.add("score");
            message.innerHTML = `Score: ${result} / 5`;
            messageBox.append(message);
            checkBtn.classList = "inactive";
            checkBtn.removeEventListener("click", checkValues);
		}
	}
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
	//3 secondi al posto di 30 perché sono un'eternità
	setTimeout(hideNumbers, 3000);
	setTimeout(showFields, 3000);
}

function reloadPage() {
	for (let input = 0; input < inputBox.length; input++) {
		inputBox[input].value = "";
	}
	location.reload();
}
