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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>
        <body>
            <div class="container">
                <div class="sx">
                    
                </div>
                <div class="cx">
                    <button id="logout">Logout</button>
                    <h1 class="gioco">SNAKE</h1>
                    <div class= "inner-container">
                        <button id="classic">CLASSIC</a><i class="fa fa-gamepad icon"></i>
                    </div>
                    <div class= "inner-container">
                        <button id="warped">WARPED</button><i class="fa fa-circle-o-notch icon"></i>
                    </div>
                    <div class= "inner-container">
                        <button id="obstacles">OBSTACLES</button><i class="fa fa-cubes icon"></i>
                    </div>
                    
                </div>
                <div class="dx">

                </div>
            </div>
            
                <script src="../js/homepage.js"></script>
            
        </body>



    </html>