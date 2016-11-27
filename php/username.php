<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Content-Type:application/json;charset=utf-8');

$user = array(
	"username" => "王静雪",
	"money" => "100000",
	"usemoney" => "70000",
	"tx" => "3000",
	);
$user2 = array(
     "username" => "段斐",
	"money" => "200000",
	"usemoney" => "170000",
	"tx" => "3000",
);	
$id = $_GET['id'];

if($id==1){
	echo json_encode($user);
};
if($id==2){
	echo json_encode($user2);
}













?>