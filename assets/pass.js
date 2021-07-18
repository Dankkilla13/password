// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getPassWordLength(){
  var passWordLength=0;
  while( !(passWordLength>=8 && passWordLength<=128) ) {
    passWordLength = number(window.prompt( "Enter desired password length (8-128 characters): ") );
  }
  return passWordLength;
}

function getLowerCase(){
  var allowLowerCase = true;
  allowUpperCase = window.confirm("allow lower case letters (abcde....z)\n(ok=yes or Cancel=no): ");
  return allowUpperCase;
}

function getNumber(){
  var allowNumbers = true;
allowNumbers = window.confirm("Allow numbers (0123....9)\n(ok=yes or Cancel=no):");
return allowNumbers;
}
function getSpecials(){
  var allowSpecials;
  allowSpecials = window.confirm("Allow special characters (!@&*^....?><)\n(ok=yes or Cancel=no): ");
  return allowSpecials;
}
function shuffle( characterSet1 ){
  var characterSet2 = "";
  var arraySet1 = characterSet1.split('');
  var setLength = characterSet1.length;
  var indexRandom = Math.floor(Math.random() * setLength+1 );
  for (var i = 0; i < setLength;i++) {
    while (arraySet1[indexRandom] === null) {
      indexRandom = Math.floor(Math.random() * setlength);
    }
    characterSet2 += arraySet1[indexRandom];
    arrayset1[indexRandom] = null;
  }
  return characterSet2;
}
function formPassWord( characterSet2, character3, passWordLength) {
  var password = "";
var setLength = characterset2.length;
for( var i = 0; i <passWordLength; i++ ){
  indexRandom = Math.floor( Math.random() * setLength);
  if( (i%2) ){
    passWord += characterSet2[indexRandom];
  }
  else { passWord += characterSet3[indexRandom];
    }
  }
  return passWord;
}
function verifyPassword(funnyCharacters, passWord, passWordlength, allowLowerCase, allowUpperCase, allowNumbers, allowSpecials){
  if( passWord.length !== passWordLength ){
    window.alert( "Error, the generated password length is different from the required length. ");
  }
  var haveLowerCase = false;
  if (allowLowercase) {
    for (var i = 0; i< passWordLength; i++) {
      var characterToTest = passWord[i];
      var asciiValue = characterTotest.charCodeAt(0);
      if (asciiValue > 96 && asciiValue < 123) {
        haveLowerCase = true;
        break;
      }
    }
  }
  var haveUpperCase = false;
  if (allowUppercase) {
    for (var i = 0; i < passWordLength; i++){
      var characterToTest = passWord[i];
      var asciivalue = characterToTest.charCodeAt(0);
      if (asciiValue > 64 && asciiValue < 91) {
        haveUpperCase = true;
        break;
      }
    }
  }
  var haveNumbers = false;
  if (allowSpecials){
    for (var i = 0; i < passWordLength; i++){
      var characterToTest = passWord[i];
      if (funnyCharacters.indexOf(characterToTest) != -1){
        haveSpecials = true;
        break;
      }
    }
  }
  var requirementSatisfied = true;
  if (allowLowerCase && !haveLowerCase){
    requirementSatisfied = false;
  }
  if (allowUpperCase && !haveUpperCase){
    requirementSatisfied = false;
  }
  if (allowNumbers && !haveNumbers){
    requirementSatisfied = false;
  }
  if(allowSpecials && !haveSpecials){
    requirementSatisfied = false;
  }
  return requirementSatisfied;
}
function buildPassword( passWordLength,allowLowerCase, allowUpperCase, allowNumbers, allowSpecials){
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharacters = "1234567890";
  var funnyCharacters = "!@#$%^&*()_+=-/.,<>?;':";
  var characterSet1 = "";
  if( allowLowerCase ) {
    characterSet1 += lowerCaseLetters;
  }
  if ( allowUpperCase ) {
    characterSet1 += upperCaseletters;
  }
  if ( allowNumbers ){
    characterSet1 += numberCharacters;
  }
    if ( allowSpecials ){
      characterrSet1 += funnyCharacters;
    }
    var characterSet2 = shuffle( characterSet1 );
    var characterSet3 = shuffle( characterSet2 );
    var requirementSatisfied = false;
    while ( !requirementSatisfied ) {
      var passWord = formPassWord( characterSet2, characterSet3, passWordLength);
      requirementSatisfied = verifyPassword (funnyCharacters, passWord, passWordLength, allowLowerCase,allowUpperCase,allowNumbers, allowSpecials);
    
    }
    console.log("the generated password is:", passWord );
    return passWord;
}
function generatePassword(){
  var createdPassWord = "";
  var passWordLength = getPassWordLength();
  var allowSpecials = getSpecials();
  var allowLowerCase = getLowerCase();
  var allowUpperCase = getUpperCase();
  var allowNumbers = getNumbers();
  var somethingSelected = allowLowerCase | allowNumbers | allowSpecials | allowUpperCase;
  if( !somethingSelected ) {
    window.alert("Error, you must select at least one character set, please try again.");
    createdPassWord = generatedPassword();
  }
  if (createdPassWord == 0){
    createdPassWord = buildPassword(passWordLength, allowUpperCase, allowSpecials,allowNumbers,allowLowerCase);
  }
  return createdPassWord;
}