<?php
	//连接数据的信息
	$mysqli=@new mysqli('localhost','root','root','test');
	if($mysqli->connect_errno){
	die('Connect error:'.$mysqli->connect_error);
}
	// else{
	// 	echo '连接成功！';
	// }
	$mysqli->set_charset('utf8');