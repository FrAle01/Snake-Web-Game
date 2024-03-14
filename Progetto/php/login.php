<?php
    require("dbconnect.php");
    session_start();

    $curr_pdo = (new Database)->getConnetion();

    if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $regExUsr = '/^[a-zA-Z0-9\.\_]{6,15}$/';
        $regExPsw = '/^(?=.*[A-Z])(?=.*\d).{8,}$/';
        
        if(!isset($_POST['passw']) || !isset($_POST['user'])){
            echo json_encode(array('error'=> true, 'info' => 'Problemi nella comunicazione dati al server'));
            return;
        }
        if(!preg_match($regExUsr, $_POST['user']) || !preg_match($regExPsw, $_POST['passw'])){
            echo json_encode(array('error'=> true, 'info'=> 'Formato input non valido'));
            return;
        }

        $user = $_POST['user'];
        $password = $_POST['passw'];

        $sql = "SELECT *
                FROM user
                WHERE username = :user";

        $stmt = $curr_pdo->prepare($sql);
        $stmt->bindParam(":user", $user);
        $stmt->execute();

        $row = $stmt->fetch();
        if($row != null && password_verify($password, $row["password"])){
            $_SESSION["user"] = $user;
            echo json_encode(array("error"=> false, "info"=> "Accesso eseguito"));
        }else{
            echo json_encode(array("error"=> true, "info"=> "Credenziali non valide"));
        }
        return;


    }
