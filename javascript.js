let answer = document.querySelector(".answer");
let answerFactor = document.querySelector(".answer-factor")
let numberPrint = document.querySelectorAll(".number-print");
numberPrint.forEach(item => {
    item.addEventListener("click", clickNumber)
})

function clickNumber(event) {
    const x = event.target.innerText
    if (answer.innerHTML == 0) {
        return answer.innerHTML = x;
    } else {
        return answer.innerHTML += x;
    }
}

let equal = document.querySelector(".equal");
let allClear = document.querySelector(".ac-clear");
let oneClear = document.querySelector(".c-clear");
equal.addEventListener("click", numberequal)

function numberequal() {
    const equaltext = answer.innerHTML;
    answerFactor.innerHTML = equaltext
    answer.innerHTML = eval(equaltext)
}

allClear.addEventListener("click", clearall);

function clearall() {
    answer.innerHTML = 0
    answerFactor.innerHTML = 0
}

oneClear.addEventListener("click", clearone);

function clearone() {
    let cleartext = answer.innerHTML;
    if (answer.innerHTML.length === 1) {
        answer.innerHTML = 0
    } else {
        answer.innerHTML = cleartext.substring(0, cleartext.length - 1)
        answerFactor.innerHTML = 0
    }
}

const allBoxMode = document.querySelector(".all-box-mode");
allBoxMode.addEventListener("click", mode)

function mode() {
    const divMode = document.querySelector(".mode");
    const modeColor = document.querySelector(".all-screen");
    if (divMode.style.right === "17px") {
        divMode.style.right = "-2px"
    } else {
        divMode.style.right = "17px"
    }
    if (modeColor.className === "all-screen") {
        modeColor.className = "all-screen light"
    } else {
        modeColor.className = "all-screen"
    }
}