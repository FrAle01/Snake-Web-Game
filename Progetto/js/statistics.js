const cIcon = document.getElementById("cIcon");
const wIcon = document.getElementById("wIcon");
const oIcon = document.getElementById("oIcon");


function showStatClassic(){
    showStat('classic');

    // nascondo gli altri paragrafi in caso fossero aperti
    const pW= document.getElementById("wText");
    const pO= document.getElementById("oText");
    pW.hidden = true;
    pO.hidden = true;

}
function showStatWarped(){
    showStat('warped');

    // nascondo gli altri paragrafi in caso fossero aperti
    const pC = document.getElementById("cText");
    const pO= document.getElementById("oText");
    pC.hidden = true;
    pO.hidden = true;

}
function showStatObstacles(){
    showStat('obstacles');

    // nascondo gli altri paragrafi in caso fossero aperti
    const pC = document.getElementById("cText");
    const pW= document.getElementById("wText");
    pC.hidden = true;
    pW.hidden = true;

}

cIcon.addEventListener("click", showStatClassic);
wIcon.addEventListener("click", showStatWarped);
oIcon.addEventListener("click", showStatObstacles);

function showStat(mode){
    let textSelector;
    switch (mode) {
        case 'classic':
            textSelector = "cText";
            break;
        case 'warped':
            textSelector = "wText";
            break;
        case 'obstacles':
            textSelector = "oText";
            break;
    
    }

    

    let getStats = "?type=stats&mode="+mode;
    fetch("../php/ranking.php"+getStats)
    .then(data => data.json())
    .then(data => {
        if(!data.error){
            const textElem = document.getElementById(textSelector);
            textElem.innerHTML = data.info;
            if(textElem.hidden){    // se elemento nascosto lo mostra
                textElem.classList.remove("close");
                textElem.classList.add("open");
                textElem.hidden = false;

            }else{      // altrimenti inverte la situazione (se 'nascosto', non con hidden, lo mostra o viceversa)
                textElem.classList.toggle("open");
                textElem.classList.toggle("close");
            }

        }else{
            console.log(data.info);
        }
    });

}


