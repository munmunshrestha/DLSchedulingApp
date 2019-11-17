<?php
require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

session_start();
$data = json_decode(file_get_contents('php://input'), true);
$day = $_GET['dayVal'];
$id = $_SESSION["user"];
// $day = "Monday";
// $id = 10614325;

// $id = $_SESSION["user"];
$query = "SELECT DL_CLASS_ID,
DL_COURSE_ID ,
DL_START_TIME,
DL_END_TIME,
DL_CLASS_LOCATION
 FROM DLCLASSES WHERE DL_CLASS_DAY=? AND ASSIGNED_USER_ID=?" ;
$stmt = $mysqli->prepare($query);
//  Prepare and execute query
$stmt->execute([$day,$id]);
$dlClasses = [];
if ($stmt) {
    $i = 0;
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        $query1 = "SELECT TIME_VAL FROM TIME where ID=?";
		$stmt1 = $mysqli->prepare($query1);
		$stmt1->execute([$row['DL_START_TIME']]);
		if ($stmt1) {
            $startRow = $stmt1->fetch(PDO::FETCH_ASSOC);
            $start=$startRow['TIME_VAL'];
        }

        $query2 = "SELECT TIME_VAL FROM TIME where ID=?";
		$stmt2= $mysqli->prepare($query2);
		$stmt2->execute([$row['DL_END_TIME']]);
		if ($stmt2) {
            $endRow = $stmt2->fetch(PDO::FETCH_ASSOC);
            $end=$endRow['TIME_VAL'];
        }
        $dlClasses[$i]['id'] = $row['DL_CLASS_ID'];
        $dlClasses[$i]['start'] = $start;
        $dlClasses[$i]['end'] = $end;
        $dlClasses[$i]['location'] = $row['DL_CLASS_LOCATION'];
        $dlClasses[$i]['course'] = $row['DL_COURSE_ID'];
        $dlClasses[$i]['day'] = $day;

        $i++;
    }
    echo json_encode($dlClasses);
} else {
    http_response_code(404);
}
    // }
    // else
    // {
    //     http_response_code(404);
    // }
