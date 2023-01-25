console.log('Mohammed Rahman')

for (let counter = 1; counter<=5; counter ++){
    console.log('This currernt counter is' + counter)
}

//print a number from 100 to 0, inclusive, decreasing order in a step of 10

for (let y=100; y>=0; y -=10){
    console.log('Y is going down by 10')
}

// Print 0 to 50 , exclusive only even numbers. The program will ask the user to under the initial 

let num = parseInt(prompt('Enter a number'));

for (let num; num<50; num++){

    if (num%2===0)
    console.log('number' = num)
}

// Example 4. Loop in an array

let cars = ['tesla' , 'BMW' ,'Mazda', 'Nissan' ]

for (let x = 0; i<cars.length; i++){
    console.log(cars[i])
}

// another way of using for loop

for (let eachitem of cars){
    console.log(eachitem)
}

// Example 5 Nesting loops

for (let outerCounter= 1; outerCounter<=5; outerCounter++){

    console.log(' out loop ' + outerCounter)

    for ( let innercounter=30; innercounter>0; innercounter-=10){
        console.log(`innter counter ${innercounter}`)
    }
}

// while loop

let z = 1
while (z<=5){
    console.log( 'the currect number is ' + z)
z++
}