


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomIteam(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
   var userInput = window.prompt("How long would you like, Length of password?")
  var passwordLength = parseInt(userInput)
  if (isNaN(passwordLength)) {
    window.alert("Not a number.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be 8 and 128 characters.")
    return
  }

  var userWantsLowercase = window.confirm("Would you like any lowercase?")
  var userWantsUppercase = window.confirm("Would you like any uppercase?")
  var userWantsNumbers = window.confirm("Would you like numbers?")
  var userWantsSymbols = window.confirm("Would you like any specail characters?")

  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var numbers = ["0","1","2","3","4","5","6","7","8","9"]
  var symbols = ["!","@","#","$","%","^","&","*","(",")","_","+","="]

  var optionsList = []
  
  for (var i = 0; i < lowerCase.length; i++){
    upperCase[i] = lowerCase[i].toUpperCase()
  }

  if (userWantsLowercase === true) {
    optionsList.push(lowerCase)
  }

  if (userWantsUppercase === true) {
    optionsList.push(upperCase)
  }

  if (userWantsNumbers === true) {
    optionsList.push(numbers)
  }

  if (userWantsSymbols=== true) {
    optionsList.push(symbols) 
  }

  if (optionsList.length === 0) {
    optionsList.push(lowerCase, numbers)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomIteam(optionsList)
    var randomChar = getRandomIteam(randomList)
    generatedPassword += randomChar
  }

return generatedPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
