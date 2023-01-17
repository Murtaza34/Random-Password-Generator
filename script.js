// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// let includeLowerChar = true;
// let includeUpperChar = true;
// let includeNumbers = true;
// let includeSpecialChar = true;

// ============= Function to prompt user for password options ============== //

function generatePassword() {
  // ----- Using a while loop to determine if user input is equal to specified range ------ //
  while (true) {
    let passwordLength = prompt(
      "\nPlease enter the number of characters you'd like in your password? \n(Must be between 10-64 characters)\n"
    );

    if (passwordLength >= 10 && passwordLength <= 64) {
      alert("\nGreat Choice!" + "\nYour password will have " + passwordLength + " characters");
      break;
    } else {
      alert("\nOpps! The value you entered is incorrect\n" + "Click 'OK' to try again");
    }
  }
  
  let selectedChars = [];
  
  // ====== Using while loop to check if user has selected at least one character type =========/
  while (true) {
    let includeLowerChar = confirm(
      "\nWould you like your password to include Lowercase?\n\n OK for 'YES'\n Cancel for 'NO'"
    );
    let includeUpperChar = confirm(
      "\nWould you like your password to include Uppercase?\n\n OK for 'YES'\n Cancel for 'NO'"
    );
    let includeNumbers = confirm(
      "\nWould you like your password to include Numbers?\n\n OK for 'YES'\n Cancel for 'NO'"
    );
    let includeSpecialChar = confirm(
      "\nFinally, Would you like your password to include Special Characters?\n\n OK for 'YES'\n Cancel for 'NO'"
    );

    if (includeLowerChar) {
      selectedChars = selectedChars.concat(lowerCasedCharacters);
    }
    if (includeUpperChar) {
      selectedChars = selectedChars.concat(upperCasedCharacters);
    }
    if (includeNumbers) {
      selectedChars = selectedChars.concat(numericCharacters);
    }
    if (includeSpecialChar) {
      selectedChars = selectedChars.concat(specialCharacters);
    }

    if (selectedChars.length > 0) {
      break;
    } else {
      alert("\nYou must select at least one Character type" + "\nClick 'OK' to try again");
    }
  }

  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += getRandom(selectedChars);
  }
  return password;
}

// ============ Get references to the #generate element ============ //
var generateBtn = document.querySelector("#generate");

// ============ Write password to the #password input ============= //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// =========== Add event listener to generate button ============= //
generateBtn.addEventListener("click", writePassword);
