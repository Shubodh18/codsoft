function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
// Deletes the last character from the display
function deleteLast() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

// Toggles the sign of the displayed value
function toggleSign() {
    let display = document.getElementById("display").value;
    if (display) {
        let value = parseFloat(display);
        document.getElementById("display").value = -value;
    }
}
