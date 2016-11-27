<?php
require_once "DBConn.php";

$pdo = DBConn::makeConn();

 $sql = "select * from tinfo";

$res = $pdo -> query($sql);
	
$list = $res -> fetchAll(PDO::FETCH_ASSOC);

echo json_encode($list);

?>