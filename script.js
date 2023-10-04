const grid = document.querySelector('#grid');
const resetButton = document.querySelector('#reset');
const blocks = document.getElementsByClassName('block');
const blocksArray = Array.from(blocks);
const sizeButton = document.querySelector('#prompt');
const rows = document.getElementsByClassName('row');
const rowsArray = Array.from(rows);

const randomColor = Math.floor(Math.random() * 16777215).toString(16);
document.body.style.backgroundColor = '#' + randomColor;

createGrid(16); //create grid on page load

sizeButton.addEventListener('click', () => {
    return createGrid(changeSize());
})

resetButton.addEventListener('click', () => {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(16);
});

function createGrid(userInput) {
    reset();

    for (i = 0; i < userInput; i++) {
        const row = document.createElement('div');
        row.className='row';
        for (j = 0; j < userInput; j++) {
            const block = document.createElement('div');
            block.className = 'block';
            row.appendChild(block);   
            // assign random color on mouseover
            block.addEventListener('mouseover', () => {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                block.style.backgroundColor = '#' + randomColor;
            });
        }
        grid.appendChild(row);   
    }
}

function changeSize() {
    const userInput = parseInt(
        prompt("Change grid size", "Enter a number less than 100"));
    if (Number.isNaN(userInput) || userInput > 100 || userInput < 1) {
        return changeSize();
    } else {
        return userInput;
    }
}

function reset() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}