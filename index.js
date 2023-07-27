var gridSize = 12;
var slider = document.querySelector('.slider');
const container = document.querySelector('.sketch-area');

function setGrid(size) {
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
}

function deleteGrid() {
    var child = container.firstElementChild;
    while (child) {
        container.removeChild(child);
        child = container.firstElementChild;
    }
}

function addColor(e) {
    console.log(e)
}

setGrid(gridSize);

slider.value = gridSize;
slider.oninput = () => {
    gridSize = slider.value;
    deleteGrid();
    setGrid(gridSize);
}

document.querySelector('.toggle').addEventListener('click', toggleGrid);

document.getElementById('sketch-area').addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('pixel'))
        e.target.style['background-color'] = 'black';
}, false);