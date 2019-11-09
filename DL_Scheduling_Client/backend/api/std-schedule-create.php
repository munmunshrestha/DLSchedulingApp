<?php
require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_POST) && !empty($_POST)) {

	$startStr = $_POST["start"];
	$endStr = $_POST["end"];
	$day = $_POST["day"];
	$is_class = $_POST["is_class"];
	$course_id = $_POST["course_id"];
	$location = $_POST["location"];
	$id = $_SESSION["user"];
	$isDL = $_POST["isDL"];



	if (isset($startStr) && $startStr !== "" && isset($endStr) && $endStr !== "") {
		$query1 = "SELECT * FROM TIME";
		$stmt1 = $mysqli->prepare($query1);
		$stmt1->execute();
		if ($stmt1) {

			$timeRow = $stmt1->fetchAll();
			for ($i = 0; $i < count($timeRow); $i++) {
				if ($startStr == $timeRow[$i]['TIME_VAL']) {
					$startInt = $timeRow[$i]['ID'];
				}
				//check- if last loop element i+1 will give error
				elseif ($startStr > $timeRow[$i]['TIME_VAL'] && $startStr < $timeRow[$i + 1]['TIME_VAL']) {
					$startInt = $timeRow[$i + 1]['ID'];
				}

				if ($endStr == $timeRow[$i]['TIME_VAL']) {
					$endInt = $timeRow[$i]['ID'];
				}
				//check- if last loop element i+1 will give error
				elseif ($endStr > $timeRow[$i]['TIME_VAL'] && $endStr < $timeRow[$i + 1]['TIME_VAL']) {
					$endInt = $timeRow[$i + 1]['ID'];
				}
			}
		}
		$count=0;
		foreach ($day as $dayVal) {
			$query = "INSERT INTO STUDENT_UNAVAILABILITY ( STD_USER_ID, STD_START_TIME, STD_END_TIME, STD_DAY, STD_CLASS_LOCATION,STD_IS_CLASS, STD_COURSEID, IS_DL ) VALUES (?,?,?,?,?,?,?,?)";
			// Execute query
			$stmt = $mysqli->prepare($query);
			$stmt->execute([$id, $startInt, $endInt, $dayVal, $location, $is_class, $course_id, $isDL]);
			//Verify $stmt executed - create a SESSION message	
			if($stmt){
				$count++;
			}
		}
		if ($count==count($day)){
			?>
			{
			"success": true,
			"message": "Added to DB"
			}
		<?php
		}
		else{
			?>
			{
			"success": false,
			"message": "not inserted in db"
			}
		<?php
		}

	}
	 else {
				?>
		{
		"success": false,
		"message": "START END notset"
		}
	<?php
	}
} else {
	?>
	{
	"success": false,
	"message": "START END notset"
	}
<?php
}

$stmt->NULL;
dbConnect::dbDisconnect();
?>