const quiz = [
  {
    question: "Which is the capital of Japan?",
    answers: ["Tokyo", "Osaka", "Kyoto", "Okinawa"],
    correct: "Tokyo",
  },
  {
    question: "Which is the capital of Korea?",
    answers: ["Daejeon", "Busan", "Seoul", "Incheon"],
    correct: "Seoul",
  },
  {
    question: "Which is the capital of Canada?",
    answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    correct: "Ottawa",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("Coreect!");
    score++;
  } else {
    window.alert("Incorrect");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert("Done! Your score is " + score + "/" + quizLength + "!");
  }
};

// When a button is clicked, right/wrong decision is made
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
