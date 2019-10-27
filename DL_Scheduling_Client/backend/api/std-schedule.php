<?php 
	require_once("dbConnect.php");
    $mysqli = dbConnect::dbConnect();
	$mysqli -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


	$_POST = json_decode(file_get_contents('php://input'),true);
	if(isset($_POST) && !empty($_POST)) {

		$start=$_POST["start"];
		$end =$_POST["end"];
		$day=$_POST["day"];
		$is_class=$_POST["is_class"];
		$course_id=$_POST["course_id"];
		$location= $_POST["location"];



		if ($start!=="" && $end!==""){
			
			
			foreach($day as $dayVal){
				$query= "INSERT INTO SP_STUDENT_UNAVAILABILITY ( STD_START_TIME, STD_END_TIME, STD_DAY, STD_CLASS_LOCATION,STD_IS_CLASS, STD_COURSEID ) VALUES (?,?,?,?,?,?)";
				// Execute query
				$stmt =$mysqli->prepare($query);
				$stmt -> execute ([$start, $end, $dayVal, $location, $is_class, $course_id]);
				//Verify $stmt executed - create a SESSION message
				if($stmt) {
				?>
					{
						"success": true,
						"message": "START END IN DB"
					}
				<?php
				} else {
				?>
					{
					"success": false,
					"message": "CANNOT STORE ON DB"
					}
				<?php
				}
			}
		}
		else{
			?>
			{
				"success": false,
				"message": "START END notset"
			}
		<?php
		}
	}
	else{
		?>
			{
			"success": false,
			"message": "DATA NOT PASSED FROM CLIENT"
			}
		<?php
		
	}
	$stmt -> NULL;
	dbConnect::dbDisconnect();
	?>