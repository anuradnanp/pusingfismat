/* Copyright (C) 2022 Alma Nuradnan Pramudita (email: gocodealpha@gmail.com)

This file is part of MathSD.

MathSD is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MathSD is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MathSD. If not, see <https://www.gnu.org/licenses/>. */

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const ambienceImage = document.getElementById('ambience');

let shuffledQuestions, currentQuestionIndex, nilai, i;
let numAmbienceImage = 31;

startButton.addEventListener('click', startGame);
ambienceImage.style.margin = '10px 0 0';
ambienceImage.insertAdjacentHTML('afterbegin', '<img src="aset/' + Math.floor(Math.random() * numAmbienceImage + 1).toString().padStart(2, "0") + '.svg" style="width: 150px; transform: scale(' + [-1, 1][Math.round(Math.random())] + ', 1)">');
nextButton.addEventListener('click', () => {
	document.getElementById(shuffledQuestions[currentQuestionIndex].bahas).classList.add('hide');
	currentQuestionIndex++;
	questionElement.classList.add('animate__animated');
	questionElement.classList.add('animate__backInLeft');
	questionElement.style.setProperty('animation-duration', '0.5s');
	setNextQuestion();
});

function startGame() {
	startButton.classList.add('hide');
// 	shuffledQuestions = questions.sort(() => Math.random() - 0.5);
	shuffledQuestions = questions;
	for (i = 0; i < questions.length; i++) {
		document.getElementById(shuffledQuestions[i].bahas).classList.add('hide');
		questionElement.classList.add('animate__animated');
		questionElement.classList.add('animate__backInLeft');
		questionElement.style.setProperty('animation-duration', '0.5s');
	}
	currentQuestionIndex = 10;
	nilai = 0;
	questionContainerElement.classList.remove('hide');
	setNextQuestion();
}

function setNextQuestion() {
	resetState();
	showQuestion(shuffledQuestions[currentQuestionIndex]);
	ambienceImage.style.margin = '-10px 0 0';
}

function showQuestion(question) {
	answerButtonsElement.classList.remove('no-pick');
	questionElement.innerText = "";
	questionElement.insertAdjacentHTML('beforeend', '<p class="nomor-soal"><b>soal ' + parseInt(currentQuestionIndex + 1) + ' dari ' + questions.length + '</b></p>');
	questionElement.insertAdjacentHTML('beforeend', question.question);
	shuffle(question.answers);
	question.answers.forEach((answer, index) => {
		const button = document.createElement('button');
		button.style.setProperty('animation-duration', '0.5s');
		button.style.setProperty('animation-delay', [(index + 1) / 10 + 0.5, 's'].join(''));
		button.insertAdjacentHTML('afterbegin', answer.text);
		button.classList.add('btn-soal');
		button.classList.add('animate__animated');
		button.classList.add('animate__backInRight');
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener('click', selectAnswer);
		answerButtonsElement.appendChild(button);
	});
	document.getElementById(shuffledQuestions[currentQuestionIndex].bahas).innerText = "";
	document.getElementById(shuffledQuestions[currentQuestionIndex].bahas).insertAdjacentHTML("afterbegin", Function('return ' + shuffledQuestions[currentQuestionIndex].bahas)());
	ambienceImage.innerText = "";
	ambienceImage.insertAdjacentHTML('afterbegin', '<img src="aset/' + Math.floor(Math.random() * numAmbienceImage + 1).toString().padStart(2, "0") + '.svg" style="width: 150px; transform: scale(' + [-1, 1][Math.round(Math.random())] + ', 1)">');
	MathJax.typeset();
}

function resetState() {
	clearStatusClass(document.body);
	nextButton.classList.add('hide');
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild);
	}
}

function selectAnswer(e) {
	const selectedButton = e.target;
	const correct = selectedButton.dataset.correct;
	document.getElementById(shuffledQuestions[currentQuestionIndex].bahas).classList.remove('hide');
	setStatusClass(document.body, correct);
	if (selectedButton.dataset.correct) {
		nilai = nilai + 1;
	} else {
		selectedButton.classList.add('wrong-pick');
	}
	ambienceImage.style.margin = '10px 0 0';
	answerButtonsElement.classList.add('no-pick');
	document.getElementById(shuffledQuestions[currentQuestionIndex].bahas).scrollIntoView({behavior: 'smooth'});
	Array.from(answerButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct);
	});
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
		nextButton.innerText = "";
		nextButton.insertAdjacentHTML('afterbegin', 'Skor ' + nilai + '/' + parseInt(currentQuestionIndex + 1) + ' &#187; <span class="lanjut">Lanjut</span>');
		nextButton.classList.remove('hide');
	} else {
		startButton.innerText = "";
		startButton.insertAdjacentHTML('beforeend', 'Skor ' + nilai + '/' + questions.length + ' &#187; <span class="ulang">Ulangi</span>');
		nilai = 0;
		startButton.classList.remove('hide');
	}
	questionElement.classList.remove('animate__animated');
	questionElement.classList.remove('animate__backInLeft');
	MathJax.typeset();
}

function setStatusClass(element, correct) {
	clearStatusClass(element);
	if (correct) {
		element.classList.add('correct');
	} else {
		element.classList.add('wrong');
	}
}

function clearStatusClass(element) {
	element.classList.remove('correct');
	element.classList.remove('wrong');
}

// taken from stackoverflow.com/questions/2450954/how-to-randomize-shuffle-javascript-array
function shuffle(array) {
	let currentIndex = array.length, randomIndex;

	// while there remain elements to shuffle
	while (currentIndex != 0) {

		// pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// swap with the current element
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
}
