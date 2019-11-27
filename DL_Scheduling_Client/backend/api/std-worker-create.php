<?php
require_once("dbConnect.php");
require_once("email.php");

$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_POST) && !empty($_POST)) {

	if ((isset($_POST["fname"]) && $_POST["fname"] !== "") && (isset($_POST["lname"]) && $_POST["lname"] !== "") && (isset($_POST["id"]) && $_POST["id"] !== "")
		&& (isset($_POST["email"]) && $_POST["email"] !== "") && (isset($_POST["password"]) && $_POST["password"] !== "") && (isset($_POST["isAdmin"]) && $_POST["isAdmin"] !== "")
	) {

		$id = $_POST["id"];
		$emailInput = $_POST["email"];
		$password = $_POST["password"];
		$fname = $_POST["fname"];
		$lname = $_POST["lname"];
		$isAdmin = $_POST["isAdmin"];
		// $id = 1233344;
		// $emailInput = 'mshresth@go.olemiss.edu';
		// $password = 'Olemiss2019';
		// $fname = 'try';
		// $lname = 'try';
		// $isAdmin = 0;

		// if (isset($id) && $id!=="" && isset($email) && $email!=="" && isset($password) && $password!=="" && isset($fname) && $fname!=="" && isset($lname) && $lname!==""){

		// foreach($day as $dayVal){
		$query = "INSERT INTO USER (USER_ID,FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,IS_ADMIN) VALUES (?,?,?,?,?,?)";
		// Execute query
		$stmt = $mysqli->prepare($query);
		$stmt->execute([$id, $fname, $lname, $emailInput, $password, $isAdmin]);
		//Verify $stmt executed - create a SESSION message
		if ($stmt) {
			//send email if student workers added
			$to = "munmun.shrestha@outlook.com";
			$subject = "Account created in DL Scheduling";
			$txt = "Hello " .$fname. " ". $lname. ", \n\t You have been added as a student worker in Distance Learning Department. You can access your account in DL Scheduling App. <br>
					Email: ".$emailInput."\n
					Password: Olemiss2019 \n
					Please change your password once you login";
			// $headers = "From: munmunshrestha1@gmail.com";

			mail($to, $subject, $txt);

			echo "to: " .$to. " subject: ". $subject ." txt: ".$txt;
			?>
			{
			"success": true,
			"message": "Data stored IN DB "
			}
		<?php
				} else {
					echo "error"
					?>
			{
			"success": false,
			"message": "Data not stored IN DB"
			}
		<?php
				}
			} else {
				?>
 		{
 		"success": false,
 		"message": "Incomplete data"
 		}
 	<?php
		}
	} else {
		?>
	{
	"success": false,
	"message": "data not passed"
	}
<?php
}


$stmt->NULL;
dbConnect::dbDisconnect();
?>