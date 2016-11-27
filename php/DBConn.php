<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST,GET');
header('Access-Control-Max-Age:60');
header('Access-Control-Allow-Headers:x-requested-with,content-type');
header('Content-Type:application/json;charset=utf-8');


class DBConn{
	private static $DBConn = null;

	public static function makeConn(){
		if (self::$DBConn == null) {
			try{
				$pdo = new PDO("mysql:host=localhost;dbname=kiven","root","");
				 $pdo ->query("SET NAMES utf8");
	             $pdo ->exec('SET NAMES utf8');
				
				self::$DBConn = $pdo;
				
			}catch(PDOException $e){
				echo $e ->getMessage();
			}
		}

		return self::$DBConn;
	}
}

?>