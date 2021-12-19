/*---------login from section start-----------*/
console.clear()

let logIn=document.getElementById("log-ing");
let registerBut=document.getElementById("register");
let but=document.getElementById("btn")
console.log(but);

function register(){
    logIn.style.left= "-400px";
    registerBut.style.left= "50px";
    but.style.left= "110px"
}

function login(){
    logIn.style.left= "50px";
    registerBut.style.left= "400px";
    but.style.left= "0px"
}