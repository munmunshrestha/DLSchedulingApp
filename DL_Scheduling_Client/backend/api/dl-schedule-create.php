<?php 
	require_once("dbConnect.php");
    $mysqli = dbConnect::dbConnect();
	$mysqli -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


	$_POST = json_decode(file_get_contents('php://input'),true);
	if(isset($_POST) && !empty($_POST)) {

		$start=$_POST["start"];
		$end =$_POST["end"];
		$day=json_encode($_POST["day"]);
		$course_id=$_POST["course_id"];
		$location= $_POST["location"];



		if (isset($start) && $start!=="" && isset($end) && $end!=="" ){
			
			
			// foreach($day as $dayVal){
				$query= "INSERT INTO DLCLASSES (DL_COURSE_ID ,
                DL_START_TIME,
                DL_END_TIME,
                DL_CLASS_LOCATION,
                DL_CLASS_DAY ) VALUES (?,?,?,?,?)";
				// Execute query
				$stmt =$mysqli->prepare($query);
				$stmt -> execute ([$course_id, $start, $end, $location, $day ]);
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
					"message": "Data cannot be stored in DB"
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
	
	$stmt -> NULL;
	dbConnect::dbDisconnect();
	?>