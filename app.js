'use strict';
const board = document.querySelector('#board');
const SQUARE_NUMBER = 500;
const colors = ['blue', 'yellow']
for (let i = 0; i < SQUARE_NUMBER; i += 1) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })
    board.append(square)
}

function setColor(element) {
    element.style.backgroundColor = chooseRandomColor();
    element.style.boxShadow = `0 0 2px ${chooseRandomColor()} 0 0 10px ${chooseRandomColor()}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function chooseRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
