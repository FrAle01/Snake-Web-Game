<!DOCTYPE html>
    <html lang="it">
        <?php session_start()
        ?>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SignIn</title>
            <link rel="stylesheet" href="../css/signinpage.css">
            <link rel="stylesheet" href="../css/mainstyle.css">
        </head>
        <body>
            <script src="../js/signinpage.js"></script>
            <div class="container">
                <div class="sx">
                    <button id="info">info</button>
                </div>
                <div class="cx">
                    <h1 class="gioco">SNAKE</h1>
                    <div class="dati">
                        <form>
                            <label for="nome">
                            <input type="text" name="nome" id="nome" placeholder="Nome" required>
                            </label>

                            <label for="cognome">
                            <input type="text" name="cognome" id="cognome" placeholder="Cognome" required>
                            </label>

                            <label for="user">
                            <input type="text" name="user" id="user" placeholder="Username" required>
                            </label>

                            <label for="mail">
                            <input type="email" name="mail" id="mail" placeholder="EMail" required>
                            </label>

                            <label for="passw">
                            <input type="password" name="passw" id="passw" placeholder="Password" required>
                            </label>

                            <button id="signin">Registra</button>


                        </form>
                    </div>
                </div>
                <div class="dx">
                </div>
            </div>
        </body>



    </html>