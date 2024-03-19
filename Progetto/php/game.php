<!DOCTYPE html>
    <html lang="it">
        <?php session_start()
        ?>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Game</title>
            <link rel="stylesheet" href="../css/mainstyle.css">
            <link rel="stylesheet" href="../css/game.css">
        </head>
        <body>
            <div class="container">
                <div class="sx">
                    <div>
                        <a class="back home" href="homepage.php"><i class= "fa fa-home"></i> Home</a>
                    </div>
                </div>
                <div class="cx">
                    <h1 class="gioco">SNAKE</h1>
                    <div class="inner-container">
                        <table id="game"></table>
                        <div id="popup">
                            <p></p>
                            <button id="avvia">Start</button>
                        </div>
                    </div>
                    <div class="inner-container">
                        <p id="score"></p>
                        <p id="timer"></p>
                    </div>
                    
                </div>
                <div class="dx">

                </div>
            </div>
            <script src="../js/game.js"></script>
        </body>



    </html>