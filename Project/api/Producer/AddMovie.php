<?php

include("../Connection/Connection.php");

$request = file_get_contents("php://input");
$data = json_decode($request);


$name = $_POST["name"];
$genre = $_POST["genre"];
$actor = $_POST["actor"];
$actress = $_POST["actress"];
$filimdesc = $_POST["filimdesc"];
$filimbud = $_POST["filimbud"];
$proho = $_POST["proho"];
$platform = $_POST["platform"];
$id = $_POST["platform"];


$post1 = $_FILES["post1"]["name"];
$tmp1 = $_FILES["post1"]["tmp_name"];
move_uploaded_file($tmp1, "../Files/" . $post1);


$post2 = $_FILES["post2"]["name"];
$tmp2 = $_FILES["post2"]["tmp_name"];
move_uploaded_file($tmp2, "../Files/" . $post2);


$post3 = $_FILES["post3"]["name"];
$tmp3 = $_FILES["post3"]["tmp_name"];
move_uploaded_file($tmp3, "../Files/" . $post3);



$path1 = "http://localhost/Bioscoop/Project/api/Files/" . $post1;
$path2 = "http://localhost/Bioscoop/Project/api/Files/" . $post2;
$path3 = "http://localhost/Bioscoop/Project/api/Files/" . $post3;


$insQry = "insert into  tbl_addfilm(
    film_name
,genre_id,
film_actor
,film_actress
,producer_id,
film_description,
film_budget,
film_poster1,
film_poster2,
film_poster3,
film_banner,
platform_id)values('" .
 $name . "','" . 
 $genre . "','" .
  $actor . "','" .
   $actress . "','" . 
   $id . "','" . 
   $filimdesc . "','" .
    $filimbud . "','" . 
    $path1 . "','" . 
    $path2 . "','" . 
    $path3 . "','" . 
    $proho . "','" . 
    $platform . "')";
if(mysql_query($insQry))
{
    echo "True";
}
else{
    echo "False";
} 
