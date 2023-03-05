<?php

include("../../Connection/Connection.php");

    $id = $_GET["id"];

    if($id!="")
    {
        $delQry = "update tbl_distributorreg set distributor_status=2,dis_status='Rejected' where distributor_id ='".$id."'";
        if(mysql_query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>