let hamburger = document.querySelector('.hamburger');
let right = document.getElementById('leftt');
let left = document.getElementById('rightt');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    right.classList.toggle('active');
    left.classList.toggle('active');
})