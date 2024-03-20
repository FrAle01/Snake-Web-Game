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


                    <div class="cx-container">

                        <h1 class="gioco">SNAKE</h1>

                        <div class="game-container">

                            <table id="game"></table>

                            <div id="popup">
                                <p></p>
                                <button id="avvia">Start</button>
                            </div>

                        </div>

                        <div class="score-container">
                            <p id="score"></p>
                            <p id="timer"></p>
                        </div>

                    </div>


                </div>

                <div class="dx">


                    <div class="account-container">
                        <?php
                            if (isset($_SESSION['user'])) {
                                echo    '<div id="account">
                                            <i class="fa fa-user-circle-o"></i>
                                            <p id="user">'.$_SESSION['user'].'</p>
                                            <p id ="setted">'.$_SESSION['mode'].'</p>
                                        </div>';
                            }else{
                                echo    '<div id="account">
                                            <i class="fa fa-user-secret"></i>
                                            <p id="user">Ospite</p>';
                                
                                if (isset($_SESSION['mode'])) {
                                    echo    '<p id="setted">'.$_SESSION['mode'].'</p>
                                        </div>';
                                }else{
                                    echo    '<p id="setted">classic</p>
                                        </div>';
                                }
                                
                            }
                        ?>
                    </div> 


                </div>

            </div>
            
            <script src="../js/game.js"></script>
        </body>



    </html>