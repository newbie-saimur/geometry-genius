// Common Functions

function getValueById(id) {
    const value = document.getElementById(id).value;
    if (value === '') return NaN;
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
    message.classList.replace('ml-12', 'ml-2');
}

function showWarningBG(id, warning) {
    const textField = document.getElementById(id);
    if (warning) {
        textField.classList.add('border-2', 'border-red-600', 'bg-[#FFDDDD]');
        textField.classList.remove('border-none', 'bg-[#F1F1F1]');
    }
    else {
        textField.classList.remove('border-2', 'border-red-600', 'bg-[#FFDDDD]');
        textField.classList.add('border-none', 'bg-[#F1F1F1]');
    }
}

function handleValidate(fields) {
    let isValid = true;
    
    fields.forEach(field => {
        const value = getValueById(field.id);
        if(isNaN(value)) {
            showError(field.errorId);
            showWarningBG(field.id,1);
            isValid = false;
        }
        else {
            showWarningBG(field.id,0);
        }
    });
    return isValid;
}

// Event Manipulation

document.getElementById('triangle-btn').addEventListener('click', function () {
    const fields = [
        {id:'triangle-base', errorId:'triangle-error-message'},
        {id:'triangle-height', errorId:'triangle-error-message'}
    ];
    if(handleValidate(fields)) {
        const base = getValueById('triangle-base');
        const height = getValueById('triangle-height');
        const area = 0.5 * base * height;
        setValueById('triangle-area', Number(area.toFixed(2)));
    }
})

document.getElementById('rectangle-btn').addEventListener('click', function () {
    const fields = [
        {id:'rectangle-width', errorId:'rectangle-error-message'},
        {id:'triangle-length', errorId:'rectangle-error-message'}
    ];
    if (handleValidate(fields)) {
        const width = getValueById('rectangle-width');
        const length = getValueById('rectangle-length');
        const area = width * length;
        setValueById('rectangle-area', Number(area.toFixed(2)));
    }
})

document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const fields = [
        {id:'parallelogram-base', errorId:'parallelogram-error-message'},
        {id:'parallelogram-height', errorId:'parallelogram-error-message'}
    ];
    if (handleValidate(fields)) {
        const base = getValueById('parallelogram-base');
        const height = getValueById('parallelogram-height');
        const area = base * height;
        setValueById('parallelogram-area', Number(area.toFixed(2)));
    }
})

document.getElementById('rhombus-btn').addEventListener('click', function () {
    const fields = [
        {id:'rhombus-side1', errorId:'rhombus-error-message'},
        {id:'rhombus-side2', errorId:'rhombus-error-message'}
    ];
    if (handleValidate(fields)) {
        const side1 = getValueById('rhombus-side1');
        const side2 = getValueById('rhombus-side2');
        const area = 0.5 * side1 * side2;
        setValueById('rhombus-area', Number(area.toFixed(2)));
    }
})

document.getElementById('pentagon-btn').addEventListener('click', function () {
    const fields = [
        {id:'pentagon-perimeter', errorId:'pentagon-error-message'},
        {id:'pentagon-apothem', errorId:'pentagon-error-message'}
    ];
    if (handleValidate(fields)) {
        const perimeter = getValueById('pentagon-perimeter');
        const apothem = getValueById('pentagon-apothem');
        const area = 0.5 * perimeter * apothem;
        setValueById('pentagon-area', Number(area.toFixed(2)));
    }
})

document.getElementById('elipse-btn').addEventListener('click', function () {
    const fields = [
        {id:'ellipse-major', errorId:'ellipse-error-message'},
        {id:'ellipse-minor', errorId:'ellipse-error-message'}
    ];
    if (handleValidate(fields)) {
        showError('ellipse-error-message');
        const majorAxis = getValueById('ellipse-major');
        const minorAxis = getValueById('ellipse-minor');
        const area = Math.PI * majorAxis * minorAxis;
        setValueById('ellipse-area', Number(area.toFixed(2)));
    }
})
