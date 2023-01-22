console.log('Type your name')
// Example 1
function method1(){
    console.log('methods goes inside the msg')
}

function method2 (){
for (let i=3; i>0; i-=1){
    console.log(i)
}

}

function method3(name){
    console.log('welcome to the program' + name)
}

function upperMessage(message){
let upper = message.toUpperCase();
console.log(upper)
}

let user = prompt('Enter a message')
upperMessage(user);

function greet(firstName, lastName){
    console.log(`welcome ${firstName} ${lastName[0].toUpperCase()}`)
}

function printmsg(message, method3){
    for (let counter = 1; counter<=method3; counter++){
        console.log(`counter = ${counter} = ${message}`)
    }
}

function isSnakeEyes( dice1, dice2){
if (dice1===1 && dice21){
    console.log('snake eyes')
}
else {
    console.log('ops not snake eyes')
}

}