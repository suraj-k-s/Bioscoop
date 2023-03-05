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


    $certificate = $_FILES["certificate"]["name"];
    $tmp1 = $_FILES["certificate"]["tmp_name"];
    move_uploaded_file($tmp1,"../../Files/".$certificate);
    
    $path = "http://localhost/Bioscoop/Project/api/Files/".$proof;
    $path1 = "http://localhost/Bioscoop/Project/api/Files/".$certificate;

        
            $insQry = "insert into tbl_distributorreg(
                place_id,
                distributor_name,
                distributor_address,
                distributor_phno,
                distributor_email,
                distributor_doj,
                distributor_idproof,
                distributor_income,
                distributor_status,
                distribuitor_password)
            values('".$place."','".$name."','".$address."','".$phone."','".$email."',curdate(),'".$path."', '".$path1."','0','".$password."')";
        if(mysql_query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        } 
        
        
