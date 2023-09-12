const c = document.querySelector("#C");
const parenthesis = document.querySelector("#parenthesis");
const percentage = document.querySelector("#percentage");
const division = document.querySelector("#division");

var firstparenthesisCount = 0;

division.addEventListener("click", () => {
  const result = document.querySelector("#Result").value;
  /*evalue if the last char of the input is "/" to not repeat it */
  if (result.slice(-1) !== "/") {
    document.querySelector("#Result").value = result + "/";
  }
});

c.addEventListener("click", () => {
  console.log("cleaning...");
  document.querySelector("#Result").value = "0";
});

parenthesis.addEventListener("click", () => {
  const result = document.querySelector("#Result").value;
  if (firstparenthesisCount >= 0) {
    document.querySelector("#Result").value = result + "(";
    firstparenthesisCount += 1;
  } else if (firstparenthesisCount > 0 && result.slice(-1) != "(") {
    document.querySelector("#Result").value = result + ")";
    console.log("writing (");
    firstparenthesisCount -= 1;
  }
});

percentage.addEventListener("click", () => {
  const result = document.querySelector("#Result").value;
  document.querySelector("#Result").value = result + "%";
});
