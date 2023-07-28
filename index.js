var color = '#19323C';
const picker = document.querySelector('#color-picker');


function getColorMode(e) {
    picker.style['display'] = 'none'; 

    // reset toggle styles   
    document.querySelectorAll('.mode').forEach((button) => {
        if (button.classList.contains('toggle'))
            button.classList.remove('toggle');
        }
    );
    e.target.parentNode.classList.toggle('toggle');
    
    switch (e.target.value) {
        case 'Color':
            color = '#19323C';
            picker.style['display'] = 'block';
            picker.click()
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
    console.log(color);
}


document.querySelectorAll('input[name="color-mode"]').forEach(
    (ele) => ele.addEventListener('click', getColorMode)
);
document.querySelector('.sketch-area').addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('pixel'))
        e.target.style['background-color'] = color;
});

picker.addEventListener('change', (e) => {color = e.target.value})
