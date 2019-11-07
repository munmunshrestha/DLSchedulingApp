<?php
require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

session_start();
// set the start date of semester-- by admin
$firstDate = "2019-08-26";
$lastDate = "2019-12-13";

// $firstDay = date("l", strtotime($firstDate));
// $todayDate=date('Y-m-d');
// $today=date("l",strtotime($todayDate));

// //if today is > first day, check if today is the same day as first day, 
// //is yes change first date to today'e date
// //else first date =previous firstdate's day
// if ($todayDate>$firstDate){
//     if($today==$firstDay){
//         $firstDate=$todayDate;
//     }
//     else{
//         $firstDate=date('Y-m-d', strtotime("previous ".$firstDay, strtotime($today)));
//     }
// }

//while today is less than semester end date**
// if($todayDate>=$firstDate && $todayDate<=$lastDate){
$id = $_SESSION["user"];
$query = "SELECT STD_START_TIME, STD_END_TIME, STD_DAY, STD_CLASS_LOCATION FROM STUDENT_UNAVAILABILITY WHERE STD_USER_ID=?";
$stmt = $mysqli->prepare($query);
//  Prepare and execute query
$stmt->execute([10614325]);
$event = [];
if ($stmt) {

    $i = 0;
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        //for title (if class-location, else - unavailable)
        if ($row['STD_CLASS_LOCATION'] == null) {
            $location = "Unavailable";
        } else {
            $location = $row['STD_CLASS_LOCATION'];
        }
        $startTime = $row['STD_START_TIME'];
        $endTime = $row['STD_END_TIME'];
        //GETTING START GRID AND NO OF GRID TO COLOR
        $diff = (strtotime($endTime) - strtotime($startTime));
        $minutes = $diff / 60;
        $noOfGrid = ceil($minutes/30);
        $startGrid=((strtotime($startTime)- strtotime('08:00:00'))/60)/30;
        // echo sprintf("%02dh %02dm", floor($total / 60), $total % 60);

        // $classDay=$row['STD_DAY'];
        // if($firstDay==$classDay){
        //     $classDate=$firstDate;
        // }
        // else{
        //     //next day (indb) from first day
        //     $classDate=date('Y-m-d', strtotime("next ".$classDay, strtotime($firstDate)));
        // }

        // $startDateTime=$classDate." ".$row['STD_START_TIME'];
        // $endDateTime=$classDate." ".$row['STD_END_TIME'];



        // $event[$i]['minutes'] = $minutes;
        $event[$i]['startTime'] = $row['STD_START_TIME'];
        $event[$i]['endTime'] = $row['STD_END_TIME'];
        $event[$i]['noOfGrid'] = $noOfGrid;
        $event[$i]['startGrid'] = $startGrid;
        $event[$i]['daysOfWeek'] = json_decode($row["STD_DAY"]);

        $i++;
    }

    echo json_encode($event);
} else {
    http_response_code(404);
}
    // }
    // else
    // {
    //     http_response_code(404);
    // }
