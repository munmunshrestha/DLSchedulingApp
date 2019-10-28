<?php
    require_once("dbConnect.php");
    $mysqli = dbConnect::dbConnect();
	$mysqli -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // set the start date of semester-- by admin
	$firstDate="2019-08-26";
    $lastDate="2019-12-13";
      
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
        $query = "SELECT STD_START_TIME, STD_END_TIME, STD_DAY, STD_CLASS_LOCATION FROM STUDENT_UNAVAILABILITY";
        $stmt=$mysqli->prepare($query);
            //  Prepare and execute query
        $stmt->execute();
        $event=[];
        if ($stmt) {
    
        $i = 0;
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            //for title (if class-location, else - unavailable)
            if ($row['STD_CLASS_LOCATION']==null){
                $location="Unavailable";
            }
            else{
                $location=$row['STD_CLASS_LOCATION'];
            }

            
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



            $event[$i]['title'] = $location;
            $event[$i]['startTime'] = $row['STD_START_TIME'];
            $event[$i]['endTime'] = $row['STD_END_TIME'];
            $event[$i]['startRecur']=$firstDate;
            $event[$i]['endRecur']=date ('Y-m-d', strtotime("+1 day", strtotime($lastDate)));
            $event[$i]['daysOfWeek']=json_decode($row["STD_DAY"]);
            $i++;
        }

        echo json_encode($event);
        }
        else
        {
        http_response_code(404);
        }
    // }
    // else
    // {
    //     http_response_code(404);
    // }
