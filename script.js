// document.getElementById("count").innerText = 5;

// initialize the count
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count in the HTML to reflect the new count

let count = 0;

let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");

function increment() {
  count += 1;
  countEL.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEL.textContent += countStr;
  count = 0;
  countEL.textContent = 0;
}
