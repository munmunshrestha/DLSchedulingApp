<?php
// session_start();

// $user=$_SESSION["user"];

// //SELECT records from userTable where username=<username>
// if ($user=="admin"){
//     echo '{
//         "message":"This is admin from database.php",
//         "success":true
//     }';
// } else{
//     echo '{
//         "message":"unknown from database.php",
//         "success":false
//     }';
// }

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define ("DBHOST","localhost:3306");
define ("USERNAME","username");
define ("PASSWORD","password");
define ("DBNAME", "DLScheduling");
?>
