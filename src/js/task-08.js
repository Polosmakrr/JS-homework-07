const refs = {
    inputValue: document.querySelector('input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxesDiv: document.querySelector('#boxes'),

};

refs.renderBtn.addEventListener('click', ()=>renderedBoxes(refs.inputValue.value));
refs.destroyBtn.addEventListener('click', destroyedBoxes);

const getRandomColor = () => {
    const rgb = function () { return Math.floor(Math.random() * 256);}
    
    return "rgb(" + rgb() + "," + rgb() + "," + rgb() + ")";
}

// const color = getRandomColor();
// console.log(getRandomColor());

 function destroyedBoxes () {
    refs.boxesDiv.innerHTML = '';
};

 function renderedBoxes (amount) {
    let newBoxes = [];
    for (let i = 0; i < amount; i += 1) {
        const newBox = document.createElement('div');
        newBox.style.width = `${30 + i * 10}px`;
        newBox.style.height = `${30 + i * 10}px`;
        newBox.style.backgroundColor = `${getRandomColor()}`;
        newBox.style.margin = `5px`;
        newBoxes.push(newBox);
    }
    refs.boxesDiv.append(...newBoxes);
};
