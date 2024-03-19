const formLogin = document.getElementById("loginform");
formLogin.addEventListener("submit", function(e){
    e.preventDefault();
    const usrnm = document.getElementById("user");
    const psswrd = document.getElementById("passw");

    usrnm.classList.remove("invalid");
    psswrd.classList.remove("invalid");

    const regExUsr = /^[a-zA-Z0-9\.\_]{6,15}$/;
    const regExPsw = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    const adv = document.getElementById("alert");

    if(!regExUsr.test(usrnm.value)){
        adv.classList.add("showed");
        usrnm.classList.add("invalid");
        adv.textContent ="Username deve contenere almeno 6 caratteri alfanuerici può includere i caratteri . o _";
        return;
    }
    if(!regExPsw.test(psswrd.value)){
        adv.classList.add("showed");
        psswrd.classList.add("invalid");
        adv.textContent ="Password deve contenere almeno 8 caratteri di cui uno maiuscolo e un numero.";
        return;
    }else{
        adv.textContent ="";
        adv.classList.remove("showed");
        console.log("Formato dati valido... invio a php")

        let formdata = new FormData();

        formdata.append('user', usrnm.value);
        formdata.append('passw', psswrd.value);

        fetch("../php/login.php", {
            method: 'POST',
            body: formdata
        })

        .then(data => data.json())
        .then(data => {
            if(!data.error){
                console.log("Accesso consentito");
                adv.textContent = data.info;
                adv.classList.add("showed");
                window.location.replace("../php/homepage.php"); 
            }else{
                console.log("Prblemi nell'accesso");
                adv.textContent = data.info;
                adv.classList.add("showed");
                usrnm.classList.add("invalid");
                psswrd.classList.add("invalid");
                formLogin.reset();
            }
        })
    }


});

let eye = document.getElementById("eye").addEventListener("click", function(){
    let passInput = document.getElementById("passw");
    if(passInput.type == "password"){
        passInput.type="text";
    }else{
        passInput.type="password";
    }
});

