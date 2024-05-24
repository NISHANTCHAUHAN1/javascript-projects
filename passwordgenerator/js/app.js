const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (passward = "") => {
    if(upperInput.checked) {
        passward += getRandomData(upperSet);
    }
    if(lowerInput.checked) {
        passward += getRandomData(lowerSet);
    }
    if(numberInput.checked) {
        passward += getRandomData(numberSet);
    }
    if(symbolInput.checked) {
        passward += getRandomData(symbolSet);
    }
    if(passward.length < totalChar.value) {
        return generatePassword(passward);
    }
    passBox.innerText = (truncateString(passward,totalChar.value));
}

// generatePassword();

document.getElementById("btn").addEventListener(
    "click", 
    function () {
        generatePassword();
    }
)

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
      return str;
    }
  }