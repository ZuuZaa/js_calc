var operatorState = false;
var operator = "";
var screenNumber = "";
var finalResult = "0";
var firstNumber = false;

function getNumber(number, targetNumber, operator) {
  console.log("getNumber");
  if (!operator) {
    if (number[0] == "0" && number[1] != ".") {
      number = number.substring(1);
    }
    if (!number && targetNumber == ".") {
      number = "0";
    }
    number += targetNumber;
    if (targetNumber == "." && number[1] == "." && number.length >= 3) {
      number = number.substring(0, number.length - 1);
    }
  }
  return number;
}

function calculate(a, b, operator) {
  if (operator == "+") {
    console.log("if");
    a = parseFloat(a) + parseFloat(b);
  } else if (operator == "-") {
    a = parseFloat(a) - parseFloat(b);
  } else if (operator == "*") {
    a = parseFloat(a) * parseFloat(b);
  } else if (operator == "/") {
    a = parseFloat(a) / parseFloat(b);
  }
  return a;
}

window.onload = function () {
  var numbers = document.querySelectorAll(".number");
  var operators = document.querySelectorAll(".operator");
  var options = document.querySelectorAll(".option");
  var board = document.querySelector(".board");

  numbers.forEach((num) => {
    num.addEventListener("click", function (e) {
      if (!firstNumber) {
        finalResult = getNumber(finalResult, e.target.innerHTML, operatorState);
        board.innerHTML = finalResult;
      } else {
        screenNumber = getNumber(
          screenNumber,
          e.target.innerHTML,
          operatorState
        );
        board.innerHTML = screenNumber;
      }
    });
  });

  operators.forEach((opr) => {
    opr.addEventListener("click", function (e) {
      operator = e.target.innerHTML;
      operatorState = true;
      if (!firstNumber) {
        firstNumber = true;
      }
      if (screenNumber) {
        finalResult = calculate(finalResult, screenNumber, operator);
        board.innerHTML = finalResult;
      } else {
        board.innerHTML = "Enter Digit";
      }
      screenNumber = "";
      operatorState = false;
    });
  });

  options.forEach((opt) => {
    opt.addEventListener("click", function (e) {
      option = e.target.innerHTML;
      if (option == "AC"){
        finalResult = "0";
        screenNumber = "";
        firstNumber = false;
        board.innerHTML = finalResult;
      }
      if (option == "="){
        if (screenNumber){
          finalResult = calculate(finalResult, screenNumber, operator);
          board.innerHTML = finalResult;
          firstNumber = false;
          finalResult = "0";
        }else{
          board.innerHTML = "Enter Digit or Operator"
        }
      }
    });
  });
};


