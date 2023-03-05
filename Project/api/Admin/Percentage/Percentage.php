<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $percentage = $data->percentage[0];

        if(isset($percentage))
        {
            $ins="insert into tbl_percentage(percentage_value)value('".$percentage."')";
            if(mysql_query($ins))
                {
                    echo "Success";
                }
                else{
                    echo "Failed";
                }
        }




  ?>