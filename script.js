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

//
// let includeLowerChar = true;
// let includeUpperChar = true;
// let includeNumbers = true;
// let includeSpecialChar = true;

// ============== Function to prompt user for password options ===================== //

function generatePassword() {
  // ----- Using a while loop to determine if user input is equal to specified range ------ //
  let passwordLength;
  while (true) {
    passwordLength = prompt(
      "\nPlease enter the number of characters you'd like in your password? \n(Must be between 10-64 characters)\n"
    );

    if (passwordLength >= 10 && passwordLength <= 64) {
      alert("\nGreat Choice!" + "\nYour password will have " + passwordLength + " characters");
      break;
    } else {
      alert("\nOpps! The value you entered is incorrect\n" + "Click 'OK' to try again");
    }
  }

  // --- This takes whats stored in the variable passwordLength and converts it from a string to a number --- //
  let userInputNum = parseInt(passwordLength);
  let selectedChars = [];

  // ----- Using while loop to check if user has selected at least one character type ------ //
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

    // ---- checking if certain variables are set to true. If they are, it concatenates the corresponding character set (e.g. lowerCasedCharacters) to the selectedChars variable ---- //
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

  //------ created an empty array and then using a for loop to iterate through the elements of array 'selectedChars' ----------// 
  // debugger;
  let res = [];
  for (let i = 0; i < selectedChars.length; i++) {
    // pushing the new characters from selectedCharsArray and getting random indexes from the randomChar function
    res.push(randomChar(selectedChars));
  }
  // ---- taking a slice of the array "res" starting at the first element (index 0) and ending at the userInputNum element. This slice is returned as a new array. Then using .join("") to join all elements into one string without any separators ----- //
  const password = res.slice(0, userInputNum).join("");

  return password;
}

// ------- Function to generate a random number ------- //
function randomChar(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ------ Get references to the #generate element ----------//
var generateBtn = document.querySelector("#generate");

// ------- Write password to the #password input --------- //
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// ----------- Add event listener to generate button ---------- //
generateBtn.addEventListener("click", writePassword);
