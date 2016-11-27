<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Content-Type:application/json;charset=utf-8');

if(isset($_POST['user'])&&isset($_POST['pasd'])){
	$user=$_POST['user'];
	$pasd=$_POST['pasd'];
	
	$conn=mysqli_connect("localhost","root","","kiven");
	
	mysqli_query($conn,"set names utf8");
	mysqli_query($conn,"set character_set_client=utf8");
	mysqli_query($conn,"set character_set_results=utf8");
	
	$sql="select * from user where usern='$user' and pasd='$pasd' or phone='$user' and pasd='$pasd' or emile='$user' and pasd='$pasd' ";
	
	$result=$conn->query($sql);
	
	//$list = $result-> fetchAll(PDO::FETCH_ASSOC);
	if($result->num_rows>0){
		echo json_encode("success");
	}else{
		echo json_encode("error");
	};
	//echo json_encode("$result");
}