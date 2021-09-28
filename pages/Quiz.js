const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

const CorrectAnswer = ["60° 60° 60°", "right angle"];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResult = new FormData(quizForm);
  for (let value of formResult.values()) {
    if (value === CorrectAnswer[index]) {
      score++;
    }
    index++;
  }
  if (score === CorrectAnswer.length) {
    output.innerText = "You got all the answers right!";
  } else
    output.innerText = `Your Score is ${score} out of ${CorrectAnswer.length} `;
}

submitBtn.addEventListener("click", calculateScore);
