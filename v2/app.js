// My first generator
function createQuestion() {
  const num1 = Math.floor(Math.random() * 900) + 100;
  const num2 = Math.floor(Math.random() * 900) + 100;

  return num1 + " + " + num2;
}

function createPaper() {

  let paper = "";

  for (let i = 1; i <= 10; i++) {

    paper += "Question " + i + ": " +
      createQuestion() + "<br><br>";

  }

  document.getElementById("question").innerHTML = paper;
}

