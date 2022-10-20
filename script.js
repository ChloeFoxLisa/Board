const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
        setRandomColor(square));

    square.addEventListener('mouseleave', () => 
        removeColor(square));

    board.append(square);
}

function setRandomColor(el){
    const color = getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el){
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const alphabet = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += alphabet[Math.floor(Math.random() * alphabet.length)]
    }
    return color;
}