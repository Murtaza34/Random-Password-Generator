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
function getPasswordOptions() {
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
  // ====== Using while loop to check if user has selected at least one character type =========/
  while (true) {
    let includeLowerChar = confirm(
      "\nWould you like your password to include L͟o͟w͟e͟r͟c͟a͟s͟e͟?\n\n OK for 'YES'\n Cancel for 'NO'"
    );
    let includeUpperChar = confirm(
      "\nWould you like your password to include U͟p͟p͟e͟r͟c͟a͟s͟e͟?\n\n OK for 'YES'\n Cancel for 'NO'"
    );
    let includeNumbers = confirm(
      "\nWould you like your password to include N͟u͟m͟b͟e͟r͟s͟?\n\n OK for 'YES'\n Cancel for 'NO'"
    );
    let includeSpecialChar = confirm(
      "\nFinally, Would you like your password to include S͟p͟e͟c͟i͟a͟l͟ C͟h͟a͟r͟a͟c͟t͟e͟r͟s͟?\n\n OK for 'YES'\n Cancel for 'NO'"
    );
    // ======= Checks if the user inputs are true, if so it will put them into passwordChracters array =======//
    if (includeLowerChar) {
      passwordCharacters.push(lowerCasedCharacters);
    }
    if (includeUpperChar) {
      passwordCharacters.push(upperCasedCharacters);
    }
    if (includeNumbers) {
      passwordCharacters.push(numericCharacters);
    }
    if (includeSpecialChar) {
      passwordCharacters.push(specialCharacters);
    }

    let allCharacters = [].concat.apply([], passwordCharacters);

    let password = "";

    if (includeLowerChar || includeUpperChar || includeNumbers || includeSpecialChar) {
      break;
    } else {
      alert("\nYou must select at least one Character type" + "\nClick 'OK' to try again");
    }
  }
}

// ======== testing codes ======= //
// (!includeLowerChar && !includeUpperChar && !includeNumbers && !includeSpecialChar) {
//       alert("You must select at least one Character type");

// if (!includeLowerChar && !includeUpperChar && !includeNumbers && !includeSpecialChar) {
//   alert("You must select at least one Character type");
// }

//pass length = 23
//lower case = true
//upper case = false
//special = false
//number = false

// ========= Function for getting a random element from an array ========= //
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ======== testing codes ======= //
// let n = PassLength;
// let randomElement = arr.sort(() => Math.random() - Math.random()).slice(0, n);
// return randomElement;

// Function to generate password with user input
function generatePassword() {
  let password = "";
  getPasswordOptions();
  for (let i = 0; i < passwordLength; i++) {
    passwordOption = passwordOption.flat();
    password += getRandom(passwordOption);
  }
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
