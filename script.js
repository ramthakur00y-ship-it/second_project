function convert() {
    let value = document.getElementById("inputValue").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result;

    if (from == "km") value = value * 1000;
    else if (from == "cm") value = value / 100;
    else if (from == "mm") value = value / 1000;

    if (to == "km") result = value / 1000;
    else if (to == "cm") result = value * 100;
    else if (to == "mm") result = value * 1000;
    else result = value;
    if (value === "") {
    alert("Please enter a value!");
    return;
}

    document.getElementById("result").innerText = "Result: " + result;
}
function toggleMode() {
    document.body.classList.toggle("dark");
}
function swapUnits() {
    let from = document.getElementById("fromUnit");
    let to = document.getElementById("toUnit");

    let temp = from.value;
    from.value = to.value;
    to.value = temp;
}
function toggleMode() {
    document.body.classList.toggle("dark");
}