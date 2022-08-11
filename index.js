let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-el');

let inputEl = document.getElementById('input-el');

let convertBtn = document.getElementById('convert-btn');

let lengthLine = convertBtn.addEventListener('click', function () {
  lengthEl.innerHTML = `${inputEl.value} meter(s) = ${(
    3.2808 * parseFloat(inputEl.value)
  ).toFixed(3)} feet(foot) | 
                        ${inputEl.value} feet(foot) = ${(
    0.3048 * parseFloat(inputEl.value)
  ).toFixed(3)} meter(s)`;

  volumeEl.innerHTML = `${inputEl.value} liter(s) = ${(
    0.264172 * parseFloat(inputEl.value)
  ).toFixed(3)} gallon(s) | 
  ${inputEl.value} gallon(s) = ${(3.7854 * parseFloat(inputEl.value)).toFixed(
    3
  )} liter(s)`;

  massEl.innerHTML = `${inputEl.value} kilo(s) = ${(
    2.2046 * parseFloat(inputEl.value)
  ).toFixed(3)} pound(s) | 
  ${inputEl.value} pound(s) = ${(0.453592 * parseFloat(inputEl.value)).toFixed(
    3
  )} kilo(s)`;
});
