// const p = document.querySelector("#display");
const p = document.querySelector("p");
const buttons = document.querySelectorAll(".button");
let string = "";
// console.log(buttons); //typeof buttons is object
const arrayBtn = Array.from(buttons);
console.log(arrayBtn);
arrayBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    //(event.target) property returns the element where the event occured
    let eventoccur = event.target.innerHTML;
    console.log(eventoccur);
    // p.innerHTML = eventoccur;
    if (eventoccur == "AC") {
      string = "";
      p.innerHTML = string;
    } else if (eventoccur == "DE") {
      string = string.toString().substring(0, string.length - 1);
      p.innerHTML = string;
    } else if (eventoccur == "=") {
      string = eval(string);
      p.innerHTML = string;
    } else {
      string = string + eventoccur; //
      p.innerHTML = string;
    }

    // p.innerHTML = eventoccur;
    // if (eventoccur == "=") {
    //   string = eval(string);
    //   display.value = string;
    // } else {
    //   string = string + eventoccur;
    //   display.value = string;
    // }
  });
});
