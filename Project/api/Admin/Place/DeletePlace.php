<?php

include("../../Connection/Connection.php");

    $place = $_GET["id"];

    if($place!="")
    {
        $delQry = "delete from tbl_place where place_id ='".$place."'";
        if(mysql_query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>