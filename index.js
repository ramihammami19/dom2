// document.addEventListener("DOMContentLoaded" , function(){
//     console.log("loaded")
// }
const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['red', 'black', 'blue', 'pink'];

body.style.backgroundColor = 'red';
button.addEventListener('click', function() {
    const colorIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
});
