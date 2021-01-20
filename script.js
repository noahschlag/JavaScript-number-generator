// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["!", "@", "#", "$", "%", "+", "&", "*", "?"]

function getOptions(){
  var length = parseInt(prompt("Password Length")) 
  // Condition statement to check if password is a number, it ends once it evaluates to false.
  if (isNaN(length)) {
    alert("Must provide a valid number");
    return;
  }
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters long")
    return;
  }
  var upperCaseSelect = confirm("Click OK to include Upper-Case letters")
  var lowerCaseSelect = confirm("Click OK to include Lower-Case letters")
  var numbersSelect = confirm("Click OK to include numbers")
  var specialSelect = confirm("Click OK to include Special characters")
  
  if (!upperCaseSelect && !lowerCaseSelect && !numbersSelect && !specialSelect) {
    alert("Please Select One Character for the Password")
    return; 
  }
  var options = {
    length,
    upperCaseSelect,
    lowerCaseSelect,
    numbersSelect,
    specialSelect, 
  }
  console.log(options)
  return options; 
}

function generatePassword() {
  var options = getOptions();
  // empty arrays for storing data, create if statements to see if any of these things are "True; false" if any of these cases are true, you want to add new characters to temporary array
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
