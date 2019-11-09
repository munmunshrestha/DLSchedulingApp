<?php

require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$data = json_decode(file_get_contents('php://input'), true);
$day = $_GET['dayVal'];
$dlStart = $_GET['start'];
$dlEnd = $_GET['end'];


$query2 = "SELECT USER_ID, FIRST_NAME, LAST_NAME, PREFERRED_HRS FROM USER WHERE IS_ADMIN=?";
$stmt2 = $mysqli->prepare($query2);
$stmt2->execute([0]);
if ($stmt2) {

    $users = $stmt2->fetchAll(PDO::FETCH_ASSOC);

    $students = [];
    $count = 0;
    $i = 0;

    foreach ($users as $user) {
        $query1 = "SELECT STD_USER_ID, STD_START_TIME, STD_END_TIME FROM STUDENT_UNAVAILABILITY  WHERE STD_DAY=? AND STD_USER_ID=?";
        $stmt1 = $mysqli->prepare($query1);
        $stmt1->execute([$day, $user['USER_ID']]);
        $schedules = $stmt1->fetchAll(PDO::FETCH_ASSOC);
        if (!empty($schedules)) {
            foreach ($schedules as $schedule) {
                $start=$schedule['STD_START_TIME'];
                $end=$schedule['STD_END_TIME'];
                // if (($schedule['STD_START_TIME'] >= ($dlStart - 1) && $schedule['STD_START_TIME'] <= $dlend) && ($schedule['STD_END_TIME'] >= ($dlStart - 1) && $schedule['STD_END_TIME'] <= $dlEnd)) {
                 if(in_array($start, range($dlStart - 1,$dlend))|| in_array($end, range($dlStart - 1,$dlend)) ){
                    break;
                } else {
                    $count++;
                    continue;
                }
            }
            if ($count == count($schedules)) {
                $student[$i]['id'] = $user['USER_ID'];
                $student[$i]['name'] = $user['FIRST_NAME'] . " " . $user['LAST_NAME'];
                $i++;
            }
        } else {
            $student[$i]['id'] = $user['USER_ID'];
            $student[$i]['name'] = $user['FIRST_NAME'] . " " . $user['LAST_NAME'];
            $i++;
        }
    }
    echo json_encode($student);
} else {
    http_response_code(404);
}
// $query1 = "SELECT STD.STD_USER_ID, STD.STD_START_TIME, STD.STD_END_TIME, STD.STD_DAY,  USER.* FROM STUDENT_UNAVAILABILITY STD RIGHT JOIN USER USER ON (USER.USER_ID = STD.STD_USER_ID) WHERE USER.IS_ADMIN=0;";
// $stmt1 = $mysqli->prepare($query1);
// $stmt1->execute([]);
// if ($stmt1) {
//     $schedules = $stmt1->fetchAll(PDO::FETCH_ASSOC);
//     $students = [];
//     $count = 0;
//     $i = 0;
//     foreach ($schedules as $schedule) {
//         if ($schedule['STD_USER_ID'] == null) {
//             $student[$i]['id'] = $schedule['USER_ID'];
//             $student[$i]['name'] = $schedule['FIRST_NAME'] . " " . $schedule['LAST_NAME'];
//             $i++;
//             continue;
//         } else {
//             if ($schedule['STD_DAY'] == $day) {
//                 if ((($schedule['STD_START_TIME'] >= ($dlStart - 1) && $schedule['STD_START_TIME'] <= $dlStart) || ($schedule['STD_END_TIME'] >= ($dlEnd - 1) && $schedule['STD_END_TIME'] <= $dlEnd))) {
//                     continue;
//                 } else {
//                     $count++;
//                 }
//             }
//             else{
//                 continue;
//             }
//         }
//         if ($count == count($schedules)) {
//             $student[$i]['id'] = $schedule['USER_ID'];
//             $student[$i]['name'] = $schedule['FIRST_NAME'] . " " . $schedule['LAST_NAME'];
//             $i++;
//         }
//     }
   
//     echo json_encode($student);
// } else {
//     http_response_code(404);
// }
