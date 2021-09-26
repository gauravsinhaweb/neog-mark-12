const inputs = document.querySelectorAll(".side-input");
const output = document.querySelector("#output");
const checkBtn = document.querySelector("#check");

function CalculateHypot(side1, side2) {
  const hypot = Math.hypot(side1, side2);

  return hypot;
}

function Ishypotenuse() {
  const hypot = CalculateHypot(
    Number(inputs[0].value),
    Number(inputs[1].value)
  );

  output.innerText = `Hypotenuse is: ${Math.round(hypot)}`;
}

checkBtn.addEventListener("click", Ishypotenuse);
