<?php 
	require_once("dbConnect.php");
    $mysqli = dbConnect::dbConnect();
	$mysqli -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


	$_POST = json_decode(file_get_contents('php://input'),true);
	if(isset($_POST) && !empty($_POST)) {

		$id=$_POST["id"];
		$email =$_POST["email"];
		$password=$_POST["password"];
		$fname= $_POST["fname"];
        $lname= $_POST["lname"];
        $isAdmin= $_POST["isAdmin"];


		// if (isset($id) && $id!=="" && isset($email) && $email!=="" && isset($password) && $password!=="" && isset($fname) && $fname!=="" && isset($lname) && $lname!==""){
			
			
			// foreach($day as $dayVal){
				$query= "INSERT INTO USER (USER_ID,FIRST_NAME,LAST_NAME,EMAIL,PASSWORD,IS_ADMIN) VALUES (?,?,?,?,?,?)";
				// Execute query
				$stmt =$mysqli->prepare($query);
                $stmt -> execute ([$id, $fname, $lname, $email , $password, $isAdmin]);
				//Verify $stmt executed - create a SESSION message
				if($stmt) {
				?>
					{
						"success": true,
						"message": "Data stored IN DB"
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
		
		else{
			?>
			{
				"success": false,
				"message": "Data not set or empty"
			}
		<?php
		}
	
	$stmt -> NULL;
	dbConnect::dbDisconnect();
	?>