var gridSize = 12;
var slider = document.querySelector('.slider');

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

function deleteGrid(container) {
    container = document.querySelector('.sketch-area');
    var child = container.firstElementChild;
    while (child) {
        container.removeChild(child);
        child = container.firstElementChild;
    }
}

setGrid(gridSize);
slider.value = gridSize;
slider.oninput = () => {
    gridSize = slider.value;
    deleteGrid();
    setGrid(gridSize);
}