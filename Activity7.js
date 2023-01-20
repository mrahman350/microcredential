

let userNum = parseInt(prompt('Please enter a number between 1 to 10'));
let anotherNum= isNaN(userNum)



 while ( anotherNum===true|| userNum<0 || userNum>10){

if (userNum<0){
        userNum=parseInt(prompt('enter 0 to 10'))
    }
    else if (userNum>10){
       
       userNum=parseInt(prompt('enter 0 to 10'))
        
    }

    else {
       userNum=parseInt(prompt('You entered a string, enter a number 0-10;'))
        anotherNum= isNaN(userNum)

    }

 } 

 console.log(`you entered ${userNum}`)



for (let i=userNum; i<=20; i++){
    console.log(`The number is ${i}`)
}

