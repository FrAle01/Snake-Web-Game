<!DOCTYPE html>
    <html lang="it">
        <?php session_start()
        ?>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Snake</title>
            <link rel="stylesheet" href="../css/index.css">
            <link rel="stylesheet" href="../css/mainstyle.css">
            <link rel="stylesheet" href="../css/ranking.css">
        </head>
        <body>
            <div class="container">
                <div class="sx">
                    <div id="modesel">
                        <button id="classic">Classic</button>
                        <button id="warped">Warped</button>
                        <button id="obstacles">Obstacles</button>
                    </div>
                    <div id="classifica">
                        <table id="hall">
                        </table>
                    </div>
                </div>
                <div class="cx">
                    <h1 class="gioco">SNAKE</h1>
                    <div class="buttons">
                        <a id="login" href="loginpage.php">Accedi</a>
                        <a id="signup" href="signuppage.php">Registrati</a>
                    </div>
                </div>
                <div class="dx">
                    <button class="info">How to play</button>
                </div>
            </div>
            <script src="../js/index.js"></script>
            <script src="../js/ranking.js"></script>
        </body>



    </html>