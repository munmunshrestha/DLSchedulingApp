<?php
session_start();

$user=$_SESSION["user"];

//SELECT records from userTable where username=<username>
if ($user=="admin"){
    echo '{
        "message":"This is admin from database.php",
        "success":true
    }';
} else{
    echo '{
        "message":"unknown from database.php",
        "success":false
    }';
}
?>