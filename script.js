// Assignment Code
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Arrays
const mainArray=[];
const lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers=["0","1","2","3","4","5","6","7","8","9"];
const special=["!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|",":","<",">","?","/"];

function generatePassword() {

    //Prompts
    const passLength = prompt("Select a password length, between 8 and 128 characters.");

    //Scenario for selection outside of posted parameters
    if (passLength < 8 || passLength > 128) {
        alert("Please refresh the screen and choose a value between 8 and 128.");
        return;
    }

    //Remainder of prompts
    const lowerCase=confirm("Would you like to use lowercase characters?");
    const upperCase=confirm("Would you like to use uppercase characters?");
    const numeric=confirm("Would you like to use numeric characters?");
    const specialChar=confirm("Would you like to use special characters?");

    //Scenario for all false selections
    if (lowerCase === false && upperCase === false && numeric === false && specialChar === false) {
        alert("Please make at least one positive selection, though more than one is highly recommended.")
        const lowerCase=confirm("Would you like to use lowercase characters?");
        const upperCase=confirm("Would you like to use uppercase characters?");
        const numeric=confirm("Would you like to use numeric characters?");
        const specialChar=confirm("Would you like to use special characters?");
    }

    //Scenario for true selecif
    if (lowerCase === true){
        mainArray.push(lower);
    }

    if (upperCase === true){
        mainArray.push(upper);
    }

    if (numeric === true){
        mainArray.push(numbers);
    }

    if (specialChar === true){
        mainArray.push(special);
    }

    //console.log(mainArray)

    //Variable for flattening mainArray into useable indexes
    const flattened = mainArray.flat()
    //Variable for defining password
    const password = [];

    for (let i = 0; i < passLength; i++) {
        
        randomPick = Math.floor(Math.random() * flattened.length - 1);
        password.push(flattened[randomPick]);
        //console.log(randomPick)
    }    
    
    return password.join('');
    
}

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;
}
