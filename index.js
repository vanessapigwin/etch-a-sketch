var color = "#6E8894";
var colorMode = 'Color';
var gradientCounter;
const picker = document.querySelector('#color-picker');

function getColorMode(e) {
    picker.style['display'] = 'none'; 

    document.querySelectorAll('.mode').forEach((button) => {
        if (button.classList.contains('toggle'))
            button.classList.remove('toggle');
        }
    );
    e.target.parentNode.classList.toggle('toggle');
    
    switch (e.target.value) {
        case 'Color':
            colorMode = 'Color';
            picker.style['display'] = 'block';
            picker.click()
            break;
        case 'Rainbow':
            colorMode = 'Rainbow';
            break;
        case 'Gradient':
            colorMode = 'Gradient';
            gradientCounter = 0;
            break;
        case 'Eraser':
            colorMode = 'Eraser';
            color = '#FFFFFF';
            break;
        default:
            color = '#19323C';
    }
}

function randomColor() {
    const r = parseInt(Math.random()*255);
    const g = parseInt(Math.random()*255);
    const b = parseInt(Math.random()*255);
    return `rgb(${r}, ${g}, ${b})`;
}

function darkenColor() {
    const c = 255 - gradientCounter / 10 * 255;
    gradientCounter += 1;
    return `rgb(${c}, ${c}, ${c})`;
}

document.querySelectorAll('input[name="color-mode"]').forEach(
    (ele) => ele.addEventListener('click', getColorMode)
);
document.querySelector('.sketch-area').addEventListener('pointerover', function(e) {
    if (colorMode === 'Rainbow') {
        color = randomColor();
    } else if (colorMode === 'Gradient') {
        color = darkenColor();
    }
    if (e.target.classList.contains('pixel'))
        e.target.style['background-color'] = color;
});

picker.addEventListener('change', (e) => {color = e.target.value})
