<?php
require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// session_start();
$data = json_decode(file_get_contents('php://input'), true);
// $day = $_GET['dayVal'];
$day = "Monday";

// $id = $_SESSION["user"];
$query = "SELECT STD_START_TIME, STD_END_TIME, STD_DAY, STD_CLASS_LOCATION, STD_COURSEID FROM STUDENT_UNAVAILABILITY WHERE STD_USER_ID=? AND IS_DL=? and STD_DAY=?";
$stmt = $mysqli->prepare($query);
//  Prepare and execute query
$stmt->execute([10614325, 1,$day]);
$dlClasses = [];
if ($stmt) {

    $i = 0;
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        
        $dlClasses[$i]['start'] = $row['STD_START_TIME'];
        $dlClasses[$i]['end'] = $row['STD_END_TIME'];
        $dlClasses[$i]['location'] = $row['STD_CLASS_LOCATION'];
        $dlClasses[$i]['course'] = $row['STD_COURSEID'];
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
