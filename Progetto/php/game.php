<!DOCTYPE html>
    <html lang="it">
        <?php session_start()
        ?>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Game</title>
            <link rel="stylesheet" href="../css/game.css">
            <link rel="stylesheet" href="../css/mainstyle.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>
        <body>
            <div class="container">
                <div class="sx">
                    
                </div>
                <div class="cx">
                    <a class="back" href="homepage.php"><i class= "fa fa-toggle-left"></i></a>
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