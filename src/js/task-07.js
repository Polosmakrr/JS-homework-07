const inpitValue = document.querySelector("#font-size-control");

const spanRef = document.querySelector("#text");

inpitValue.addEventListener('input', onInputChange);

function onInputChange() {
    spanRef.style.fontSize = `${inpitValue.value}px`;
}