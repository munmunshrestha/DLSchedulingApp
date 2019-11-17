<?php
require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$query = "SELECT LR.LR_ID, LR.LR_DATE, LR.LR_IS_ACCEPTED, LR.LR_IS_REJECTED,  DL.DL_COURSE_ID, DL.DL_START_TIME, DL.DL_END_TIME, DL.DL_CLASS_LOCATION, DL.DL_CLASS_DAY, STD.FIRST_NAME, STD.LAST_NAME, STD.EMAIL FROM LEAVE_REQUEST LR INNER JOIN DLCLASSES DL ON LR_CLASS_TO_COVER=DL_CLASS_ID INNER JOIN USER STD ON USER_ID=LR_USER_ID";
$stmt = $mysqli->prepare($query);
//  Prepare and execute query
$stmt->execute();
$requests = [];
if ($stmt) {
    $i = 0;
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        if ($row['LR_IS_ACCEPTED'] == 0 && $row['LR_IS_REJECTED'] == 0) {
            $requests[$i]['id'] = $row['LR_ID'];
            $requests[$i]['std_name'] = $row['FIRST_NAME'] . " " . $row['LAST_NAME'];
            $requests[$i]['class_toCover']['location'] = $row['DL_CLASS_LOCATION'];
            $requests[$i]['class_toCover']['start'] = $row['DL_START_TIME'];
            $requests[$i]['class_toCover']['end'] = $row['DL_END_TIME'];
            $requests[$i]['class_toCover']['course'] = $row['DL_COURSE_ID'];
            $requests[$i]['class_toCover']['day'] = $row['DL_CLASS_DAY'];
            $requests[$i]['date'] = $row['LR_DATE'];
            // $requests[$i]['email']=$row['EMAIL'];
            $i++;
        }
    }
    // print_r($requests);
    echo json_encode($requests);
} else {
    http_response_code(404);
}
    // }
    // else
    // {
    //     http_response_code(404);
    // }
