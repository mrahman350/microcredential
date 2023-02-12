/* Sessaion Storeage in Forms*/

function FirstName(){
    let username = document.querySelector('#first_name').value
sessionStorage.setItem('userN', username)
return false
}

let input1 = document.querySelector('.submit')
input1.addEventListener('click', FirstName)


function lastname(){
    let LastN = document.querySelector('#last_name').value
sessionStorage.setItem('user2', LastN)
return false
}

let input2 = document.querySelector('.submit')
input2.addEventListener('click', lastname)


function Street(){
    let St = document.querySelector('#street').value
sessionStorage.setItem('user3', St)
return false
}

let input3 = document.querySelector('.submit')
input3.addEventListener('click', Street)


function city(){
    let city = document.querySelector('#city').value
sessionStorage.setItem('user4', city)
return false
}

let input4 = document.querySelector('.submit')
input4.addEventListener('click', city)

function zip(){
    let zip = document.querySelector('#zip').value
sessionStorage.setItem('user5', zip)
return false
}

let input5 = document.querySelector('.submit')
input5.addEventListener('click', zip)