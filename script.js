// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function getRandomItem(list) {
  return
}

function generatePassword() {
  var userInput = window.prompt("How long do you want your password to be?")

  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("that is not a number")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("password length must be between 8 and 128 characters")
    return
  }

  var userWantsNumbers = window.confirm('would you like to include numbers in your password')
  var userWantsSymbols = window.confirm('would you like to include symbols in your password')
  var userWantsLowercase = window.confirm('would you like to include lowercase lettters in your password')
  var userWantsUppercase = window.confirm('would you like to include uppercase in your password')
  var userChoice = []

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
  var lowercaseList = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
  var uppercaseList = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userWantsNumbers === true) {
    userChoice = userChoice.concat(numberList)
  }
  if (userWantsSymbols === true) {
    userChoice = userChoice.concat(symbolList)  }
  if (userWantsLowercase === true) {
    userChoice = userChoice.concat(lowercaseList)  }
  if (userWantsUppercase === true) {
    userChoice = userChoice.concat(uppercaseList)  }
  if (!userWantsNumbers && !userWantsSymbols && !userWantsLowercase && !userWantsUppercase) {
    userChoice = alert("You must choose a criteria") }

  console.log(userChoice)
  var generatePassword = ""

  for (var i = 0; i < passwordLength; i++) {
    generatePassword += userChoice[(randomInt(0, userChoice.length - 1))]
    console.log(generatePassword)
  }
  return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
