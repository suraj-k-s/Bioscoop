<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);


    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $idtype = $_POST["idtype"];
    $address = $_POST["address"];
    $place = $_POST["place"];
    $uname = $_POST["uname"];
    $password = $_POST["password"];
    
    
    $proof = $_FILES["proof"]["name"];
    $tmp = $_FILES["proof"]["tmp_name"];
    move_uploaded_file($tmp,"../../Files/".$proof);

    
    $path = "http://localhost/Bioscoop/Project/api/Files/".$proof;
    $path1 = "http://localhost/Bioscoop/Project/api/Files/".$certificate;

        
            $insQry = "insert into tbl_producerreg(
                place_id,
                producer_name,
                producer_address,
                producer_phno,
                producer_email,
                producer_doj,
                producer_idproof,
                producer_status,
                producer_password)
            values('".$place."','".$name."','".$address."','".$phone."','".$email."',curdate(),'".$path."','0','".$password."')";
        if(mysql_query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        } 
      