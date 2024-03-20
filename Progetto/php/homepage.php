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


                    <div>
                        <?php

                            if (isset($_SESSION["user"])) {
                                echo '<button class="back" id="logout"><i class= "fa fa-sign-out"></i> Logout</button>';
                            }else{
                                echo '<a class="back" href="signuppage.php"><i class= "fa fa-chevron-circle-left"></i> Registrati</a>';
                            }

                        ?>
                    </div>


                </div>

                <div class="cx">


                    <h1 class="gioco">SNAKE</h1>

                    <div class= "inner-container">
                        <button id="classic">CLASSIC</button><i class="fa fa-gamepad icon" id="cIcon"></i><i class="fa fa-info-circle iicon" id="cInfo"></i>
                        <p class = "stat" id = "cText" hidden></p>
                    </div>

                    <div class= "inner-container">
                        <button id="warped">WARPED</button><i class="fa fa-spinner icon" id="wIcon"></i><i class="fa fa-info-circle iicon" id="wInfo"></i>
                        <p class = "stat" id = "wText" hidden></p>
                    </div>

                    <div class= "inner-container">
                        <button id="obstacles">OBSTACLES</button><i class="fa fa-cube icon" id="oIcon"></i><i class="fa fa-info-circle iicon" id="oInfo"></i>
                        <p class = "stat" id = "oText" hidden></p>
                    </div>
                    
            
                </div>

                <div class="dx">


                    <div class="account-container">
                        <?php
                            if (isset($_SESSION['user'])) {
                                echo    '<div id="account">
                                            <i class="fa fa-user-circle-o"></i>
                                            <p id="user">'.$_SESSION['user'].'</p>
                                        </div>';
                            }else{
                                echo    '<div id="account">
                                            <i class="fa fa-user-secret"></i>
                                            <p id="user">Ospite</p>
                                        </div>';
                            }
                        ?>
                    </div>  
                    
                    
                </div>
            </div>
            
                <script src="../js/homepage.js"></script>
                <script src="../js/statistics.js"></script>
                <script src="../js/descriptor.js"></script>
        </body>



    </html>