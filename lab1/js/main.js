document.addEventListener(`DOMContentLoaded`, () =>{
    const calculateNumber = (number) => {
     if (number < 10) {
         return number;
     }
     else {
         return (number % 10) + calculateNumber((Math.floor(number / 10)));
     }
    }


    const printResult = (value, output) => {
        output.textContent = calculateNumber(value);
    }
    const number = document.querySelector('#inputNumber');
    const calculateButton = document.querySelector('#calculateButton');
    const output = document.querySelector('#result');


    calculateButton.addEventListener(`click`, () =>{
        printResult(number.value, output);
    })
});