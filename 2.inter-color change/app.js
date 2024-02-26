// Getting Elements From The DOM
const btns = document.querySelectorAll(".btn");
const body = document.body;
// console.log(btns);

// Iterating over all buttons
btns.forEach((but) => {
  but.addEventListener("click", () => {
    let number = but.value;
    changeBackground(number);
  });
});



function changeBackground(number) {
  body.className = "";

  switch (number) {
    case "red":
      body.classList.add("red");
      break;
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    default:
      break;
  }
}
