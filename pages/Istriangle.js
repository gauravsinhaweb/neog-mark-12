const inputs = document.querySelectorAll(".angle-input");
const output = document.querySelector("#output");
const checkBtn = document.querySelector("#check");

function CalculateSumOfAngles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;

  return sum;
}

function IsTriangle() {
  const sum = CalculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  if (sum === 180) {
    output.innerText = "This is a triangle";
  } else {
    output.innerText = "This is not a triangle";
  }
}

checkBtn.addEventListener("click", IsTriangle);
