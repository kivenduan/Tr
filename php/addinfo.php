<?php
require_once "DBConn.php";

$pdo = DBConn::makeConn();

$time="2016-11-23 15:23:34";
$name="充值";
$num="201611230045";
$state="成功";
$sum="+".$_POST["czje"];

//echo json_encode("$sum");

$sql="insert into tinfo values(null,'$time','$name','$num','$sum','$state')";

$res = $pdo -> exec($sql);

if($res){
	echo json_encode("succes");
}else{
	echo json_encode("error");
}
?>