<?php

include("../Connection/Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);

$username = $_GET["username"];
$password = $_GET["password"];

$list = array();
$lis = "";
$selQry = "select * from tbl_admin where admin_email='".$username."' and admin_password='".$password."'";
$row = mysql_query($selQry);
$data = mysql_fetch_assoc($row);
$count = mysql_num_rows($row);


$selQry1 = "select * from tbl_distributorreg where 	distributor_status=1 and distributor_email='".$username."' and distribuitor_password='".$password."'";
$row1 = mysql_query($selQry1);
$data1 = mysql_fetch_assoc($row1);
$count1 = mysql_num_rows($row1);


$selQry2 = "select * from  tbl_producerreg  where producer_status=1 and producer_email='".$username."' and producer_password='".$password."'";
$row2 = mysql_query($selQry2);
$data2 = mysql_fetch_assoc($row2);
$count2 = mysql_num_rows($row2);


if($count == 1)
{
    $list[]["id"] =  $data["admin_id"];
    $list[]['type'] = "admin";
}
else if($count1 == 1)
{
    $list[]["id"] =  $data1["distributor_id"];
    $list[]['type'] = "distributor";
}
else if($count2 == 1)
{
    $list[]["id"] =  $data2["producer_id"];
    $list[]['type'] = "producer";
}


echo json_encode($list);


?>