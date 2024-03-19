const cButton = document.getElementById("classic");
const wButton = document.getElementById("warped");
const oButton = document.getElementById("obstacles");

const logoutB = document.getElementById("logout");

function playClassic(){
    playGame("classic");
}

function playWarped(){
    playGame("warped");

}
function playObstacles(){
    playGame("obstacles");
}

cButton.addEventListener("click", playClassic);
wButton.addEventListener("click", playWarped);
oButton.addEventListener("click", playObstacles);

function playGame(mode){
    let modeForm = new FormData();
    modeForm.append("mode", mode);
    fetch("../php/modeswitch.php",{
        method: 'POST',
        body: modeForm
    })

    .then(data => data.json())
    .then(data => {
        if(!data.error){
            console.log("Modalità settata");
            console.log(data.info);
            window.location.replace("../php/game.php");

        }else{
            console.log("Problemi con setting partita");
            console.log("Error: "+data.info);
        }
    })
}

function logout(){

    fetch("../php/logout.php", {
        method: 'POST'
    })
    .then(data => data.json())
    .then(data => {
        if(!data.error){
            console.log(data.info);
            window.location.replace("../php/index.php");
        }else{
            console.log(data.info);
        }
    })

}

if(logoutB != null){
    logoutB.addEventListener("click", logout);
}