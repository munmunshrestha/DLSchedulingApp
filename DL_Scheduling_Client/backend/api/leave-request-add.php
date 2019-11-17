<?php
require_once("dbConnect.php");
$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_POST) && !empty($_POST)) {
    $date = $_POST["date"];
    $dlClass = $_POST["dlClass"];
    $id = $_SESSION["user"];
    $count = 0;

    foreach ($dlClass as $class) {
        $query = "INSERT INTO LEAVE_REQUEST (  LR_USER_ID,
        LR_CLASS_TO_COVER,
        LR_DATE ) VALUES (?,?,?)";
        // Execute query
        $stmt = $mysqli->prepare($query);
        $stmt->execute([$id, $class, $date]);
        //Verify $stmt executed - create a SESSION message
        if ($stmt) {
            $success = true;
        } else {
            $success = false;
        }
    }
    if ($success) {
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
}



$stmt->NULL;
dbConnect::dbDisconnect();
?>