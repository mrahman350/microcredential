let item1=document.querySelector('.link1')
let modal=document.querySelector('.modalWindow')
let xclose=document.querySelector('.modalHeadX')

item1.addEventListener('click', function(){

 modal.style.display='block'})

xclose.addEventListener('click', function(){
    modal.style.display='none'
}
)

let item2=document.querySelector('.link2')
let modal2=document.querySelector('.modalWindow2')
let xclose2=document.querySelector('.modalHeadX2')

item2.addEventListener('click', function(){

modal2.style.display='block'})

xclose2.addEventListener('click', function(){
    modal2.style.display='none'
})

let item3=document.querySelector('.link3')
let modal3=document.querySelector('.modalWindow3')
let xclose3=document.querySelector('.modalHeadX3')

item3.addEventListener('click', function(){

    modal3.style.display='block'})

    xclose3.addEventListener('click', function(){
        modal3.style.display='none'
})

let item4=document.querySelector('.link4')
let modal4=document.querySelector('.modalWindow4')
let xclose4=document.querySelector('.modalHeadX4')

item4.addEventListener('click', function(){

    modal4.style.display='block'})

    xclose4.addEventListener('click', function(){
        modal4.style.display='none'
})

let item5=document.querySelector('.link5')
let modal5=document.querySelector('.modalWindow5')
let xclose5=document.querySelector('.modalHeadX5')

item5.addEventListener('click', function(){

    modal5.style.display='block'})

    xclose5.addEventListener('click', function(){
        modal5.style.display='none'
})

let item6=document.querySelector('.link6')
let modal6=document.querySelector('.modalWindow6')
let xclose6=document.querySelector('.modalHeadX6')

item6.addEventListener('click', function(){

    modal6.style.display='block'})

    xclose6.addEventListener('click', function(){
        modal6.style.display='none'
})

let Shopping = document.querySelector('.mybag');
let shoppingcart = document.querySelector('.ShoppingCart');
let xcart = document.querySelector('.CartX');
Shopping.onclick=() =>
{
    shoppingcart.classList.toggle('active');
}
xcart.addEventListener('click', function(){
    shoppingcart.classList.toggle('active');
})