function getValueById(id) {
    return parseFloat(document.getElementById(id).value);
}

function setValueById(id, value) {
    document.getElementById(id).innerText = value;
    document.getElementById(id).classList.replace('ml-12','ml-2');
}

document.getElementById('triangle-btn').addEventListener('click', function(){
    const base = getValueById('triangle-base');
    const height = getValueById('triangle-height');
    const area = 0.5 * base * height;
    setValueById('triangle-area', parseFloat(area.toFixed(2)));
})

document.getElementById('rectangle-btn').addEventListener('click', function(){
    const width = getValueById('rectangle-width');
    const length = getValueById('rectangle-length');
    const area = width * length;
    setValueById('rectangle-area', parseFloat(area.toFixed(2)));
})

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const base = getValueById('parallelogram-base');
    const height = getValueById('parallelogram-height');
    const area = base * height;
    setValueById('parallelogram-area', parseFloat(area.toFixed(2)));
})

document.getElementById('rhombus-btn').addEventListener('click', function(){
    const side1 = getValueById('rhombus-side1');
    const side2 = getValueById('rhombus-side2');
    const area = 0.5 * side1 * side2;
    setValueById('rhombus-area', parseFloat(area.toFixed(2)));
})

document.getElementById('pentagon-btn').addEventListener('click', function(){
    const perimeter = getValueById('pentagon-perimeter');
    const apothem = getValueById('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setValueById('pentagon-area', parseFloat(area.toFixed(2)));
})

document.getElementById('clipse-btn').addEventListener('click', function(){
    const majorAxis = getValueById('ellipse-major');
    const minorAxis = getValueById('ellipse-minor');
    const area = Math.PI * majorAxis * minorAxis;
    setValueById('ellipse-area', parseFloat(area.toFixed(2)));
})

