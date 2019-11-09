<?php
require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_POST) && !empty($_POST)) {

	$startStr = $_POST["start"];
	$endStr = $_POST["end"];
	$day = $_POST["day"];
	$course_id = $_POST["course_id"];
	$location = $_POST["location"];



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
			$query = "INSERT INTO DLCLASSES (DL_COURSE_ID ,
                DL_START_TIME,
                DL_END_TIME,
                DL_CLASS_LOCATION,
                DL_CLASS_DAY ) VALUES (?,?,?,?,?)";
			// Execute query
			$stmt = $mysqli->prepare($query);
			$stmt->execute([$course_id, $startInt, $endInt, $location, $dayVal]);
			//Verify $stmt executed - create a SESSION message
			if ($stmt) {
				$count++;
			}
		}
		if ($count == count($day)) {
			?>
			{
			"success": true,
			"message": "Added to DB"
			}
		<?php
				} else {
					?>
			{
			"success": false,
			"message": "not inserted in db"
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
}

$stmt->NULL;
dbConnect::dbDisconnect();
?>