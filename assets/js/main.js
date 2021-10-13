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
function option(option, screenNumber) {
  if (option == "C") {
  }
}

window.onload = function () {
  var numbers = document.querySelectorAll(".number");
  var operators = document.querySelectorAll(".operator");
  var options = document.querySelectorAll(".option");
  var board = document.querySelector(".board");

  numbers.forEach((num) => {
    num.addEventListener("click", function (e) {
      console.log("num cliked");
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
      console.log("operator", operator);
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
      console.log(option);
      // if (option == "C") {
      //   console.log('if C')
      //   if (screenNumber.length <= 1) {
      //     console.log(screenNumber.length)
      //     screenNumber = "0";
      //   } else{
      //     console.log(typeof screenNumber);
      //     screenNumber.substring(0, screenNumber.length - 1);
      //   }
      //   board.innerHTML = screenNumber;

      // }
      if (option == "AC"){
        finalResult = "0";
        firstNumber = false;
        board.innerHTML = finalResult;
      }
      if (option == "="){
        console.log("equal");
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


