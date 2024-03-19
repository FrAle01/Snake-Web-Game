
const xGrid = 24;
const yGrid = 25;

const minPointClassic = 5;       // in ogni modalità il punteggio per ogni elemento mangiato varia tra un max e un minimo 
const maxPointClassic = 15;

let type;           // modalità di gioco
let paused = false;  // variabile per pausa

let game = document.getElementById("game");
buildGrid(game);

let score = 0;
const scoreText = document.getElementById("score");
scoreText.textContent = "Score: "+ score;

let time = "00:00";
const elemTimer = document.getElementById("timer");
elemTimer.textContent = "Time: "+time;
let sec = 0;
let min = 0;
let intCount = 0;


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

    if(++intCount === 10){ // la pagina si aggiorna ogni 100 millisec, per un secondo ci vogliono 10 aggiornamenti
        sec++;
        min = Math.floor(sec/60);
        let remainingSec = sec%60;
        time = min.toString().padStart(2,'0')+":"+remainingSec.toString().padStart(2,'0');
        elemTimer.textContent = "Time: "+time;
        intCount = 0;
    }
    console.log("Min: "+min);
    console.log("Tot sec: "+sec);

    let head = {x: snake[0].x, 
                y: snake[0].y};
    
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

        case "classic":    // controllo che non ci sia scontro con i bordi (sia in classic che in obstacles)
            if(head.x > (xGrid-1) || head.x < 0 || head.y > (yGrid-1) || head.y < 0 ){
                    console.log("Border collided");
                endGame();
                return;
            }
            break;
    }


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

    // aggiungo un nuovo ostacolo ogni 10 punti fatti in modalità obstacles
    if(type === "obstacles"){
        if(score > (obsNum+1)*10){
            obsNum++;
            let matchFood = true;
            let newObs;
            while(matchFood){   // controllo che il nuovo ostacolo inserito non corrisponda alla posizione di cibo
                newObs = {
                    x: getRandom(1, (xGrid-2)), // gli ostacoli non toccheranno mai il bordo
                    y: getRandom(1, (yGrid-2))
                }
    
                // controllo di non aver posizionato l'ostacolo dove c'è del cibo
                if(newObs.x !== food.x && newObs.y !== food.y){
                    matchFood = false;
                }
            }
            obstacles.unshift(newObs);
        }
    }


    // controllo collisioni con il corpo
    for (let i = 0; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y){
                snake.forEach(elem => {
                });
            endGame();
            return;
        } 
    }

    // no collisioni
    snake.unshift(head);
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
    elemTimer.textContent = "Time: "+time;

    // disattiva e nascondi tasto start
    avvia.disabled=true;
    avvia.hidden=true;
    popupText.hidden=true;

    loop=setInterval(moveSnake, 100);

    // aggiornamento direzione serpente
    document.addEventListener("keydown", newDir);
    document.addEventListener("keydown", pause);

}

function endGame(){
    clearTimeout(loop);

    // impedisco la pausa
    document.removeEventListener("keydown", pause);
    paused = false;

    let oldScore = score;       // tenuto da parte per inserimento classicafica
    let endingTime = time;      // tenuto per inserimento db
    popupText.textContent = "Hai fatto "+oldScore+" punti";

    // reset score
    score = 0;

    // reset timer
    time = "00:00";
    sec = 0;
    min = 0;
    intCount = 0;

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

function pause(event){

    if(event.key == " "){    // premere lo spazio (o barra spaziatrice)

        console.log("Tasto premuto: "+event.key+" con codice "+event.keyCode);

        if(!paused){        // gioco non in pausa  
            
            // interrompo gioco
            clearTimeout(loop);     
            
            // disattivo l'event listener per la direzione
            document.removeEventListener("keydown",newDir); 

            popupText.textContent = "-- Premi SPACE per continuare --";
            popupText.hidden = false;

            paused = true;

        }else{              // gioco in pausa
            
            popupText.hidden = true;

            // riavvio gioco
            loop = setInterval(moveSnake, 100);

            // riattivo event per direzione
            document.addEventListener("keydown",newDir);

            paused = false;
        }
    }
}

function getGameMod(){
// get game mode
    let getparam = "?mode='classic'";   // uso classic come modalità di default
    fetch("../php/modeswitch.php"+getparam)
    .then(data=> data.json())
    .then(data => {
        if(!data.error){
            console.log("Modalità impostata "+ data.info);
            type = data.info;
        }else{
            console.log("Modalità non settata");
            console.log("Error: "+data.info);
        }
    })
}

getGameMod();
