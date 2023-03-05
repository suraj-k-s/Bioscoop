<?php

include("../../Connection/Connection.php");

    $id = $_GET["id"];

    if($id!="")
    {
        $delQry = "update tbl_distributorreg set distributor_status=1,dis_status='Accepted' where distributor_id ='".$id."'";
        if(mysql_query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>