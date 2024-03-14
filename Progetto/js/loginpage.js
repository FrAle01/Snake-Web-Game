/*const formLogin = document.getElementById("login");
document.addEventListener("submit", handlerlogin());

function handlerlogin(){
    const usrnm = document.getElementById("user");
    const psswrd = document.getElementById("passw");


}*/

let eye = document.getElementById("eye").addEventListener("click", function(){
    let passInput = document.getElementById("passw");
    if(passInput.type == "password"){
        passInput.type="text";
    }else{
        passInput.type="password";
    }
});

