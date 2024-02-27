function convert() {
    let celsius = document.getElementById('celsius').value;
    // Check if the input is a valid number
    if (celsius) {
        let fahrenheit = celsius * 9 / 5 + 32;
        let result = document.getElementById('result');
        result.innerText = fahrenheit + " Fahrenheit";
        result.innerText = celsius + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit";
        result.style.color = "green";
    } else {
        // Handle invalid input
        let result = document.getElementById('result');
        result.innerText = "Please enter a valid Temperature";
        result.style.color = "red"; 
    }
}
