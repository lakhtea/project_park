const root = document.getElementById("root");
const classes = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

setInterval(() => {
  const currentTime = getCurrentTime();
  mapDigitsToElements(currentTime);
}, 1000);

function getCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function mapDigitsToElements(timeString) {
  const timeStringDigits = timeString.replaceAll(":", "").replace("PM", "");

  for (let i = 0; i < timeStringDigits.length - 1; i++) {
    const digit = timeStringDigits[i];
    createDigit(digit, i);
  }
}

function createDigit(digit, i) {
  document.querySelector(
    `.index-${i + 1}`
  ).classList.value = `digit eight index-${i + 1} ${classes[digit]}`;
}
