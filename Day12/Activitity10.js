
// Example 1
let p1 = document.getElementById('one')
p1.style.color = 'red';

// Example 2
let ps = document.getElementsByTagName('p')
console.log('ps')

// example 3

let n = document.getElementsByClassName('Name')
for ( let i=0; i<n.length; i++){
    n[i].style.color ='orange'

}

// Example 4

let firstP = document.querySelector(' #special p')
firstP.style.color = 'Blue'

// Example 5

let names = document.querySelectorAll('.name')
for ( let a = 0; a<names.length; a++){
names[a].style.fontWeight = 'bolder'
names[a].style.fontWeight = 'italic'

}

//Example 6
let my=document.querySelector('.qcc')

// Example 10
let n2 = document.querySelectorAll('#special .name')[1]
n2.className='bgBlue'

// Example 11

let list = document.querySelectorAll('ul')[2]

// Example 12
let myPara = document.createElement('p.')
let mySentence = document.createTextNode('Append paragraph')
myPara.appendChild(mySentence)
let newP = document.querySelector('.d')
newP.appendChild(myPara)

// Example 13

let subtitle = document.createElement('h2')
subtitle.append('Parks to visit in nYC')
let parks = document.querySelector('.nyc')
parks.insertAdjacentElement('afterbegin', subtitle)

// Example 14
let part1 = document.querySelector('.p1')
part1.remove()
