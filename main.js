
const input = document.getElementById('input')
//console.log("input", input)
const form = document.getElementById('form')
//console.log("form", form)
const button = document.getElementById('button')
//console.log("button", button)
const output = document.getElementById('output')
//console.log("output", output)
let inputValue = '';
let outputValue = '';
/* const monthsAndDays = {
  "January": 31,
  "February": 28,
  "March ": 31,
  "April": 30,
  "May": 31,
  "June": 30,
  "July": 31,
  "August": 31,
  "September": 30,
  "October": 31,
  "November": 30,
  "December": 31

}
*/


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
    //console.log("getText -> diffYears", diffYears)
    let diffMonths = Math.floor((diffTime / ((1000 * 60 * 60 * 24 * 365) / 12)) % 12);
    //console.log("getText -> diffMonths", diffMonths)




    const MonthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let sum = 0;
    let StartMonth = givenDate.getMonth();
    console.log("getText -> StartMonth", StartMonth)
    let EndMonth = currentDate.getMonth()
    console.log("getText -> EndMonth", EndMonth)



    for (i = StartMonth; i < EndMonth - 1; i++) {

      sum = sum + MonthsArr[i]

    }
    console.log(sum)






    let diffDays = Math.floor((diffTime / (1000 * 60 * 60 * 24)) - sum);
    //console.log("getText -> diffDays", diffDays - sum)
    let diffHours = Math.floor(((diffTime / (1000 * 60 * 60))) % 24);
    //console.log("getText -> diffHours", diffHours)
    let diffMins = Math.floor(((diffTime / (1000 * 60))) % 60);
    //console.log("getText -> diffMins", diffMins)
    let diffSecs = Math.floor(((diffTime / (1000))) % 60);
    //console.log("getText -> diffSecs", diffSecs)


    outputValue = `${diffYears} Years and ${diffMonths} months and ${diffDays} Days and ${diffHours} Hours and ${diffMins} Mints and ${diffSecs} Seconds Left`

    output.innerText = outputValue;


  }
}
form.addEventListener('submit', getText);
