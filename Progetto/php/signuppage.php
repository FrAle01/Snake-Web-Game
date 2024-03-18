<!DOCTYPE html>
    <html lang="it">
        <?php session_start()
        ?>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SignUp</title>
            <link rel="stylesheet" href="../css/signuppage.css">
            <link rel="stylesheet" href="../css/mainstyle.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>
        <body>
            <div class="container">
                <div class="sx">
                </div>
                <div class="cx">
                    <div class="inner-container">
                        <a class="back" href="index.php"><i class= "fa fa-toggle-left"></i>BACK</a>
                    </div>
                    <h1 class="gioco">SNAKE</h1>
                    <div class="dati">
                        <form id="signupform">

                            <div class="input-container">
                                <label for="nome">
                                    <input type="text" name="nome" id="nome" pattern="^[A-Z]+[a-zA-Z]*$" placeholder="Nome" required>
                                </label>
                            </div>

                            <div class="input-container">
                                <label for="cognome">
                                    <input type="text" name="cognome" id="cognome" pattern="^[A-Z]+[a-zA-Z]*$" placeholder="Cognome" required>
                                </label>
                            </div>

                            <div class="input-container">
                                <label for="user">
                                    <input type="text" name="user" id="user" placeholder="Username" required>
                                </label>
                            </div>

                            <div class="input-container">
                                <label for="mail">
                                    <input type="email" name="mail" id="mail" placeholder="EMail" required>
                                </label>
                            </div>

                            <div class="input-container">  
                                <label for="passw">
                                    <input type="password" name="passw" id="passw" placeholder="Password" required>
                                    <i class="fa fa-eye" id="eye"></i>
                                </label>
                            </div>

                            <button id="signup">Registrati</button>
                        </form>
                        <div id="alert">
                            </div>
                        </div>
                    </div>
                    <div class="dx">
                        </div>
                    </div>
                    <script src="../js/signuppage.js"></script>
                </body>
                
                
                
                </html>