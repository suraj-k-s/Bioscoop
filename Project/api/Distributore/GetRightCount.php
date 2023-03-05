<?php

include("../Connection/Connection.php");
$i = 0;
$j = 0;
$list = array();
$selQry = "SELECT count(right_id) as rid FROM tbl_rights r inner join  tbl_distributorreg d on d.distributor_id=r.distributor_id where right_status=0";
$row = mysql_query($selQry);
while($data = mysql_fetch_assoc($row))
{
    $i++;
    $list[] =  $data;
    $list[$j]['id'] = $i;
    $j++;
}
echo json_encode($list);


?>