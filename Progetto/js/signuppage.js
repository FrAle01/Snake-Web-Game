const formSignup = document.getElementById("signupform");
formSignup.addEventListener("submit", function(e){
    e.preventDefault();
    const nome = document.getElementById("nome");
    const cogn = document.getElementById("cognome");
    const usrnm = document.getElementById("user");
    const mail = document.getElementById("mail");
    const psswrd = document.getElementById("passw");

    const regExUsr = /^[a-zA-Z0-9\.\_]{6,15}$/;
    const regExPsw = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const regExMail = /^(.+)@([^\.].*)\.([a-z]{2,})$/;

    const adv = document.getElementById("alert");

    if(!nome.checkValidity() ){
        adv.classList.add("showed");
        adv.textContent = "Il nome deve iniziare con  lettera maiuscola";
        return;
    }
    if(!cogn.checkValidity() ){
        adv.classList.add("showed");
        adv.textContent ="Il cognome deve iniziare con  lettera maiuscola";
        return;
    }
    if(!regExUsr.test(usrnm.value)){
        adv.classList.add("showed");
        adv.textContent ="Username deve contenere almeno 6 caratteri alfanuerici può includere i caratteri . o _";
        return;
    }
    if(!regExMail.test(mail.value)){
        adv.classList.add("showed");
        adv.textContent ="Formato mail non valido";
        return;
    }
    if(!regExPsw.test(psswrd.value)){
        adv.classList.add("showed");
        adv.textContent ="Password deve contenere almeno 8 caratteri di cui uno maiuscolo e un numero.";
        return;
    }else{
        adv.textContent ="";
        adv.classList.remove("showed");
        console.log("Formato dati valido... invio a php")
        
        const correctForm = document.getElementById("signupform");
        let formdata = new FormData();

        console.log(nome.value);
        formdata.append('nome', nome.value);
        console.log(cogn.value);
        formdata.append('cognome', cogn.value);
        console.log(usrnm.value);
        formdata.append('user', usrnm.value);
        console.log(mail.value);
        formdata.append('mail', mail.value);
        console.log(psswrd.value);
        formdata.append('passw', psswrd.value);

        fetch("../php/signup.php", {
            method: 'POST',
            body: formdata
        })
        
        .then(data => data.json())
        .then(data => {
            if(!data.error){
                console.log("Todo bien");
                adv.textContent = data.info;
                adv.classList.add("showed");
                window.location.replace("../php/homepage.php"); 
            }else{
                console.log("No todo bien");
                adv.textContent = data.info;
                adv.classList.add("showed");
                correctForm.reset();
            }
        });
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