<!DOCTYPE html>
    <html lang="it">
        <?php session_start()
        ?>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login</title>
            <link rel="stylesheet" href="../css/loginpage.css">
            <link rel="stylesheet" href="../css/mainstyle.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>
        <body>
            <div class="container">
                <div class="sx">
                </div>
                <div class="cx">
                    <a class="back" href="index.php"><i class= "fa fa-toggle-left"></i></a>
                    <h1 class="gioco">SNAKE</h1>
                    <div class="access">
                        <form id="loginform">
                            <div class="input-container">
                                <label for="user">
                                    <input type="text" name="user" id="user" placeholder="Username" required>
                                </label>
                            </div>
                            
                            <div class="input-container">
                                <label for="passw">
                                    <input type="password" name="passw" id="passw" placeholder="Password" required>
                                    <i class="fa fa-eye" id="eye"></i>
                                </label>
                            </div>
                            
                            <button id="login">Accedi</button>
                        </form>
                        <div id="alert">
                        </div>
                    </div>
                    
                </div>
                <div class="dx">
                    </div>
                </div>
                <script src="../js/loginpage.js"></script>
        </body>



    </html>