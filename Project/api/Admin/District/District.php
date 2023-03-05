<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $district = $data->district[0];

        if(isset($district))
        {
            $insQry = "insert into tbl_district(district_name)values('".$district."')";
        if(mysql_query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
        }



?>