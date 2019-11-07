<?php 
	require_once("dbConnect.php");
    $mysqli = dbConnect::dbConnect();
	$mysqli -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// 	$startDate="2019-08-26";
// 	$startime="11:11:11";
// 	echo $startDate. "<br>";
// //get one week from the startdate
// 	$oneWeek= date('Y-m-d',strtotime("+1 week",strtotime($startDate)));

// 	// echo $oneWeek. "<br>";	
// 	//if today==one week from start date, startdate=today
// 	$today=date('Y-m-d');
// 	if($today==$oneWeek){
// 		$startDate=$today;
// 	}
	
// 	echo $startDate. "<br>";
	
// // Convert the date string into a unix timestamp.
// // $unixTimestamp = strtotime($startDate);

// //Get the day of the week using PHP's date function.
// $dayOfWeek = date("l", strtotime($startDate));

// //Print out the day that our date fell on.
// echo $startDate . ' fell on a ' . $dayOfWeek;
// $day = array("monday", "tuesday", "wednesday");
// $dateGen=array();
//  foreach($day as $dayVal){
// 	 echo $dayVal;
// 	 $date=date('Y-m-d', strtotime("next ".$dayVal, strtotime($startDate)));
// 	array_push($dateGen, $date);

//  }

//  echo $dateGen[0]." ". $startime;
//  echo $dateGen[1];
//  echo $dateGen[2];

$query1 = "SELECT * FROM TIME";
		$stmt1 = $mysqli->prepare($query1);
		$stmt1->execute();
		echo "hello";
		if ($stmt1) {
			
			$timeRow = $stmt1->fetchAll();
			print_r($timeRow[0]['TIME_VAL']);
		}
?>