<?php
    require("dbconnect.php");
    session_start();

    $curr_pdo = (new Database)->getConnetion();

    if ($_SERVER['REQUEST_METHOD']=='POST') {
        if (!isset($_POST['score']) || !isset($_POST['mode']) || !isset($_SESSION['user'])) {
            echo json_encode(array('error'=> true, 'info'));
            return;
        }

        $usr = $_SESSION['user'];
        $mode = $_POST['mode'];
        $score = $_POST['score'];

        $sql = "INSERT INTO game(username, mode, score)
                VALUES (:user, :mode, :score)";

        $stmt = $curr_pdo->prepare($sql);
        $stmt->bindParam(":user", $usr);
        $stmt->bindParam(":mode", $mode);
        $stmt->bindParam(":score", $score);
        $stmt->execute();

        if($stmt->rowCount() > 0){
            echo json_encode(array("error"=> false, "info"=> "Tutto ok"));
        }else{
            echo json_encode(array("error"=> true, "info"=> "Errore nell'inserimento dei dati"));
        }
        return;
        

    }