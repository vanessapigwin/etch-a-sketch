var size = 16;

function setGrid(size) {
    container = document.querySelector('.sketch-area');
    
    


    for(let i=0; i < size; i++) {
        row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            grid = document.createElement('div');
            grid.classList.add('pixel');
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
}

setGrid(size);