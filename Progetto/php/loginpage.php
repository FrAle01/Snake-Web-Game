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
        </head>
        <body>
            <script src="../js/loginpage.js"></script>
            <div class="container">
                <div class="sx">
                    <button id="info">info</button>
                </div>
                <div class="cx">
                    <h1 class="gioco">SNAKE</h1>
                    <div class="access">
                        <form>
                            <label for="user">
                                <input type="text" name="user" id="user" placeholder="Username" required>
                            </label>

                            <label for="passw">
                                <input type="password" name="passw" id="passw" placeholder="Password" required>
                            </label>

                            <button id="login">Accedi</button>
                        </form>
                    </div>
                    
                </div>
                <div class="dx">
                </div>
            </div>
        </body>



    </html>