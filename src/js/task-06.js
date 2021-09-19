
const refs = {
     input: document.querySelector('input'),
     length: 6,
}

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(el) {
    if (el.currentTarget.value.length === refs.length) {
        const trues = el.currentTarget;
        trues.classList.replace('invalid','valid');
    }
    else {
        const falses = el.currentTarget;

        falses.classList.add('invalid');
    }
        if (el.currentTarget.value.length != refs.length) {
        const trues = el.currentTarget;
        trues.classList.replace('valid','invalid');
    }
    else {
        const falses = el.currentTarget;

        falses.classList.add('valid');
    }
        

}

