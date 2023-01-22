// Example 1

let msg = 'This is an outside message'

function displaymsg(){
    let msg = 'Hello world!'
    return(msg)
}
msg=displaymsg()

// Example 
// var and let are the same. Var is old and let is new

var fullmoon = true;
var species = human;
if (fullmoon){
    var species = 'wolf'
    console.log(`Full moon! Lupin is a ${species}`)
}

// Example 3

let message = 'Hello World!'
console.log(message)
message='Good evening'
console.log(message)

//Example 4

for (var i=0; i<=10; i++){
    console.log(i)
}
console.log('The last value of i is' + (i))

//Example 5

let sum = function(num1, num2){
    return num1+num2
}

let square = function(num){
    return Math.pow(num, 2)
}

//Example 7

function callTwice (dice){
    dice();
    dice();

}
function rolldice(){
    const roll = Math.ceil(Math.random()*6)
}

// Example 8

function makeBetweenFunc(min, max){
    return function(num){
        if (num>min && num<=max){
            return true;
        }
   else if (num<max || num>max){
    return false
   }
   else {
    return 'Invalid'
   }
    }

}

let child = makeBetweenFunc(2, 20)
console.log(child('Peter'))

//Example 10 . Skipped example 9

const myMath = {
    square() {
        return num*num
    },
    double (){
        return num+num
    }
}

// Example 11. How to access properties in a method using "this"

const cat = {
    name: 'Micky',
    color: 'White with brown sports',
    breed: 'unknown',
    meow: 'Meow, Meow'
}

//Example 12

const hen ={
name: 'Helen',
eggCount : 0,
layanEgg(){this.eggCount++; return 'egg'}
}

// Example 13

function yell(msg){
    try{console.log(msg.toUpperCase().repeat(3))}

    catch(e){
    console.log(e)
    console.log('Please pass a string next time')
}
}