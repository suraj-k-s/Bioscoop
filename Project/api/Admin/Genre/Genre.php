<?php

include("../../Connection/Connection.php");

    $request = file_get_contents("php://input");
    $data = json_decode($request);
    $genre = $data->genre[0];

        if(isset($genre))
        {
            $ins="insert into tbl_genre(genre_name)value('".$genre."')";
            if(mysql_query($ins))
                {
                    echo "Success";
                }
                else{
                    echo "Failed";
                }
        }




  ?>