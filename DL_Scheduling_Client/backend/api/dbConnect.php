<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    define ("DBHOST","localhost:3306");
    define ("USERNAME","mshresth");
    define ("PASSWORD","Chicago12!");
    define ("DBNAME", "DLScheduling");

class dbConnect {
    private static $mysqli = null;

  public function __construct() {
    die('Init function error');
  }
  public static function dbConnect() {

	//catch a potential error, if unable to connect
    try{
      $mysqli = new PDO('mysql:host='.DBHOST.';dbname='.DBNAME , USERNAME, PASSWORD);
    //   echo "Successful Connection";
    }
    catch (PDOException $e) {
      echo "Could not connect";
    //   print "Error!: " . $e->getMessage() . "<br/>";
      die();
    }


    return $mysqli;
  }

  public static function dbDisconnect() {
    $mysqli = null;
  }
}
