const cInfo = document.getElementById("cInfo");
const wInfo = document.getElementById("wInfo");
const oInfo = document.getElementById("oInfo");


function showDescClassic(){
    showDesc('classic');

    // nascondo gli altri paragrafi in caso fossero aperti
    const pW= document.getElementById("wText");
    const pO= document.getElementById("oText");
    pW.hidden = true;
    pO.hidden = true;

}
function showDescWarped(){
    showDesc('warped');

    // nascondo gli altri paragrafi in caso fossero aperti
    const pC = document.getElementById("cText");
    const pO= document.getElementById("oText");
    pC.hidden = true;
    pO.hidden = true;

}
function showDescObstacles(){
    showDesc('obstacles');

    // nascondo gli altri paragrafi in caso fossero aperti
    const pC = document.getElementById("cText");
    const pW= document.getElementById("wText");
    pC.hidden = true;
    pW.hidden = true;

}

cInfo.addEventListener("click", showDescClassic);
wInfo.addEventListener("click", showDescWarped);
oInfo.addEventListener("click", showDescObstacles);

function showDesc(mode){
    let textSelector;
    let description;
    switch (mode) {
        case 'classic':
            textSelector = "cText";
            description = 'Snake in modalità classica:<br />prendi il cibo <i class="fa fa-circle" style="font-size:0.9rem;color:red"></i><br />attenzione ai bordi';
            break;
        case 'warped':
            textSelector = "wText";
            description = 'Snake in modalità warped:<br />prendi il cibo <i class="fa fa-circle" style="font-size:0.9rem;color:red"></i><br />i bordi non sono un problema<br />attenzione alla coda';
            break;
        case 'obstacles':
            description = 'Snake in modalità obstacles:<br />prendi il cibo <i class="fa fa-circle" style="font-size:0.9rem;color:red"></i><br />attenzione ai bordi<br />non sbattere contro gli ostacoli <i class="fa fa-circle" style="font-size:0.9rem;color:black"></i>';
            textSelector = "oText";
            break;
    
    }

    const textElem = document.getElementById(textSelector);
    textElem.innerHTML = description;

    if(textElem.hidden){    // se elemento nascosto lo mostra
        textElem.classList.remove("close");
        textElem.classList.add("open");
        textElem.classList.add("desc");
        textElem.hidden = false

    }else{      // altrimenti inverte la situazione (se 'nascosto', non con hidden, lo mostra o viceversa)
        if(!textElem.classList.contains("stat")){    // non contiene statistiche
            
            textElem.classList.toggle("open");
            textElem.classList.toggle("close");
            textElem.classList.toggle("desc");

        }else{

            textElem.classList.toggle("stat");
            textElem.classList.toggle("desc");

        }
    }

}


