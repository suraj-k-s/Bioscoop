<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    
    $platform = $data->platform[0];

        if(isset($platform))
        {
            $ins="insert into tbl_platform(platform_name)value('".$platform."')";
            
            if(mysql_query($ins))
                {
                    echo "Success";
                }
                else{
                    echo "Failed";
                }
        }




  ?>