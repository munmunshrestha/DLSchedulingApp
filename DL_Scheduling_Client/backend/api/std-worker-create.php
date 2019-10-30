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
		// if (isset($id) && $id!=="" && isset($email) && $email!=="" && isset($password) && $password!=="" && isset($fname) && $fname!=="" && isset($lname) && $lname!==""){


		// foreach($day as $dayVal){
		$query = "INSERT INTO USER (USER_ID,FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,IS_ADMIN) VALUES (?,?,?,?,?,?)";
		// Execute query
		$stmt = $mysqli->prepare($query);
		$stmt->execute([$id, $fname, $lname, $emailInput, $password, $isAdmin]);
		//Verify $stmt executed - create a SESSION message
		if ($stmt) {
			require 'vendor/autoload.php';
			$email = new \SendGrid\Mail\Mail();
			$email->setFrom("munmun.shrestha@outlook.com", "Admin");
			$email->setSubject("Login to DL Scheduling App as a Student Worker");
			$email->addTo("munmunshrestha1@gmail.com", "Student Worker");
			$email->addContent("text/plain", "You have been added as a student worker in Distance Learning Scheduling app. 
	Access your account on: ...");
			// $emailSend->addContent(
			//     "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
			// );
			$sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
			$response = $sendgrid->send($email);
			if ($sendgrid->send($email)){
				?>
				{
				"success": true,
				"message": "Data stored IN DB and email sent"
				}
			<?php
			}
			else {
					?>
			{
			"success": false,
			"message": " Data stored IN DBemail not sent"
			}
		<?php
			}
		} else {
				?>
		{
		"success": false,
		"message": "Data not stored IN DB"
		}
<?php
	}
}
else{
	?>
	{
		"success": false,
		"message": "Data not stored IN DB"
	}
	<?php
	}
}

$stmt->NULL;
dbConnect::dbDisconnect();
?>