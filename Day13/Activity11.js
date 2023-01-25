// Example 2
let b1 = document.querySelector('.btn1')
b1.onclick = function(){
    alert('Clicked on the 2nd button!')
}

// Example 3
 let a1 = document.querySelector('.alink')
 
 function testing (){
    console.log('Mouse Hover')
 }
 a1.onmouseover = testing

 //Example 4
 let mouse = document.querySelector('.mouseout')
    mouse.onmouseout = function(){
        console.log('Mouse Out')
    }
 
    let b2 = document.querySelector('.btn2')
    b2.addEventListener('click', function(){
        alert('Hello there!')
    })

    let btnColor = document.querySelector('.btnColor')
let divColor = document.querySelector('.divColor')

function randomRGB(){
    let randomRed = Math.floor(Math.random()*255)
    let randomGreen = Math.floor(Math.random()*255)
    let randomBlue = Math.floor(Math.random()*255)

    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`

}

btnColor.addEventListener('click', function(){
    divColor.style.backgroundColor=randomRGB()
})

// Example 
let para = document.querySelector('.pmouse')
let btn3 = document.querySelector('.btn3')

function hover1(){
    para.innerHTML = 'Mouse Over'
}
function click(){
    para.innerHTML +='Clicked'
}
para.addEventListener('mouseover', hover1)
btn3.addEventListener('dbclick', click)

//Example 10
let inputTxt = document.querySelector('.inputTxt')
inputTxt.addEventListener('keydown', function(){
console.log('KEYDOWN!')
})

let display1 = document.querySelector('.display')

window.addEventListener('scroll', function(){
    let pxTop = window.pageXOffset
    display1.innerHTML = `${pxTop} px from the top`
})

// Example 12

let topDiv = document.querySelector('.goTop')

window.addEventListener('scroll', function(){
    let pxTop = window.pageXOffset
    if (pxTop>=100){
        topDiv.style.display1 = 'block'
    }
    else {
        topDiv.style.display1 = 'none'
    }
})

// Example 13

let QCCwebsite = document.querySelector('.linkQCC')
QCCwebsite.addEventListener('click', function(e){
e.preventDefault();
alert('QCC Website is off')
})
