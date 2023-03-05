<?php

include("../../Connection/Connection.php");

    $genre = $_GET["id"];

    if($genre!="")
    {
        $delQry = "delete from tbl_genre where genre_id ='".$genre."'";
        if(mysql_query($delQry))
        {
            echo "Success";
        }
        else{
            echo "Failed";
        }
    }



?>