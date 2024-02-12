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
const passwordAlert = document.getElementById("alert")
console.log(passwordOne.textContent)
console.log(passwordTwo.textContent)

generateBtn.addEventListener("click", function(){
    getRandomPassword()
})

function getRandomPassword() {
    if (!passwordOne.textContent && !passwordTwo.textContent){
    for (let i = 0; i < 15; i++) {
    let randomPasswordOne = characters[Math.floor(Math.random() * characters.length * 1)]
    let randomPasswordTwo = characters[Math.floor(Math.random() * characters.length * 1)]
    passwordOne.textContent += randomPasswordOne
    passwordTwo.textContent += randomPasswordTwo
    } 
}};

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



