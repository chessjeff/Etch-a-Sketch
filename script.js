const grid = document.querySelector('#grid');

const userInput = 256; //temporary

for (i = 0; i < userInput; i++) {
    const block = document.createElement('div');
    block.className = 'block';
    grid.appendChild(block);   
}

const blocks = document.getElementsByClassName('block');
Array.from(blocks).forEach((block) => {
    block.addEventListener('mouseover', () => {
        block.classList.toggle('hover');
    })
})


/*
add hover event listener
toggle a class .hover

*/