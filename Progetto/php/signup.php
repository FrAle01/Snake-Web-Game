<?php
    require("dbconnect.php");
    //require("databaseconst");
    session_start();

    $curr_pdo = (new Database)->getConnetion();
    
    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $regExUsr = '/^[a-zA-Z0-9\.\_]{6,15}$/';
        $regExPsw = '/^(?=.*[A-Z])(?=.*\d).{8,}$/';
        $regExMail = '/^(.+)@([^\.].*)\.([a-z]{2,})$/'; 

        // controllo validita e presenza di username e mail
        if(!isset($_POST['mail']) || !isset($_POST['user']) || !preg_match($regExMail, $_POST['mail']) || !preg_match($regExUsr, $_POST['user'])){    
            echo json_encode(array('error'=> true, 'info'=> 'Username o E-mail non valide'));
            return;
        }
        $mail = $_POST['mail'];
        $usrnm = $_POST['user'];

        // controllo validità password
        if(!isset($_POST['passw']) || !preg_match($regExPsw, $_POST['passw'])){
            echo json_encode(array('error'=> true, 'info'=> 'Formato password non valido'));
            return;
        }
        $psw = $_POST['passw'];

        // controllo nome e cognome
        if(!isset($_POST['nome']) || !isset($_POST['cognome'])){
            echo json_encode(array('error'=> true, 'info' => 'Nome o Cognome non inseriti'));
            return;
        }
        $name = $_POST['nome'];
        $surname = $_POST['cognome'];

        //$curr_pdo = new PDO('DBCONNECTION','USER','PASSWORD');
        //$curr_pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // controllo che non vi sia già un utente registrato con stesso username o mail
        $sql = "SELECT * 
                FROM user u
                WHERE u.username = :user or u.email = :mail";
        
        $stmt = $curr_pdo->prepare($sql);

        $stmt->bindParam(":user", $usrnm);
        $stmt->bindParam(":mail", $mail);
        $stmt->execute();

        $rows = $stmt->fetch();
        if($rows != null){ // mail o username già presente
            echo json_encode(array("error"=> true,"info"=> "Username già in uso"));
            return;

        }else{ // registro il nuovo utente
            $hashed_psw = password_hash($psw, PASSWORD_BCRYPT);
            $sql = "INSERT INTO user(nome, cognome, username, password, email) 
                    VALUES (:nome, :cognome, :user, :passw, :mail)";

            $stmt = $curr_pdo->prepare($sql);
            $stmt->bindParam(":nome", $name);
            $stmt->bindParam(":cognome", $surname);
            $stmt->bindParam(":user", $usrnm);
            $stmt->bindParam(":passw", $hashed_psw);
            $stmt->bindParam(":mail", $mail);

            $stmt->execute();

            if($stmt->rowCount() > 0){
                $_SESSION["user"] = $usrnm;
                echo json_encode(array("error"=> false, "info"=> "Tutto bene quel che finisce bene"));
            }else{
                echo json_encode(array("error"=> true, "info"=> "Errore nell'inserimento dei dati"));
            }
            return;
            
        



        }
    }

