// My first generator
const questionTypes = [
  "addition",
  "subtraction",
  "multiplication",
  "division"
];

function createQuestion() {

  const type =
    questionTypes[
      Math.floor(
        Math.random() * questionTypes.length
      )
    ];

  let num1;
  let num2;

  if (type === "addition") {

    num1 = Math.floor(Math.random() * 900) + 100;
    num2 = Math.floor(Math.random() * 900) + 100;

    return num1 + " + " + num2;
  }

  if (type === "subtraction") {

    num1 = Math.floor(Math.random() * 900) + 100;
    num2 = Math.floor(Math.random() * 500) + 100;

    return num1 + " - " + num2;
  }

  if (type === "multiplication") {

    num1 = Math.floor(Math.random() * 12) + 1;
    num2 = Math.floor(Math.random() * 12) + 1;

    return num1 + " × " + num2;
  }

  if (type === "division") {

    num2 = Math.floor(Math.random() * 12) + 1;

    const answer =
      Math.floor(Math.random() * 12) + 1;

    num1 = num2 * answer;

    return num1 + " ÷ " + num2;
  }
}

function createPaper() {

  let paper = "";

  for (let i = 1; i <= 10; i++) {

    paper +=
      "Question " + i + ": " +
      createQuestion() +
      "<br><br>";
  }

  document.getElementById("question")
    .innerHTML = paper;
}
