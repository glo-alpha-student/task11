const button = document.getElementById('btn');
const text = document.getElementById('text');
const square = document.getElementById('square');
const range = document.getElementById('range');
const span = document.getElementById('range-span');
const circle = document.getElementById('circle');
const byeButton = document.getElementById('e_btn');

range.value = 0;
circle.style.width = 0;
circle.style.height = 0;
byeButton.style.display = "none";

const getNewCollor = function () {

    while (text.value === null || text.value === "") {
        alert("it's empty tho");
        return false;
    }

    square.style.backgroundColor = text.value;

    text.value = null;
};
const newValue = function () {
    span.textContent = range.value;
    circle.style.width = range.value + "%";
    circle.style.height = range.value + "%";
};

button.addEventListener('click', getNewCollor);
range.addEventListener('input', newValue);