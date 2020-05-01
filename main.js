const input = document.getElementById('input')
// console.log("input", input)
const form = document.getElementById('form')
// console.log("form", form)
const button = document.getElementById('button')
// console.log("button", button)
const output = document.getElementById('output')
// console.log("output", output)
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
    // console.log("getText -> diffYears", diffYears)
    let diffMonths = Math.floor((diffTime / ((1000 * 60 * 60 * 24 * 365) / 12)) % 12);
    // console.log("getText -> diffMonths", diffMonths)

    let StartYear = givenDate.getUTCFullYear()
    // console.log("getText -> StartYear", StartYear)
    let EndYear = currentDate.getUTCFullYear()
    // console.log("getText -> EndYear", EndYear)


    const MonthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let sum = 0;
    let StartMonth = givenDate.getMonth();
    console.log("getText -> StartMonth", StartMonth)
    let EndMonth = currentDate.getMonth()
    console.log("getText -> EndMonth", EndMonth)

    if (StartYear !== EndYear) {
      for (j = StartYear; j < EndYear; j++) {
        for (i = StartMonth; i < 12; i++) {
          sum = sum + MonthsArr[i]

        }
        console.log("getText -> sum multi", sum)

        for (h = 0; h < EndMonth - 1; h++) {
          sum = sum + MonthsArr[h]

        }
        if (EndYear > StartYear + 1) {
          for (g = EndMonth; g < StartMonth - 1; g++) {
            sum = sum + MonthsArr[g]
          }
        }
      }

    } else {
      for (i = StartMonth; i < EndMonth - 1; i++) {

        sum = sum + MonthsArr[i]

      }
    }

    //console.log("total days", Math.floor((diffTime / (1000 * 60 * 60 * 24))));
    //console.log("getText -> sum", sum)

    let diffDays = Math.floor((diffTime / (1000 * 60 * 60 * 24)) - sum);
    // console.log("getText -> diffDays", diffDays)
    let diffHours = Math.floor(((diffTime / (1000 * 60 * 60))) % 24);
    // console.log("getText -> diffHours", diffHours)
    let diffMins = Math.floor(((diffTime / (1000 * 60))) % 60);
    // console.log("getText -> diffMins", diffMins)
    let diffSecs = Math.floor(((diffTime / (1000))) % 60);
    // console.log("getText -> diffSecs", diffSecs)


    outputValue = `${diffYears} Years and ${diffMonths} months and ${diffDays} Days and ${diffHours} Hours and ${diffMins} Mints and ${diffSecs} Seconds Left`

    output.innerText = outputValue;

  }
}
form.addEventListener('submit', getText);



