<?php

require_once("dbConnect.php");
// verify_login();

$mysqli = dbConnect::dbConnect();
$mysqli->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_POST) && !empty($_POST)) {
    $id = $_POST['id'];

    $query1 = "SELECT * FROM STUDENT_UNAVAILABILITY WHERE STD_USER_ID=?";
    $stmt1 = $mysqli->prepare($query1);
    $stmt1->execute([$id]);

    if ($stmt1) {
        $query2 = "DELETE FROM STUDENT_UNAVAILABILITY WHERE STD_USER_ID=?";
        $stmt2 = $mysqli->prepare($query2);
        $stmt2->execute([$id]);

        $query3 = "DELETE FROM USER WHERE USER_ID=?";
        $stmt3 = $mysqli->prepare($query3);
        $stmt3->execute([$id]);


        if ($stmt3) {
            ?>
            {
            "success": true,
            "message": "User and related schedule are deleted from db"
            }
        <?php

                } else {
                    ?>
            {
            "success": false,
            "message": "Data is not deleted from db"
            }
        <?php
                }
            } else {
                $query4 = "DELETE FROM USER WHERE USER_ID=?";
                $stmt4 = $mysqli->prepare($query3);
                $stmt4->execute([$id]);

                if ($stmt4) {
                    ?>
            {
            "success": true,
            "message": "user deleted from db"
            }
        <?php

                } else {
                    ?>
            {
            "success": false,
            "message": "user is not deleted from db"
            }
    <?php
            }
        }
    } else {
        ?>
    {
    "success": false,
    "message": "User not selected"
    }
<?php

}

$stmt = NULL;
dbConnect::dbDisconnect();


?>