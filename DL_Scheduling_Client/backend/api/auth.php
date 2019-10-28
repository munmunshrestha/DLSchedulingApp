<?php
  require_once("dbConnect.php");
  $mysqli = dbConnect::dbConnect();
  $mysqli -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  session_start();
  $_POST = json_decode(file_get_contents('php://input'), true);
  if(isset($_POST) && !empty($_POST)) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    if (isset($email) && $email!=="" && isset($password) && $password!==""){
      $query = "SELECT * FROM USER WHERE EMAIL=? AND PASSWORD=?";
      $stmt=$mysqli->prepare($query);
      //  Prepare and execute query
      $stmt->execute([$email, $password]);
            
      if ($stmt) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        // $_SESSION['user'] = $ro;
        if($row['IS_ADMIN']) {
          ?>
          {
            "success": true,
            "message": "Admin"
          }
          <?php
        }
        else{
          ?>
            {
              "success": true,
              "message": "Student"
            }
        <?php
        }
      } 
      else {

        ?>
        {
          "success": false,
          "message": "Invalid Credentials"
        }
        <?php
      }
    } 
    else {
      ?>
      {
        "success": false,
        "message": "Form Incomplete"
      }
    <?php
  }
}
  ?>