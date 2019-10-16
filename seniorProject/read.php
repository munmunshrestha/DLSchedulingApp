<?php
/**
 * Returns the list of policies.
 */
require 'database.php';

$policies = [];
$sql = "SELECT UserID, UserName from SP_USER";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $toPrint[$i]['UserID']    = $row['UserID'];
    $toPrint[$i]['UserName'] = $row['UserName'];
    // $toPrint[$i]['amount'] = $row['amount'];
    $i++;
  }

  echo json_encode($toPrint);
}
else
{
  http_response_code(404);
}

// <?php

// require_once("database.php");

// $mysqli = Database::dbConnect();
// $mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// $toPrint = [];
// $query="SELECT UserID, UserName from SP_USER";
// $stmt=$mysqli->prepare($query);
// //  Prepare and execute query
// $stmt->execute();
// if ($stmt) {
//   $i = 0;

//   while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
//     // $row["FirstName"]."&nbsp".$row["LastName"]."</td>";
//     $toPrint[$i]['UserID']    = $row['UserID'];
//     $toPrint[$i]['UserName'] = $row['UserName'];
//     // $toPrint[$i]['amount'] = $row['amount'];
//     $i++;
//   }
//   echo json_encode($toPrint);
// }
// else
// {
//   echo "o";
// }

// 	$stmt = NULL;
// 	Database::dbDisconnect();
//  ?>