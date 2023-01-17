console.log('Type your name')

// if statement
let day = true;
let night = false;
if (day){
    console.log(`The condition or statement is ${day}`)
}

let goodMood = true;
let gotSleep = false;

if (goodMood !== gotSleep){
    console.log('In good Moody today')
}
console.log('Moody today')

let a=5, b=4, equalNum; 

if(a===b){
    equalNum=true;
}
else {
    equalNum=false
}

let n1=5, n2=8; 
if (n1===n2){
    console.log('the numbers are equal')

}
else if (n1>n2){
    console.log('Number 1 is grather than number 2')
}
else {
console.log('Invalid entry')
}

let colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let userspick = parseInt(prompt('select a color from 1 to 5'));
let selectColor=colors[userspick-1];

if (selectColor=='red'){
    console.log('The selected color is red')
}

else if(selectColor=='blue'){
    console.log('The select color is blue')
}
else {
    console.log('none of that')
}

//Example 5

let userInput = prompt('Enter a number');
let checkInput=parseInt(userInput);
checkInput=isNaN(checkInput);

// Example 6

let password= prompt('Enter a password')
if (password.length>=6){
    console.log('Password has a 6+ char')
}
else {
    console.log('password has less than 6 char')
}