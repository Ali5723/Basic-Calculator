const screenData = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let screenValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    if (buttonText === "=") {
      try {
        screenValue = eval(screenValue);
      } catch {
        screenValue = "Error";
      }
    } else if (buttonText === "C") {
      screenValue = "";
    } else {
      screenValue += buttonText;
    }
    screenData.value = screenValue;
  });
});