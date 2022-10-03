// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// new Code Below this line 
// adds generatePassword as a function.
function generatePassword() {
  alert ('Follow these commands in order to generate your random password.');

  // input for password length and error for incorrect input
  var inValid = true;
  while (inValid) {
    var passwordLength = Number(prompt('How many characters would you like your password to be?\nMust be more than 8 characters.\nMust be less than 128 characters.'));
    if (passwordLength > 7 && passwordLength < 129) {
      inValid = false;
    } else if (passwordLength == 0) {
      Window.close()
    } else {
      alert ('Input invalid. Please try again.');
    }
  }
  alert('You chose the length of your password to be:\n' + passwordLength + ' characters.\n\nYou will now choose if your password will contain numbers, special characters, upper case, and lower case characters.\nPlease choose at least 1 option.');

  // options for character types in password, and validation for it.
  while (!inValid) {
    var lowerCase = confirm('Would you like your password to include: \nLower Case letters?');
    var upperCase = confirm('Would you like your password to include: \nUpper Case letters?');
    var numeric = confirm('Would you like your password to include: \nNumbers?');
    var special = confirm('Would you like your password to include: \nSpecial Characters? \nEx: ?, !, >');
    alert('You chose: \n Lower Case Letters: ' + lowerCase + '\n Upper Case Letters: ' + upperCase + '\n Numbers: ' + numeric + '\n Special Characters: ' + special);
    if (lowerCase == true || upperCase == true || numeric == true || special == true) {
      inValid = true;
    } else {
      alert('At least one character type must be selected. Please try again');
    }
  }
  
  // defines available password characters based on user input
  if (lowerCase == true) {
    lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  } else {
    lowerCase = ''
  } if (upperCase == true) {
    upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  } else {
    upperCase = ''
  } if (numeric == true) {
    numeric = '123456789'
  } else {
    numeric = ''
  } if (special == true) {
    special = ' ~`!@#$%^&*()-+={}[]|/:;<>,.?'
  } else {
    special = ''
  }

  // merges strings of all chosen options
  var grandString = special.concat(lowerCase, upperCase, numeric);

  // creates final password
  var randomNumber = '';
  for (var i = 0; i < passwordLength; i++) {
    randomNumber += grandString[Math.floor(Math.random() * grandString.length)];
  } 
  return randomNumber;
}