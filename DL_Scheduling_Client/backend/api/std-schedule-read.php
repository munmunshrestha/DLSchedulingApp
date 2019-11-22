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
$query = "SELECT STD_START_TIME, STD_END_TIME, STD_DAY, STD_CLASS_LOCATION, IS_DL, STD_IS_CLASS FROM STUDENT_UNAVAILABILITY WHERE STD_USER_ID=?";
$stmt = $mysqli->prepare($query);
//  Prepare and execute query
$stmt->execute([$id]);
// $stmt->execute(['10614325']);

$event = [];
$monday = [];
$tuesday = [];
$wednesday = [];
$thursday = [];
$friday = [];


if ($stmt) {

    $i = 0;
    $j = 0;
    $k = 0;
    $l = 0;
    $m = 0;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        //for title (if class-location, else - unavailable)
        if ($row['STD_CLASS_LOCATION'] == null) {
            $location = "Unavailable";
        } else {
            $location = $row['STD_CLASS_LOCATION'];
        }
        // $startTime = $row['STD_START_TIME'];
        // $endTime = $row['STD_END_TIME'];
        $day = $row['STD_DAY'];
        //GETTING START GRID AND NO OF GRID TO COLOR
        // $diff = (strtotime($endTime) - strtotime($startTime));
        // $minutes = $diff / 60;
        // $noOfGrid = ceil($minutes/30);
        // $startGrid=((strtotime($startTime)- strtotime('08:00:00'))/60)/30;


        // $event[$i]['noOfGrid'] = $noOfGrid;
        // $event[$i]['startGrid'] = $startGrid;
        // $event[$i]['daysOfWeek'] = json_decode($row["STD_DAY"]);

        if ($day == "Monday") {
            $monday[$i]['startTime'] = $row['STD_START_TIME'];
            $monday[$i]['endTime'] = $row['STD_END_TIME'];
            $monday[$i]['location'] = $location;
            $monday[$i]['isClass'] = $row['STD_IS_CLASS'];
            $monday[$i]['isDL'] = $row['IS_DL'];
            $monday[$i]['day'] = $day;
            $i++;
        } elseif ($day == "Tuesday") {
            $tuesday[$j]['startTime'] = $row['STD_START_TIME'];
            $tuesday[$j]['endTime'] = $row['STD_END_TIME'];
            $tuesday[$j]['location'] = $location;
            $tuesday[$j]['isClass'] = $row['STD_IS_CLASS'];
            $tuesday[$j]['isDL'] = $row['IS_DL'];
            $tuesday[$j]['day'] = $day;
            $j++;
        } elseif ($day == "Wednesday") {
            $wednesday[$k]['startTime'] = $row['STD_START_TIME'];
            $wednesday[$k]['endTime'] = $row['STD_END_TIME'];
            $wednesday[$k]['location'] = $location;
            $wednesday[$k]['isClass'] = $row['STD_IS_CLASS'];
            $wednesday[$k]['isDL'] = $row['IS_DL'];
            $wednesday[$k]['day'] = $day;

            $k++;
        } elseif ($day == "Thursday") {
            $thursday[$l]['startTime'] = $row['STD_START_TIME'];
            $thursday[$l]['endTime'] = $row['STD_END_TIME'];
            $thursday[$l]['location'] = $location;
            $thursday[$l]['isClass'] = $row['STD_IS_CLASS'];
            $thursday[$l]['isDL'] = $row['IS_DL'];
            $thursday[$l]['day'] = $day;

            $l++;
        } elseif ($day == "Friday") {
            $friday[$m]['startTime'] = $row['STD_START_TIME'];
            $friday[$m]['endTime'] = $row['STD_END_TIME'];
            $friday[$m]['location'] = $location;
            $friday[$m]['isClass'] = $row['STD_IS_CLASS'];
            $friday[$m]['isDL'] = $row['IS_DL'];
            $friday[$m]['day'] = $day;

            $m++;
        }
    }

    // $event['Monday'] = $monday;
    // $event['Tuesday'] = $tuesday;
    // $event['Wednesday'] = $wednesday;
    // $event['Thursday'] = $thursday;
    // $event['Friday'] = $friday;
    $event['Monday'] = $monday;
    $event['Tuesday'] = $tuesday;
    $event['Wednesday'] = $wednesday;
    $event['Thursday'] = $thursday;
    $event['Friday'] = $friday;
    // array_push($event,$monday);
    // array_push($event,$tuesday);
    // array_push($event,$wednesday);
    // array_push($event,$thursday);
    // array_push($event,$friday);

    echo json_encode($event);
} else {
    http_response_code(404);
}
    // }
    // else
    // {
    //     http_response_code(404);
    // }
