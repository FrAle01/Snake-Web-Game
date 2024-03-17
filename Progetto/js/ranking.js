const cButton = document.getElementById("classic");
const wButton = document.getElementById("warped");
const oButton = document.getElementById("obstacles");

function showClassic(){
    showRank("classic")
}

function showWarped(){
    showRank("warped")

}
function showObstacles(){
    showRank("classic")
}

cButton.addEventListener("click", showClassic);
//wButton.addEventListener("click", showWarped);
//oButton.addEventListener("click", showObstacles);

function showRank(mode){
}