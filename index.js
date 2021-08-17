// inputs
const dateOfBirth = document.getElementById("date-of-birth");
const luckyNumber = document.getElementById("lucky-number");

// output
const luckyOutput = document.querySelector(".output--lucky");
const notLuckyOutput = document.querySelector(".output--not-lucky");

// buttons
const checkBtn = document.getElementById("check-btn");

const show = (element) => {
  return (element.style.display = "block");
};
const hide = (element) => {
  return (element.style.display = "none");
};

const calculateSum = (date) => {
  let sum = 0;
  date = date.replaceAll("-", "");
  for (const index in date) {
    sum += Number(date.charAt(index));
  }
  return sum;
};

const isBirthdayLucky = (date, number) => {
  return calculateSum(date) % number === 0;
};

checkBtn.addEventListener("click", () => {
  let date = dateOfBirth.value;
  let number = Number(luckyNumber.value);

  if (isBirthdayLucky(date, number)) {
    show(luckyOutput);
    hide(notLuckyOutput);
  }
  if (!isBirthdayLucky(date, number)) {
    show(notLuckyOutput);
    hide(luckyOutput);
  }
});
