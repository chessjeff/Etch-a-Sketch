const grid = document.querySelector('#grid');

const userInput = 256; //temporary

for (i = 0; i < userInput; i++) {
    const block = document.createElement('div');
    block.className = 'block';
    grid.appendChild(block);   
}

const blocks = document.getElementsByClassName('block');
const blocksArray = Array.from(blocks);

blocksArray.forEach((block) => {
    block.addEventListener('mouseover', () => {
        if (block.classList.contains('hover')) {
            return;
        } else {
            block.classList.toggle('hover');
        }
    });
});

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    blocksArray.forEach((block) => {
        block.classList.remove('hover');
    });   
});
