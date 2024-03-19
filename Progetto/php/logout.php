<?php

    session_start();
    if (isset($_SESSION["user"])){

        session_unset();
        session_destroy();

        echo json_encode(array("error" => false, "info" => "Logout eseguito"));
        return;
    }else{

        echo json_encode(array("error"=> true, "info"=> "Nessun utente loggato"));
        return;
    }