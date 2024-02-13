const characters = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1",
 "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
 "$","%","^","&","*","(",")","_","-","+","=","{","[","}",
 "]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("generate-btn");
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");
const container = document.getElementById("container");
const passwordAlert = document.getElementById("alert");
const passwordLength = document.getElementById("password-length")
const submitBtn = document.getElementById("submit-btn");
const checkboxOne = document.getElementById("checkbox-one");
const checkboxTwo = document.getElementById("checkbox-two");

generateBtn.addEventListener("click", function(){
    getRandomPassword(15)
});

function getRandomPassword(length) {
    let twoCheckedBoxes = document.querySelectorAll('input[name="color"]:checked');
    if (checkboxOne.checked) {
        console.log("checkboxOne checked")
        let arrRange = characters.slice(0,62)
        console.log(arrRange)
            if (!passwordOne.textContent && !passwordTwo.textContent){
                for (let i = 0; i < length; i++) {
                let randomPasswordOne = arrRange[Math.floor(Math.random() * arrRange.length * 1)]
                let randomPasswordTwo = arrRange[Math.floor(Math.random() * arrRange.length * 1)]
                passwordOne.textContent += randomPasswordOne
                passwordTwo.textContent += randomPasswordTwo
                } }
            else {
                passwordAlert.textContent = "Please refresh page and regenerate passwords"
                }
            } 
    else if (checkboxTwo.checked) {
            checkboxOne.disabled = true
            console.log("checkbox2 checked")
            let arrRangeTwo = characters.slice(0,52)
            let arrRangeThree = characters.slice(63,91)
            let combinedArray = arrRangeTwo.concat(arrRangeThree)
            console.log(arrRangeTwo)
            console.log(combinedArray)
                if (!passwordOne.textContent && !passwordTwo.textContent){
                    for (let i = 0; i < length; i++) {
                    let randomPasswordOne = combinedArray[Math.floor(Math.random() * combinedArray.length * 1)]
                    let randomPasswordTwo = combinedArray[Math.floor(Math.random() * combinedArray.length * 1)]
                    passwordOne.textContent += randomPasswordOne
                    passwordTwo.textContent += randomPasswordTwo
                    }
                }
                else {
                    passwordAlert.textContent = "Please refresh page and regenerate passwords"
                }
            }
    else if (checkboxTwo.checked, checkboxOne.checked) {
            console.log("Both checkboxes checked")
            let arrRangeFour = characters.slice(0,52)
            console.log(arrRangeFour)
                if (!passwordOne.textContent && !passwordTwo.textContent){
                    for (let i = 0; i < length; i++) {
                    let randomPasswordOne = arrRangeFour[Math.floor(Math.random() * arrRangeFour.length * 1)]
                    let randomPasswordTwo = arrRangeFour[Math.floor(Math.random() * arrRangeFour.length * 1)]
                    passwordOne.textContent += randomPasswordOne
                    passwordTwo.textContent += randomPasswordTwo
                    } 
                }
                else {
                    passwordAlert.textContent = "Please refresh page and regenerate passwords"
                    }
                }
    else {
                if (!passwordOne.textContent && !passwordTwo.textContent){
                for (let i = 0; i < length; i++) {
                let randomPasswordOne = characters[Math.floor(Math.random() * characters.length * 1)]
                let randomPasswordTwo = characters[Math.floor(Math.random() * characters.length * 1)]
                passwordOne.textContent += randomPasswordOne
                passwordTwo.textContent += randomPasswordTwo
                } 
                }
                else {
                passwordAlert.textContent = "Please refresh page and regenerate passwords"
                }
            }
};

function copyPassword() {
    if (passwordOne.textContent && passwordTwo.textContent){
        navigator.clipboard.writeText(passwordOne.textContent).then(() => {
        passwordAlert.textContent = "Password copied to clipboard!";
      })
     } else {
        passwordAlert.textContent = "Please generate passwords to copy"
}
};

passwordOne.addEventListener("click", function(){
    copyPassword()
    
});

passwordTwo.addEventListener("click", function(){
    copyPassword()
});

submitBtn.addEventListener("click", function(length) {
        let passLength = passwordLength.value
        if (passLength <= 30 && passLength >= 10) {
        getRandomPassword(passLength)
        passwordLength.value = ""
        }
        else {
            passwordAlert.textContent = "Please enter value between 10 and 30."
        }
});



