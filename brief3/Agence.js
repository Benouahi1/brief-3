var btn = document.getElementsByClassName('.toggle_btn');
var menu = document.getElementsByClassName('.menu-H');
let btn2 =document.getElementById('button-c');


btn.onclick = function(){
    menu.classList.toggle('menu-H_open');
}

btn2.onclick = function(){
    swal('Good job!',
    'You clicked the button!',
    'success');
}