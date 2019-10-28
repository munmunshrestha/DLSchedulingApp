<?php
    require_once("dbConnect.php");
    $mysqli = dbConnect::dbConnect();
	$mysqli -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $query = "SELECT USER_ID,FIRST_NAME,LAST_NAME,EMAIL FROM USER WHERE !IS_ADMIN";
        $stmt=$mysqli->prepare($query);
            //  Prepare and execute query
        $stmt->execute();
        $students=[];
        if ($stmt) {
    
        $i = 0;
        while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        
            $students[$i]['id'] = $row['USER_ID'];
            $students[$i]['fname'] = $row['FIRST_NAME'];
            $students[$i]['lname'] = $row['LAST_NAME'];
            $students[$i]['email']=$row['EMAIL'];
            $i++;
        }

        echo json_encode($students);
        }
        else
        {
        http_response_code(404);
        }
    // }
    // else
    // {
    //     http_response_code(404);
    // }
