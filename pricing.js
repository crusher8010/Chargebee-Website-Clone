var monthly = document.querySelector('.cpr-toggle__year');
var anual = document.getElementById('.cpr-toggle__month');

monthly.addEventListener("click",function(){
// anual.style.backgroundColor = "white"
// m.style.backgroundColor = "rgb(232,219,251)"

document.querySelector(".cpr-plan__div").innerHTML = "0/"
document.querySelector(".cpr-plan__div").innerHTML = "23,890/mo"
document.querySelector(".cpr-plan__div").innerHTML = "47,890/mo"
txt1.remove();
txt2.remove();
console.log('10')
})

anual.addEventListener("click",function(){
// monthly.style.backgroundColor = "white"
// anual.style.backgroundColor = "rgb(232,219,251)"

document.querySelector('.cpr-plan__div').innerHTML= "0/";
document.querySelector('.cpr-plan__div').innerHTML= "19,915/";
document.querySelector('.cpr-plan__div').innerHTML= "43,915/";
txt1.remove();
txt2.remove();
console.log('10')
})