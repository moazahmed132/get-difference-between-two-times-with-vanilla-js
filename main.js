const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
// console.log("input", input)
const form = document.getElementById('form')
// console.log("form", form)
const button = document.getElementById('button')
// console.log("button", button)
const output = document.getElementById('output')
// console.log("output", output)
let inputValue1 = '';
let outputValue = '';

input1.value = '2020-06-16 13:26:52';
input2.value = '2020-07-18 22:42:50';


getText = (e) => {
  e.preventDefault();


  if (input1.value.trim() == '' && input2.value.trim() == '') {
    alert('empty field')
  } else {
    inputValue1 = input1.value;
    inputValue2 = input2.value;


    let Date1 = new Date(inputValue1)
    //console.log("getText -> Date1", Date1)
    let Date2 = new Date(inputValue2)
    //console.log("getText -> Date2", Date2)

    let diffTime = Math.abs((Date2 - Date1))
    //console.log("getText -> diffTime", diffTime)
    let diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    //console.log("getText -> diffYears", diffYears)
    let diffMonths = Math.floor((diffTime / ((1000 * 60 * 60 * 24 * 365) / 12)) % 12);
    //console.log("getText -> diffMonths", diffMonths)
    let StartYear = Date1.getUTCFullYear()
    //console.log("getText -> StartYear", StartYear)
    let EndYear = Date2.getUTCFullYear()
    //console.log("getText -> EndYear", EndYear)
    let diffDays = Math.floor(((diffTime / (1000 * 60 * 60 * 24))));
    //console.log("getText -> diffDays", diffDays)
    //console.log("total days", Math.floor((diffTime / (1000 * 60 * 60 * 24))));
    let diffHours = Math.floor(((diffTime / (1000 * 60 * 60))) % 24);
    // console.log("getText -> diffHours", diffHours)
    let diffMins = Math.floor(((diffTime / (1000 * 60))) % 60);
    // console.log("getText -> diffMins", diffMins)
    let diffSecs = Math.floor(((diffTime / (1000))) % 60);
    // console.log("getText -> diffSecs", diffSecs)


    const MonthsArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let sum = 0;

    let StartMonth = (Date1.getMonth() + 1);
    console.log("getText -> StartMonth", StartMonth)
    let EndMonth = (Date2.getMonth() + 1)
    console.log("getText -> EndMonth", EndMonth)



    if (StartYear !== EndYear) {
      for (j = StartYear; j < EndYear; j++) {
        for (i = StartMonth; i < 12; i++) {
          sum = sum + MonthsArr[i]

        }
        //console.log("getText -> sum multi", sum)

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
      let daysInStartMonth = (MonthsArr[StartMonth - 1] - Date1.getDate())
      // console.log("getText -> daysInStartMonth", daysInStartMonth)
      let daysInEndMonth = (Date2.getDate())
      //console.log("getText -> daysInEndMonth", daysInEndMonth)

      for (i = StartMonth + 1; i < EndMonth; i++) {
        console.log(i)
        sum = sum + MonthsArr[i]
        console.log("getText -> sum", sum)
      }
    }
    console.log("getText -> sum", sum)
    diffDays = Math.floor((((diffTime / (1000 * 60 * 60 * 24))) - sum));
    if (diffDays > MonthsArr[StartMonth - 1]) {
      //console.log("getText -> MonthsArr[StartMonth]", MonthsArr[StartMonth])
      diffDays = Math.abs(diffDays) % MonthsArr[StartMonth - 1]
    }

    outputValue = `${diffYears} Years and ${diffMonths} months and ${diffDays} Days and ${diffHours} Hours and ${diffMins} Mints and ${diffSecs} Seconds Left (excluding last day)`
    output.innerText = outputValue;
  }
}
form.addEventListener('submit', getText);



