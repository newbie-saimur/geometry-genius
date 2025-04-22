function getValueById(id) {
    const value = document.getElementById(id).value;
    if(value === '') return NaN;
    return Number(value);
}

function showError(id) {
    const value = document.getElementById(id);
    value.classList.remove('hidden');
    value.nextElementSibling.classList.add('hidden');
}

function setValueById(id, value) {
    const message = document.getElementById(id);
    message.parentElement.classList.remove('hidden')
    message.parentElement.previousElementSibling.classList.add('hidden');
    message.innerText = value;
    message.classList.replace('ml-12','ml-2');
}

document.getElementById('triangle-btn').addEventListener('click', function(){
    const base = getValueById('triangle-base');
    const height = getValueById('triangle-height');
    if(isNaN(base) || isNaN(height)) showError('triangle-error-message');
    else {
        const area = 0.5 * base * height;
        setValueById('triangle-area', Number(area.toFixed(2)));
    }
})

document.getElementById('rectangle-btn').addEventListener('click', function(){
    const width = getValueById('rectangle-width');
    const length = getValueById('rectangle-length');
    if(isNaN(width) || isNaN(length)) showError('rectangle-error-message');
    else {
        const area = width * length;
        setValueById('rectangle-area', Number(area.toFixed(2)));
    }
})

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const base = getValueById('parallelogram-base');
    const height = getValueById('parallelogram-height');
    if(isNaN(base) || isNaN(height)) showError('parallelogram-error-message');
    else {
        const area = base * height;
        setValueById('parallelogram-area', Number(area.toFixed(2)));
    }
})

document.getElementById('rhombus-btn').addEventListener('click', function(){
    const side1 = getValueById('rhombus-side1');
    const side2 = getValueById('rhombus-side2');
    if(isNaN(side1) || isNaN(side2)) showError('rhombus-error-message');
    else {
        const area = 0.5 * side1 * side2;
        setValueById('rhombus-area', Number(area.toFixed(2)));
    }
})

document.getElementById('pentagon-btn').addEventListener('click', function(){
    const perimeter = getValueById('pentagon-perimeter');
    const apothem = getValueById('pentagon-apothem');
    if(isNaN(perimeter) || isNaN(apothem)) showError('pentagon-error-message');
    else {
        const area = 0.5 * perimeter * apothem;
        setValueById('pentagon-area', Number(area.toFixed(2)));
    }
})

document.getElementById('elipse-btn').addEventListener('click', function(){
    const majorAxis = getValueById('ellipse-major');
    const minorAxis = getValueById('ellipse-minor');
    if(isNaN(majorAxis) || isNaN(minorAxis)) showError('ellipse-error-message');
    else {
        const area = Math.PI * majorAxis * minorAxis;
        setValueById('ellipse-area', Number(area.toFixed(2)));
    }
})

