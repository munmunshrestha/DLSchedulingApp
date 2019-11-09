<?php

require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$data = json_decode(file_get_contents('php://input'), true);
$day = $_GET['dayVal'];

$query = "SELECT * FROM DLCLASSES WHERE DL_CLASS_DAY=? AND IS_ASSIGNED=?";
$stmt = $mysqli->prepare($query);
$stmt->execute([$day,0]);
$classes = [];

if ($stmt) {
    $i = 0;
    while ($dlClass = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $classes[$i]['id'] = $dlClass['DL_CLASS_ID'];
        $classes[$i]['course'] = $dlClass['DL_COURSE_ID'];
        $classes[$i]['location'] = $dlClass['DL_CLASS_LOCATION'];
        $classes[$i]['start'] = $dlClass['DL_START_TIME'];
        $classes[$i]['end'] = $dlClass['DL_END_TIME'];
        $i++;
    }  
    echo json_encode($classes);
} else {
    http_response_code(404);
}
