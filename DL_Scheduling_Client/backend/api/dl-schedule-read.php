<?php
require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

session_start();

$data = json_decode(file_get_contents('php://input'), true);
$day = $_GET['dayVal'];

//getlocation
$query1 = "SELECT DISTINCT DL_CLASS_LOCATION FROM DLCLASSES order by DL_CLASS_LOCATION ASC";
$stmt1 = $mysqli->prepare($query1);
$stmt1->execute([]);
// $locations = [];

if ($stmt1) {
    $i = 0;
    while ($dlClass = $stmt1->fetch(PDO::FETCH_ASSOC)) {
        $locations[$dlClass['DL_CLASS_LOCATION']] = [];
    }
}
// print_r($locations);

$query = "SELECT DL.DL_COURSE_ID, DL.DL_START_TIME, DL.DL_END_TIME, DL.DL_CLASS_LOCATION, STD.FIRST_NAME, STD.LAST_NAME FROM DLCLASSES DL LEFT JOIN USER STD ON DL.ASSIGNED_USER_ID=STD.USER_ID where DL_CLASS_DAY=? ";
$stmt = $mysqli->prepare($query);
//  Prepare and execute query
$stmt->execute([$day]);
$classInfo = [];

if ($stmt) {
    for ($index=0; $index<count($locations); $index++){
        $$locations[$index]=0;
        // echo $Conner;
    }
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $rowlocation = $row['DL_CLASS_LOCATION'];
        $locations[$rowlocation][$$rowlocation]['startTime'] = $row['DL_START_TIME'];
        $locations[$rowlocation][$$rowlocation]['endTime'] = $row['DL_END_TIME'];
        $locations[$rowlocation][$$rowlocation]['course'] = $row['DL_COURSE_ID'];
        $locations[$rowlocation][$$rowlocation]['name'] = $row['FIRST_NAME'] ;
        $locations[$rowlocation][$$rowlocation]['location']=$row['DL_CLASS_LOCATION'];
        $$rowlocation++;
    }

    echo json_encode($locations);
} else {
    http_response_code(404);
}
