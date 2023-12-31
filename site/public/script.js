const question = document.querySelector(".question");
const FUNCOES = document.querySelector(".funcoes");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";
import FUNCOES from "./js/funcoes.js";

let currentIndex = 0;
let questionsCorrect = 0;
let personagem = '';

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  personagem = '';
  loadQuestion();
};

function nextQuestion(e) {
  // if (e.target.getAttribute("data-correct") === "true") {
  //   questionsCorrect++;
  // }
  if(e.target.getAttribute("data-correct") < "10"){
    personagem = 'Luz';
  }else if (e.target.getAttribute("data-correct") < "15"){
    personagem = 'KING';
  }else if (e.target.getAttribute("data-correct") > "15"){
  personagem = 'EDA';
}

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `você é ${personagem} `;
  content.style.display = "none";
  contentFinish.style.display = "flex";
  console.log(personagem)
  console.log(PSNG)
  sessionStorage.PSNG = personagem;
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();

module.exports = {
  cadastrar,
};