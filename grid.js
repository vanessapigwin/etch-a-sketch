var gridSize = 12;
const container = document.querySelector('.sketch-area');

function setGridSize(size) {
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

function toggleGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel)=> {
        pixel.classList.toggle('grid-off');
    });
    this.classList.toggle('toggle-off');
}

function deleteGrid() {
    var child = container.firstElementChild;
    while (child) {
        container.removeChild(child);
        child = container.firstElementChild;
    }
}

function clearGrid() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel)=> {
        pixel.style['background-color'] = 'white';
    });
}

function startUpGrid (){
    var slider = document.querySelector('.slider');

    setGridSize(gridSize);
    slider.value = gridSize;
    slider.oninput = () => {
        gridSize = slider.value;
        deleteGrid();
        setGridSize(gridSize);
    }
}

startUpGrid();