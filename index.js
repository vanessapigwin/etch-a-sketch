var gridSize = 12;
const container = document.querySelector('.sketch-area');
var color = '#19323C';

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

function getColorMode(e) {   
    document.querySelectorAll('.mode').forEach((button) => {
        if (button.classList.contains('toggle'))
            button.classList.remove('toggle');
        }
    );
    e.target.parentNode.classList.toggle('toggle');

    switch (e.target.value) {
        case 'Color':
            color = '#19323C';
            break;
        case 'Rainbow':
            color = '#E3B5BE';
            break;
        case 'Gradient':
            color = "#A93F55";
            break;
        case 'Eraser':
            color = '#FFFFFF';
            break;
        default:
            color = '#19323C';
    }
}

setGridSize(gridSize);

var slider = document.querySelector('.slider');
slider.value = gridSize;
slider.oninput = () => {
    gridSize = slider.value;
    deleteGrid();
    setGridSize(gridSize);
}

document.querySelectorAll('input[name="color-mode"]').forEach(
    (ele) => ele.addEventListener('click', getColorMode)
);
document.querySelector('#clear').addEventListener('click', clearGrid);
document.querySelector('.toggle').addEventListener('click', toggleGrid);
document.querySelector('.sketch-area').addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('pixel'))
        e.target.style['background-color'] = color;
});
