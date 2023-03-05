<?php

include("../Connection/Connection.php");

    $district = $_GET["id"];

    if($district!="")
    {
        $delQry = "update tbl_rights set right_status='2' where right_id ='".$district."'";
        if(mysql_query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>