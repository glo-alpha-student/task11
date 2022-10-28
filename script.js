const controls = document.querySelectorAll('.controls');
const button = controls[0].querySelector('#btn');
const text = controls[2].querySelector('#text');
const square = controls[4].querySelector('#square');
const range = controls[1].querySelector('#range');
const span = controls[1].querySelector('#range-span');
const circle = controls[4].querySelector('#circle');
const byeButton = circle.querySelector('#e_btn');

byeButton.style.display = "none";

const color = function (event) {

    const change = function () {
        square.style.backgroundColor = event.target.value;

    };

    button.addEventListener('click', change);

};
const newCircle = function (event) {

    const newScale = span.textContent = event.target.value;

    const newValue = function () {

        circle.style.width = newScale + "%";
        circle.style.height = newScale + "%";
    };

    newValue();

};

range.addEventListener('input', newCircle);
text.addEventListener('input', color);