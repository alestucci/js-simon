//Click sul bottone crea 5 numeri casuali (da 1 a 100??) non ripetuti
const playBtn = document.querySelector(".play");
console.log(playBtn);

playBtn.addEventListener("click", randomFiveNumbersGenerator);

//i numeri vengono mostrati a video per 30 secondi (le prove le faremo con 3 secondi)
//playBtn.addEventListener('click', numbersShow);


// dopo i 30 secondi i numeri scompaiono e compaiono 5 campi per l'inserimento dei numeri
//playBtn.addEventListener('click', timerThirtySec);

//dopo aver inserito i 5 numeri il programma controlla quanti e quali siano esatti

function randomFiveNumbersGenerator() {
    const numbersGiven = [];
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
    
    numbersShow.innerHTML = numbersGiven; //Questo li inseriamo in div che poi si disporranno come si deve
    
    playBtn.removeEventListener("click", randomFiveNumbersGenerator);
}

