const inputName = document.querySelector('#name-input');

const outputName = document.querySelector('#name-output');

inputName.addEventListener('input',onInputName);

function onInputName(name) {
    console.log(name.currentTarget.value);
    
    if (name.currentTarget.value != '') {
        outputName.textContent = name.currentTarget.value;
    }
    else outputName.textContent = 'незнакомец';
}

