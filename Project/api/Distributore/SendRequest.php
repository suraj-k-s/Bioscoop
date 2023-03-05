<?php

include("../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);


    $film = $_POST["film"];
    $per = $_POST["per"];
    $screen = $_POST["screen"];
    $rate = $_POST["rate"];
    $date = $_POST["date"];
    $id = $_POST["id"];
    
    

        
            $insQry = "insert into tbl_rights(film_id,distributor_id,offerrate,release_date,right_screens)
            values('".$film."','".$id."','".$rate."','".$date."','".$screen."')";
        if(mysql_query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        } 
      