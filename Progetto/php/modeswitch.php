<?php
    session_start();
    if ($_SERVER['REQUEST_METHOD']=='POST') {
        if (isset($_POST['mode'])) {
            $_SESSION["mode"] = $_POST["mode"];
            echo json_encode(array("error" => false, "info" => "mode ".$_SESSION["mode"]." setted"));
            return;
        } else if (!isset($_POST["mode"])) {
            echo json_encode(array("error"=> true , "info" => "mode not setted"));
            return;
        }
    }
    if ($_SERVER['REQUEST_METHOD']== "GET") {
        if (!isset($_SESSION["mode"])) {
            echo json_encode(array("error"=> true , "info"=> "Mode not in session"));
            return;
        }else if (!isset($_GET["mode"])) {
            echo json_encode(array("error"=> true , "info"=> "Problem in connnection"));
            return;
        }else{
            $_GET["mode"] = $_SESSION["mode"];
            echo json_encode(array("error"=> false , "info"=> $_GET["mode"]));
            return;
        }
    }