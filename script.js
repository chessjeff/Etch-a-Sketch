const grid = document.querySelector('#grid');

const userInput = 110 //temporary

for (i = 0; i<userInput; i++) {
    const row = document.createElement('div');
    row.className='row';
    
    for (j = 0; j < userInput; j++) {
        const block = document.createElement('div');
        block.className = 'block';
        row.appendChild(block);   
    }
    grid.appendChild(row);
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
