
const input = document.getElementById('input')
console.log("input", input)
const form = document.getElementById('form')
console.log("form", form)
const button = document.getElementById('button')
console.log("button", button)
const output = document.getElementById('output')
console.log("output", output)
let inputValue = '';
let outputValue = '';
getText = (e) => {
  e.preventDefault();

  if (input.value.trim() == '') {
    alert('empty field')
  } else {
    inputValue = input.value;
    let givenDate = new Date(inputValue)
    let currentDate = new Date()
    let diffTime = Math.abs(currentDate - givenDate)
    let diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    let diffDays = Math.floor((diffTime / (1000 * 60 * 60 * 24)) % 30);
    let diffHours = Math.floor(((diffTime / (1000 * 60 * 60))) % 24);
    let diffMins = Math.floor(((diffTime / (1000 * 60))) % 60);
    let diffSecs = Math.floor(((diffTime / (1000))) % 60);
    /* if (diffYears && diffDays && diffHours && diffMins && diffSecs) {
      outputValue = `${diffYears} Years and ${diffDays} Days and ${diffHours} Hours and ${diffMins} Minutes and ${diffSecs} Seconds left`
    } else if (diffDays && diffHours && diffMins && diffSecs) {
      outputValue = `${diffDays} Days and ${diffHours} Hours and ${diffMins} Minutes and ${diffSecs} Seconds left`
    } else if (diffHours && diffMins && diffSecs) {
      outputValue = `${diffHours} Hours and ${diffMins} Minutes and ${diffSecs} Seconds left`
    } else if (diffMins && diffSecs) {
      outputValue = `${diffMins} Minutes and ${diffSecs} Seconds left`
    }else if(diffSecs) */

    outputValue = `${diffYears} Years and ${diffDays} Days and ${diffHours} Hours and ${diffMins} Minutes and ${diffSecs} Seconds left`

    output.innerText = outputValue;


  }
}
form.addEventListener('submit', getText);
