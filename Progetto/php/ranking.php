<?php
    require("dbconnect.php");
    session_start();

    $curr_pdo = (new Database)->getConnetion();

    if ($_SERVER['REQUEST_METHOD']=='POST') {
        if (!isset($_POST['score']) || !isset($_POST['mode']) || !isset($_SESSION['user'])) {
            echo json_encode(array('error'=> true, 'info' => 'Nessun utente registrato'));
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
            echo json_encode(array("error"=> false, "info"=> "Values saved for ".$usr.", score: ".$score));
        }else{
            echo json_encode(array("error"=> true, "info"=> "Errore nell'inserimento dei dati"));
        }
        return;
        

    }
    
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {

        if(!isset($_GET['type'])){
            echo json_encode(array('error'=> true,'info'=> 'Mancata richiesta classifica'));
            return;
        }

        switch ($_GET['type']) {

            case 'hall':    // creo hall of fame

                $mode = $_GET['mode'];

                $sql = "SELECT * 
                        FROM game
                        WHERE mode = :mode
                        ORDER BY score DESC";
                
                $stmt = $curr_pdo->prepare($sql);
                $stmt->bindParam(":mode", $mode);
                $stmt->execute();

                for ($i= 1; $i < 6; $i++) { 
                    $row = $stmt->fetch();
                    
                    if($i === 1){   // inserisco torfeo o numero a seconda della posizione
                        $rank = '<tr class="top">
                                    <td><i class="fa fa-trophy"></i></td>';
                    }else{
                        $rank .= '<tr>
                                    <td>'.$i.'</td>';
                    }

                    if($row != null){   // inserisco valori se presenti, segnaposto di default se non
                        $rank .=   '<td>'.$row['username'].'</td>
                                    <td>'.$row['score'].'</td>
                                </tr>'; 
                    }else{
                        $rank .=   '<td>-----</td>
                                    <td>--</td>
                                </tr>';
                    }
                }
                echo json_encode(array('error' => false, "info" => $rank));
                return;

            case 'stats':

                $mode = $_GET['mode'];
                if(!isset($_SESSION['user'])){
                    echo json_encode(array('error'=> true,'info'=> 'Nessun utente registrato'));
                    return;
                }
                $usr = $_SESSION['user'];

                // numero partite giocate in una modalità
                $sql = "SELECT count(*) AS total
                        FROM game
                        WHERE mode = :mode AND username = :user";
                
                $stmt = $curr_pdo->prepare($sql);
                $stmt->bindParam(":mode", $mode);
                $stmt->bindParam(":user", $usr);
                $stmt->execute();

                $row = $stmt->fetch();
                if($row != null){
                    $played = $row["total"];
                }else{
                    echo json_encode(array("error"=> true, "info"=> "Problema in contare totale partite giocate"));
                    return;
                }

                // best score in una modalità
                $sql = "SELECT * 
                        FROM game
                        WHERE mode = :mode AND username = :user
                        ORDER BY score DESC";

                $stmt = $curr_pdo->prepare($sql);
                $stmt->bindParam(":mode", $mode);
                $stmt->bindParam(":user", $usr);
                $stmt->execute();

                $row = $stmt->fetch();
                if($row != null){
                    $best = $row["score"];
                }else{
                    echo json_encode(array("error"=> false, "info"=> "Times played: 0<br />Best score: --"));
                    return;
                }

                echo json_encode(array("error"=> false, "info"=> "Times played: ".$played."<br />Best score: ".$best));

                return;

        }

        echo json_encode(array( 'error'=> true,'info'=> 'Tipo richiesta non riconosciuto'));
        return;
    }