const xCanvas = 400;
const yCanvas = 425;

const gridSize = 17;
const xGrid = xCanvas/gridSize; // 408/17 == 24 celle x per griglia
const yGrid = yCanvas/gridSize; // 425/17 == 25 celle y per griglia

const minPoinClassic = 5;       // in ogni modalità il punteggio per ogni elemento mangiato varia tra un max e un minimo 
const maxPointClassic = 15;     

let canvas = document.getElementById("classic");
let contest = canvas.getContext('2d');

let score = 0;
let scoreText = document.getElementById("score");
scoreText.textContent = "Score: "+ score;

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

let snake = [{      // inizializzo il serpente con tre elementi
    x: gridSize*(xGrid/4),
    y: gridSize*((yGrid+1)/2),
}, {
    x: gridSize*((xGrid/4) -1),
    y: gridSize*((yGrid+1)/2)
},{
    x: gridSize*((xGrid/4) -2),
    y: gridSize*((yGrid+1)/2)
}];

let food = {    // posiziono il primo elemento di cibo
    x: gridSize*getRandom(0,xGrid),
    y: gridSize*getRandom(0,yGrid),
    points: getRandom(minPoinClassic,maxPointClassic)
};

let dir = "right";  // inizializzo la direzione del serpente
let loop;       // variabile per il timer del gioco
// -- fine inizializzazione

// inserire azione su start button
const avvia = document.getElementById("avvia");
const popup = document.getElementById("popup");
const popupText = document.querySelector("#popup p");
avvia.addEventListener("click", start);


function moveSnake(){
    console.log(dir);
}

// avvio gioco
function start(){
    // disattiva e nascondi tasto start
    avvia.disabled=true;
    avvia.hidden=true;
    popupText.hidden=true;

    loop=setInterval(moveSnake, 100);

    // aggiornamento direzione serpente
    document.addEventListener("keydown",function(event){
        switch (event.key) {
            case "ArrowUp":
            case 'W':
            case 'w':
                if(dir !== "down"){ // non posso cambiare direzione con quella opposta quella corrente
                    dir = "up"
                } 
                break;
    
            case "ArrowDown":
            case 'S':
            case 's':
                if(dir !== "up"){
                    dir = "down"
                } 
                break;
            
            case "ArrowLeft":
            case 'A':
            case 'a':
                if(dir !== "right"){
                    dir = "left"
                } 
                break;
    
            case "ArrowRight":
            case 'D':
            case 'd':
                if(dir !== "left"){
                    dir = "right"
                } 
                break;
        
    
        }

    });

}

function endGame(){
    clearTimeout(loop);

    let oldScore = 50;       // tenuto da parte per inserimento classicafica
    popupText.textContent = "Hai fatto "+oldScore+" punti";
    score = 0;

    // reset serpente
    let snake = [{      
        x: gridSize*(xGrid/4),
        y: gridSize*((yGrid+1)/2),
    }, {
        x: gridSize*((xGrid/4) -1),
        y: gridSize*((yGrid+1)/2)
    },{
        x: gridSize*((xGrid/4) -2),
        y: gridSize*((yGrid+1)/2)
    }];

    // reset cibo
    let food = {    // posiziono il primo elemento di cibo
        x: gridSize*getRandom(0,xGrid),
        y: gridSize*getRandom(0,yGrid),
        points: getRandom(minPoinClassic,maxPointClassic)
    };

    avvia.textContent="Restart";
    avvia.hidden=false;
    popupText.hidden=false;
    avvia.disabled=false;


}

