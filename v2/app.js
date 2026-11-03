const questionTypes = [
  "addition",
  "subtraction",
  "multiplication",
  "division"
];

let currentPaper = [];

function createQuestion() {

  const type =
    questionTypes[
      Math.floor(Math.random() * questionTypes.length)
    ];

  let num1;
  let num2;

  if (type === "addition") {

    num1 = Math.floor(Math.random() * 900) + 100;
    num2 = Math.floor(Math.random() * 900) + 100;

    return {
      question: num1 + " + " + num2,
      answer: num1 + num2
    };
  }

  if (type === "subtraction") {

    num1 = Math.floor(Math.random() * 900) + 100;
    num2 = Math.floor(Math.random() * 500) + 100;

    return {
      question: num1 + " - " + num2,
      answer: num1 - num2
    };
  }

  if (type === "multiplication") {

    num1 = Math.floor(Math.random() * 12) + 1;
    num2 = Math.floor(Math.random() * 12) + 1;

    return {
      question: num1 + " × " + num2,
      answer: num1 * num2
    };
  }

  if (type === "division") {

    num2 = Math.floor(Math.random() * 12) + 1;

    const answer =
      Math.floor(Math.random() * 12) + 1;

    num1 = num2 * answer;

    return {
      question: num1 + " ÷ " + num2,
      answer: answer
    };
  }
}

function createPaper() {

  currentPaper = [];

  let paper = "";

  for (let i = 1; i <= 10; i++) {

    const q = createQuestion();

    currentPaper.push(q);

    paper +=
      "Question " + i + ": " +
      q.question +
      "<br>" +
      '<input type="number" id="answer' + i + '">' +
      "<br><br>";
  }

  paper +=
    '<button onclick="markPaper()">Mark Paper</button>';

  paper +=
    '<h2 id="result"></h2>';

  document.getElementById("question").innerHTML =
    paper;
}

function markPaper() {

  let score = 0;

  for (let i = 1; i <= 10; i++) {

    const userAnswer =
      Number(
        document.getElementById(
          "answer" + i
        ).value
      );

    if (
      userAnswer ===
      currentPaper[i - 1].answer
    ) {
      score++;
    }
  }

  document.getElementById("result").innerHTML =
    "Score: " + score + " / 10";
}
