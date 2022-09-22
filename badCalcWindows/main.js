let totalNumber = 0

document.querySelector('#resetTotal').addEventListener('click', makeZero);
document.querySelector('#add9').addEventListener('click', addNine);
document.querySelector('#multiply2').addEventListener('click', doubleNumber);
document.querySelector('#sub5').addEventListener('click', takeFive);

function makeZero() {
    totalNumber = 0
    document.querySelector('#resultNumber').innerText = totalNumber
}

function addNine() {
    totalNumber = totalNumber + 9
    document.querySelector('#resultNumber').innerText = totalNumber
}

function doubleNumber() {
    totalNumber = totalNumber * 2
    document.querySelector('#resultNumber').innerText = totalNumber
}

function takeFive() {
    totalNumber = totalNumber - 5
    document.querySelector('#resultNumber').innerText = totalNumber
}