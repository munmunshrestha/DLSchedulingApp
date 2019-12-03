<?php

class dbConnect
{
  private static $mysqli = null;

  public function __construct()
  {
    die('Init function error');
  }
  public static function dbConnect()
  {
    require_once("database.php");

    session_start();
    //catch a potential error, if unable to connect
    try {
      $mysqli = new PDO('mysql:host=' . DBHOST . ';dbname=' . DBNAME, USERNAME, PASSWORD);
    
    } catch (PDOException $e) {
      echo "Could not connect";
      //   print "Error!: " . $e->getMessage() . "<br/>";
      die();
    }


    return $mysqli;
  }

  public static function dbDisconnect()
  {
    $mysqli = null;
  }
}
