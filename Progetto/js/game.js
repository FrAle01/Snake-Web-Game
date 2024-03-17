
const xGrid = 24;
const yGrid = 25;

const minPointClassic = 5;       // in ogni modalità il punteggio per ogni elemento mangiato varia tra un max e un minimo 
const maxPointClassic = 15;

let type = "classic";   // modalità di gioco

let game = document.getElementById("game");
buildGrid(game);

let score = 0;
let scoreText = document.getElementById("score");
scoreText.textContent = "Score: "+ score;

function getRandom(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

let snake = [{      // inizializzo il serpente con tre elementi
    x: (xGrid/4),
    y: ((yGrid+1)/2)
}, {
    x: ((xGrid/4) -1),
    y: ((yGrid+1)/2)
},{
    x: ((xGrid/4) -2),
    y: ((yGrid+1)/2)
}];

let food = {    // posiziono il primo elemento di cibo
    x: getRandom(0,xGrid),
    y: getRandom(0,yGrid),
    points: getRandom(minPointClassic,maxPointClassic)
};

let obstacles = []; // dichiarazione var per ostacoli
let obsNum = 0;

let dir = "right";  // inizializzo la direzione del serpente
let loop;       // variabile per il timer del gioco
let keyevent;   // variabile per event listener keydown

console.log("Snake head: "+snake[0].x +", "+snake[0].y);
console.log("Food loc: "+food.x +", "+food.y+" con punti: "+food.points);
// -- fine inizializzazione

//  costruisco la griglia per il gioco
function buildGrid(t){
    for (let i = 0; i < yGrid; i++) {
        let r = document.createElement("tr");
        for (let j = 0; j < xGrid; j++) {
            let cell = document.createElement("td");
            cell.id=j+"-"+i;
            r.appendChild(cell);
            
        }
        t.appendChild(r);
        
    }
}

// inserisco azione su start button
const avvia = document.getElementById("avvia");
const popup = document.getElementById("popup");
const popupText = document.querySelector("#popup p");
avvia.addEventListener("click", start);


function moveSnake(){
        console.log(dir);
        console.log("SnFood loc: "+food.x +", "+food.y+" con punti: "+food.points);

    let head = {x: snake[0].x, 
                y: snake[0].y};
        console.log("head x,y before: "+head.x+", "+head.y);
    
    // aggiorno la testa del serpente
    switch (dir) {
        case "right":
            head.x += 1;
            break;
        case "left":
            head.x -= 1;
            break;
        case "up":
            head.y -= 1;
            break;
        case "down":
            head.y += 1;
            break;
    }

    console.log("head x,y after: "+head.x+", "+head.y);


    // controllo che abbia mangiato
    if(head.x === food.x && head.y === food.y){
        score += food.points;   // aggiorno punteggio
        scoreText.textContent = "Score: "+ score;
        // creo nuovo cibo
        food.x = getRandom(0,(xGrid-1));
        food.y = getRandom(0,(yGrid-1));
        food.points = getRandom(minPointClassic,maxPointClassic);
            console.log("Food eaten");
    }else{
        snake.pop();  // elimino la coda del serpente
            console.log("snake popped");
    }

    switch (type) {
        case "warped":      // quando il serpente inconta il bordo sbuca dall'altra parte
            if(head.x > (xGrid-1) ){
                head.x = 0;
            }else if(head.x < 0){
                head.x = xGrid-1;
            }else if(head.y > (yGrid-1) ){
                head.y = 0;
            }else if(head.y < 0){
                head.y = yGrid-1;
            }
            break;

        case "obstacles":
            let obsEncountered = false;
            obstacles.forEach(obs => {
                if(head.x === obs.x && head.y === obs.y){
                        console.log("Obstacle collided");
                    obsEncountered = true;
                    endGame();
                    return;
                }
            });
            if(obsEncountered){
                return;
            }
            if(score > (obsNum+1)*10){  // ogni 10 punti aggiungo un ostacolo
                obsNum++;
                let newObs = {
                    x: getRandom(1, (xGrid-2)), // gli ostacoli non toccheranno mai il bordo
                    y: getRandom(1, (yGrid-2))
                }
                obstacles.unshift(newObs);
            }

        case "classic":    // controllo che non ci sia scontro con i bordi (sia in classic che in obstacles)
            if(head.x > (xGrid-1) || head.x < 0 || head.y > (yGrid-1) || head.y < 0 ){
                    console.log("Border collided");
                endGame();
                return;
            }
            break;
    }

    

    // controllo collisioni con il corpo
    for (let i = 0; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y){
                snake.forEach(elem => {
                    console.log(elem.x+", "+elem.y+" - ")
                });
            endGame();
            return;
        } 
    }

    // no collisioni
    snake.unshift(head);
        console.log("Draw here");
    drawGame(); // ridisegno la griglia

}


function drawGame(){
    for (let i = 0; i < yGrid; i++) {
        for (let j = 0; j < xGrid; j++) {
            let idBody = j+"-"+i
            let cell = document.getElementById(idBody);
            cell.classList.remove("snake");    
            cell.classList.remove("food");    
            cell.classList.remove("obs");    
        }        
    }

    snake.forEach(bodyPart => {
        let idBody = bodyPart.x+"-"+bodyPart.y;
        const cell = document.getElementById(idBody);
        cell.classList.add("snake");
    });

    let idBody=food.x+"-"+food.y;
    const foodCell = document.getElementById(idBody);
    foodCell.classList.add("food");

    obstacles.forEach(obs => {
        let idBody  = obs.x+"-"+obs.y;
        const cell = document.getElementById(idBody);
        cell.classList.add ("obs")
    }

    );
    
}


// avvio gioco
function start(){
    scoreText.textContent = "Score: "+ score;

    // disattiva e nascondi tasto start
    avvia.disabled=true;
    avvia.hidden=true;
    popupText.hidden=true;

    loop=setInterval(moveSnake, 100);

    // aggiornamento direzione serpente
    keyevent= document.addEventListener("keydown",newDir);

}

function endGame(){
    clearTimeout(loop);

    let oldScore = score;       // tenuto da parte per inserimento classicafica
    popupText.textContent = "Hai fatto "+oldScore+" punti";

    // reset score
    score = 0;

    // reset serpente
    snake = [{      
        x: (xGrid/4),
        y: ((yGrid+1)/2),
    }, {
        x: ((xGrid/4) -1),
        y: ((yGrid+1)/2)
    },{
        x: ((xGrid/4) -2),
        y: ((yGrid+1)/2)
    }];

    // reset cibo
    food = {    // posiziono il primo elemento di cibo
        x: getRandom(0,(xGrid-1)),
        y: getRandom(0,(yGrid-1)),
        points: getRandom(minPointClassic,maxPointClassic)
    };

    // reset dir
    document.removeEventListener("keydown",newDir); // disattivo l'event listener in modo che a ogni restart inizi sempre verso destra
    dir = "right";

    //reset obstacles
    obstacles = [];
    obsNum = 0;

    // send data to php
    let gameForm = new FormData();
    gameForm.append('score', oldScore);
    gameForm.append('mode', type);

    fetch("../php/ranking.php",{
        method: 'POST',
        body: gameForm
    })
    .then(data => data.json())
    .then(data => {
        if(!data.error){
            console.log("Score partita inserito -- "+data.info);
        }else{
            console.log("Problemi con l'inserimento partita");
            console.log("Error: "+data.info);
        }
    })

    avvia.textContent="Restart";
    avvia.hidden=false;
    popupText.hidden=false;
    avvia.disabled=false;


}

function newDir(event){
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
}

