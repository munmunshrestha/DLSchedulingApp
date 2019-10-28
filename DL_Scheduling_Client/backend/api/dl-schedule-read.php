<?php
    require_once("dbConnect.php");
    $mysqli = dbConnect::dbConnect();
	$mysqli -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // set the start date of semester-- by admin
	$firstDate="2019-08-26";
    $lastDate="2019-12-13";
      
 
        $query = "SELECT DL_COURSE_ID ,
        DL_START_TIME,
        DL_END_TIME,
        DL_CLASS_LOCATION,
        DL_CLASS_DAY FROM DLCLASSES ";
        $stmt=$mysqli->prepare($query);
            //  Prepare and execute query
        $stmt->execute();
        $event=[];
        if ($stmt) {
    
        $i = 0;
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

            $event[$i]['title'] =$row['DL_COURSE_ID']. " - ". $row['DL_CLASS_LOCATION'] ;
            $event[$i]['startTime'] = $row['DL_START_TIME'];
            $event[$i]['endTime'] = $row['DL_END_TIME'];
            $event[$i]['startRecur']=$firstDate;
            $event[$i]['endRecur']=date ('Y-m-d', strtotime("+1 day", strtotime($lastDate)));
            $event[$i]['daysOfWeek']=json_decode($row["DL_CLASS_DAY"]);
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
