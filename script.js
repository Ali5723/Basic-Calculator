const screenData = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let screenValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    if (
      screenData.value == "NaN" ||
      screenData.value == "Error" ||
      screenData.value == "Infinity"
    ) {
      screenValue = "";
    }
    if (buttonText === "=") {
      try {
        screenValue = eval(screenValue);
      } catch {
        screenValue = "Error";
      }
    } else if (buttonText === "C") {
      screenValue = "";
    } else if (buttonText === "Del") {
      screenValue = screenValue.slice(0, -1);
    } else {
      screenValue += buttonText;
    }

    screenData.value = screenValue;
  });
});
