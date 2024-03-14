<?php
    require_once("databaseconst.php");
    class Database{
        private static $pdo;

        function __construct(){
            if(self::$pdo == null){
                self::$pdo = new PDO("DBCONNECTION","USER","PASSWORD");
                self::$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }

        }
        function __destruct(){
            self::$pdo = null;
        }

        function getConnetion(){
            return self::$pdo;
        }
    }

?>