'use strict';
const button = document.getElementById('btn');
const text = document.getElementById('text');
const square = document.getElementById('square');
const range = document.getElementById('range');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');
const byeButton = document.getElementById('e_btn');

byeButton.style.display = "none";

const getNewCollor = function () {


    if (text.value.trim() === '') {
        alert("it's empty tho");
        text.value = '';
        return false;
    }

    square.style.backgroundColor = text.value;
    text.value = '';
};
const newValue = function () {
    span.textContent = range.value + " килотонн";
    circle.style.width = range.value + "%";
    circle.style.height = range.value + "%";
};


newValue();

button.addEventListener('click', getNewCollor);
range.addEventListener('input', newValue);
