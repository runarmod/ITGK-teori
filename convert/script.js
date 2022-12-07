let decimal;
let answer;
let question;
let baseFrom;
let baseTo;

function generateRandom() {
  function generateFrom() {
    var random = Math.random();
    var randomNum = Math.floor(random * 1000);
    decimal = randomNum;
    baseFrom = document.getElementById("baseFrom").value;
    var randomInput = convertToBase(baseFrom, randomNum);
    document.getElementById("input").value = randomInput;
    question = randomInput;
  }
  function generateTo() {
    baseTo = document.getElementById("baseTo").value;
    answer = convertToBase(baseTo, decimal);
  }
  generateFrom();
  generateTo();
}

function convertToBase(base, num) {
  var result = "";
  var nums = "0123456789ABCDEF";
  while (num > 0) {
    result = nums.charAt(num % base) + result;
    num = Math.floor(num / base);
  }
  return result;
}

function addToHistory(correct_wrong) {
  var response =
    correct_wrong +
    "! " +
    question +
    " in base " +
    baseFrom +
    " to base " +
    baseTo +
    " is " +
    answer +
    ".";
  var child = document.createElement("p");
  child.innerText = response;
  child.style.color = correct_wrong == "Correct" ? "green" : "red";
  var container = document.getElementById("history-content");
  container.insertBefore(child, container.firstChild);
}

function correct() {
  document.getElementById("output").style.backgroundColor = "green";
  document.getElementById("output").style.color = "white";
  document.getElementById("output").value = "Correct!";
  addToHistory("Correct");
  setTimeout(function () {
    document.getElementById("output").style.backgroundColor = "white";
    document.getElementById("output").style.color = "black";
    document.getElementById("output").value = "";
    generateRandom();
  }, 3000);
}

function wrong() {
  document.getElementById("output").style.backgroundColor = "red";
  document.getElementById("output").style.color = "white";
  document.getElementById("output").value = "Wrong!";
  addToHistory("Wrong");
  setTimeout(function () {
    document.getElementById("output").style.backgroundColor = "white";
    document.getElementById("output").style.color = "black";
    document.getElementById("output").value = "";
    generateRandom();
  }, 3000);
}

function submit() {
  if (answer == document.getElementById("output").value) {
    correct();
  } else {
    wrong();
  }
}
