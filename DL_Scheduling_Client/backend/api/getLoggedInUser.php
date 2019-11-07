<?php 
require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$id=$_SESSION["user"];

$query = "SELECT USER_ID,FIRST_NAME,LAST_NAME FROM USER WHERE USER_ID=?";
$stmt=$mysqli->prepare($query);
    //  Prepare and execute query
$stmt->execute([$id]);

$row = $stmt->fetch(PDO::FETCH_ASSOC);
$name= $row['FIRST_NAME']. ' '.$row['LAST_NAME'];
echo '{
    "id":'.$id.
    ',"name":"' .$name.'"}'
?>