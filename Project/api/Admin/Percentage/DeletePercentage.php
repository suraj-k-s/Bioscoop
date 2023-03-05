<?php

include("../../Connection/Connection.php");

    $percentage = $_GET["id"];

    if($percentage!="")
    {
        $delQry = "delete from tbl_percentage where percentage_id ='".$percentage."'";
        if(mysql_query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>