function convert() {
    // Get the input element
    let input = document.getElementById('input');
    
    // Get the value entered in the input field
    let inputText = input.value;
    
    // Convert the entered value from CM to INCHES
    let inches = inputText / 2.54;
    
    // Get the element to display the result
    let value = document.getElementById('value');
    
    // Display the result with two decimal places and append "INCHES"
    value.innerText = inches.toFixed(2) + " INCHES";
}
