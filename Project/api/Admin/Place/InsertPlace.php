<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $district = $data->districtId[0];
    $place = $data->placeName[0];

    if($district!="" && $place!="")
    {
        $insQry = "insert into tbl_place(district_id,place_name)values('".$district."','".$place."')";

        if(mysql_query($insQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>