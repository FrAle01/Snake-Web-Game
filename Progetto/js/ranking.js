const cButton = document.getElementById("classic");
const wButton = document.getElementById("warped");
const oButton = document.getElementById("obstacles");

const refreshButton = document.getElementById("refresh");

function showClassic(){
    showRank("classic");

    // imposto la modalità come selezionata e rimuovo la classe alle altre
    wButton.classList.remove("selected");
    oButton.classList.remove("selected");
    cButton.classList.add("selected");


}

function showWarped(){
    showRank("warped");
    cButton.classList.remove("selected");
    oButton.classList.remove("selected");
    wButton.classList.add("selected");

}
function showObstacles(){
    showRank("obstacles");
    cButton.classList.remove("selected");
    wButton.classList.remove("selected");
    oButton.classList.add("selected");
}

cButton.addEventListener("click", showClassic);
wButton.addEventListener("click", showWarped);
oButton.addEventListener("click", showObstacles);

function showRank(mode){
    const tablebody = document.getElementById("ranking");

    let getquery = '?type=hall&mode='+mode;
    fetch("../php/ranking.php"+getquery)
    .then(data => data.json())
    .then(data => {
        if(!data.error){
            console.log("Rank creato");
            tablebody.innerHTML = data.info;
        }else{
            console.log(data.info);
        }
    })

}

refreshButton.addEventListener("click", refresh);

function refresh(){
    let modetorefresh = document.querySelector(".selected");

    if(modetorefresh === null){
        console.log("Nessuna modalità selezionata per la classifica");
        return;
    }

    let spin = document.querySelector("#refresh i");
    // giro lo spinner
    spin.classList.toggle("loading");

    setTimeout(() => {
        spin.classList.toggle("loading");
    }, 500);

    showRank(modetorefresh.id);
}