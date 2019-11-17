<?php
require_once("dbConnect.php");
// verify_login();

$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_POST) && !empty($_POST)) {
    $id = $_POST['id'];

    $query = "UPDATE LEAVE_REQUEST SET LR_IS_REJECTED=? WHERE LR_ID=?";
    //Prepare and execute query (use $_POST values from submitted form)
    $stmt = $mysqli->prepare($query);
    $stmt->execute([1, $id]);

    if ($stmt) {
        ?>

        {
        "success": true,
        "message": "Rejected"
        }
    <?php
        } else {
            ?>
        {
        "success": false,
        "message": "Not Rejected"
        }
<?php
    }
}



$stmt->NULL;
dbConnect::dbDisconnect();
?>