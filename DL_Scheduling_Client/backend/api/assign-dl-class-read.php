<?php
require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


$data = json_decode(file_get_contents('php://input'), true);
$day = $_GET['dayVal'];

$query2 = "SELECT USER_ID, FIRST_NAME, LAST_NAME FROM USER WHERE IS_ADMIN=? ";
$stmt2 = $mysqli->prepare($query2);
$stmt2->execute([0]);
$users = $stmt2->fetchAll(PDO::FETCH_ASSOC);

// $query1 = "SELECT STD.STD_USER_ID, STD.STD_START_TIME, STD.STD_END_TIME,  USER.* FROM STUDENT_UNAVAILABILITY STD RIGHT JOIN USER USER ON (USER.USER_ID = STD.STD_USER_ID) WHERE USER.IS_ADMIN=? AND STD.STD_DAY=?";
// $stmt1 = $mysqli->prepare($query1);
// $stmt1->execute([0, "Monday"]);
// $schedules = $stmt1->fetchAll(PDO::FETCH_ASSOC);

// print_r ($schedules);

$query = "SELECT * FROM DLCLASSES WHERE DL_CLASS_DAY=? AND IS_ASSIGNED=?";
$stmt = $mysqli->prepare($query);
$stmt->execute([$day,0]);
$classes = [];

if ($stmt) {
    $i = 0;
    while ($dlClass = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $classes[$i]['course'] = $dlClass['DL_COURSE_ID'];
        $classes[$i]['location'] = $dlClass['DL_CLASS_LOCATION'];
        

        $students = [];
        $count = 0;
        foreach ($users as $user) {
            $query1 = "SELECT STD_USER_ID, STD_START_TIME, STD_END_TIME FROM STUDENT_UNAVAILABILITY  WHERE STD_DAY=? AND STD_USER_ID=?";
            $stmt1 = $mysqli->prepare($query1);
            $stmt1->execute([$day, $user['USER_ID']]);
            $schedules = $stmt1->fetchAll(PDO::FETCH_ASSOC);
            if (!empty($schedules)) {
                // print_r($schedules);
                foreach ($schedules as $schedule) {
                    if ((($schedule['STD_START_TIME'] >= ($dlClass['DL_START_TIME'] - 1) && $schedule['STD_START_TIME'] <= $dlClass['DL_END_TIME']) || ($schedule['STD_END_TIME'] >=($dlClass['DL_START_TIME'] - 1) && $schedule['STD_END_TIME'] <=$dlClass['DL_END_TIME']))){
                        break;
                    }
                    else{
                        $count++;
                       continue;
                    }
                }
                if($count==count($schedules)){
                    array_push($students,$user['FIRST_NAME'] . " " . $user['LAST_NAME']);

                }
            } else {
                array_push($students,$user['FIRST_NAME'] . " " . $user['LAST_NAME']);
            }
            // $j++;
        }
        // print_r($students);
        $classes[$i]['students'] = $students;
        $i++;
    }
    echo json_encode($classes);
} else {
    http_response_code(404);
}


        // if ($stmt) {
    
        // $i = 0;
        // while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        //     $event[$i]['title'] =$row['DL_COURSE_ID']. " - ". $row['DL_CLASS_LOCATION'] ;
        //     $event[$i]['startTime'] = $row['DL_START_TIME'];
        //     $event[$i]['endTime'] = $row['DL_END_TIME'];
        //     $event[$i]['startRecur']=$firstDate;
        //     $event[$i]['endRecur']=date ('Y-m-d', strtotime("+1 day", strtotime($lastDate)));
        //     $event[$i]['daysOfWeek']=json_decode($row["DL_CLASS_DAY"]);
        //     $i++;
        // }

        // echo json_encode($event);
        // }
        // else
        // {
        // http_response_code(404);
        // }
    // }
    // else
    // {
    //     http_response_code(404);
    // }
