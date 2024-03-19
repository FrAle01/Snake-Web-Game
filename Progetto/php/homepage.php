<!DOCTYPE html>
    <html lang="it">
        <?php session_start()
        ?>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
            <link rel="stylesheet" href="../css/homepage.css">
            <link rel="stylesheet" href="../css/mainstyle.css">
        </head>
        <body>
            <div class="container">
                <div class="sx">
                    
                    
                </div>
                <div class="cx">
                    <div>
                        <?php

                            if (isset($_SESSION["user"])) {
                                echo '<button class="back" id="logout"><i class= "fa fa-sign-out"></i> Logout</button>';
                            }else{
                                echo '<a class="back" href="signuppage.php"><i class= "fa fa-chevron-circle-left"></i> Registrati</a>';
                            }

                        ?>
                    </div>
                    <h1 class="gioco">SNAKE</h1>
                    <div class= "inner-container">
                        <button id="classic">CLASSIC</button><i class="fa fa-gamepad icon" id="cIcon"></i>
                        <p class = "stat" id = "cText" hidden = true></p>
                    </div>
                    <div class= "inner-container">
                        <button id="warped">WARPED</button><i class="fa fa-spinner icon" id="wIcon"></i>
                        <p class = "stat" id = "wText" hidden = true></p>
                    </div>
                    <div class= "inner-container">
                        <button id="obstacles">OBSTACLES</button><i class="fa fa-cube icon" id="oIcon"></i>
                        <p class = "stat" id = "oText" hidden = true></p>
                    </div>
                    
                </div>
                <div class="dx">

                </div>
            </div>
            
                <script src="../js/homepage.js"></script>
                <script src="../js/statistics.js"></script>
            
        </body>



    </html>