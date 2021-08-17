// inputs
const dateOfBirth = document.getElementById("date-of-birth");
const luckyNumber = document.getElementById("lucky-number");

// buttons
const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", () => {
  console.log(`${dateOfBirth.value} ${luckyNumber.value}`);
});
