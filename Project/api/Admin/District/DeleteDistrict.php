<?php

include("../../Connection/Connection.php");

    $district = $_GET["id"];

    if($district!="")
    {
        $delQry = "delete from tbl_district where district_id ='".$district."'";
        if(mysql_query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>