<?php

require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "SELECT DISTINCT DL_CLASS_LOCATION FROM DLCLASSES order by DL_CLASS_LOCATION ASC";
$stmt = $mysqli->prepare($query);
$stmt->execute([]);
$locations = [];

if ($stmt) {
    $i = 0;
    while ($dlClass = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $locations[$i] = $dlClass['DL_CLASS_LOCATION'];
        $i++;
    }  
    // print_r($locations);
    echo json_encode($locations);
} else {
    http_response_code(404);
}
