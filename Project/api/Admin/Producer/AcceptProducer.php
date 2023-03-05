<?php

include("../../Connection/Connection.php");

    $id = $_GET["id"];

    if($id!="")
    {
        $delQry = "update tbl_producerreg set producer_status=1,produ_status='Accepted' where producer_id ='".$id."'";
        if(mysql_query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>