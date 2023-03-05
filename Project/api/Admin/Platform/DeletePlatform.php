<?php

include("../../Connection/Connection.php");

    $platform = $_GET["id"];

    if($platform!="")
    {
        $delQry = "delete from tbl_platform where platform_id ='".$platform."'";
        if(mysql_query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>