const grid = document.querySelector('#grid');
const resetButton = document.querySelector('#reset');
const blocks = document.getElementsByClassName('block');
const blocksArray = Array.from(blocks);
const sizeButton = document.querySelector('#prompt');
const rows = document.getElementsByClassName('row');
const rowsArray = Array.from(rows);

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
            block.addEventListener('mouseover', () => {
                if (!block.classList.contains('hover')) {
                    block.classList.toggle('hover');
                }
            });
        }
        grid.appendChild(row);   
    }
}

function changeSize() {
    const userInput = parseInt(prompt("Change grid size", "Example: 16"));
    if (Number.isNaN(userInput)) {
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