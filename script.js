const c = document.querySelector("#C")
const parenthesis = document.querySelector("#parenthesis")
const percentage = document.querySelector("#percentage")
const division = document.querySelector("#division")

c.addEventListener("click", () => {
    document.querySelector("#Result").innerHTML = "0";
});

parenthesis.addEventListener("click", () => {
    if (document.querySelector("#Result") != "0") {
        document.querySelector("#Result").innerHTML = "(";
    }
});

percentage.addEventListener("click", () => {
    document.querySelector("#Result").innerHTML = "%"
})

division.addEventListener("click", () => {
    document.querySelector("#Result").innerHTML = "/"
})

