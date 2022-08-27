var monthly = document.querySelector('.cpr-toggle__year');
var anual = document.getElementById('.cpr-toggle__month');
var txt1 = document.querySelector("#price1");
var txt2 = document.querySelector("#price2");
var txt3 = document.querySelector("#price3");

monthly.addEventListener("click",function(){
anual.style.backgroundColor = "white"
m.style.backgroundColor = "rgb(232,219,251)"

document.querySelector("#price1").innerHTML = "0/";
document.querySelector("#price2").innerHTML = "23,890/mo";
document.querySelector("#price3").innerHTML = "47,890/mo";
txt1.remove();
txt2.remove();
txt3.remove();
console.log('10')
})

anual.addEventListener("click",function(){
monthly.style.backgroundColor = "white"
anual.style.backgroundColor = "rgb(232,219,251)"

document.querySelector('#price1').innerHTML= "0/";
document.querySelector('#price2').innerHTML= "19,915/";
document.querySelector('#price3').innerHTML= "43,915/";
txt1.remove();
txt2.remove();
txt3.remove();
console.log('10')
});
// <----------Nav.js------------->

