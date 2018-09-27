<?php
header('content-type:text/html;charset=utf-8');
$username=$_POST['username'];
$password=$_POST['password'];
$password1=$_POST['password1'];
$verify=trim(strtolower($_POST['verify']));
$verify1=trim(strtolower($_POST['verify1']));//将两个验证码都转换成小写(strtolower)，并且去掉空格(trim)！方便比较
$eail=$_POST['email'];
$fav=$_POST['fav'];
$warn='<span style="color:red">Error:</span>';
if(!empty($fav))
	//echo join(',',$fav);
	//print_r($fav);
	$fav1=join(',',$fav);//让数组里面的值用‘,’连接成字符串
$fisrtone=ord(substr($username, 0,1));//substr()截取字符串函数
$length=strlen($username);
$length2=strlen($password);
$tryagin='<a href="realTest.php">重新填表</a>';
$fiall=true;
$success='<span style="color:green">恭喜你，注册成功！</span>';

//检验用户名
if(!(($fisrtone>=65&&$fisrtone<=90)||($fisrtone>=97&&$fisrtone<=122))){
		echo($warn.'请确保你的用户名首字符是字母'.$tryagin);
		$fiall=false;
		echo '<br>';
	}
if(!($length>=6&&$length<=10)){
	echo($warn.'你的用户名字长度应该在6-10之间'.$tryagin);
	$fiall=false;
	echo '<br>';
}
//检验密码
if(!($length2>=6&&$length2<=10)){
	echo($warn.'你的密码长度应该在6-10之间'.$tryagin);
	$fiall=false;
	echo '<br>';
}
//确认密码
if(strcmp($password,$password1)!==0){//strcmp函数,比较两个字符串是否相等
	echo($warn.'你的两次密码不一致，请重新输入'.$tryagin);
	$fiall=false;
	echo '<br>';
}
//检验邮箱
if(strpos($eail, '@')==false){//strops函数，返回字符第一次出现的地方
	echo($warn.'你的邮箱格式不对，请重新输入'.$tryagin);
	$fiall=false;
	echo '<br>';
}
/*验证码*/
if(strcmp($verify,$verify1)!==0){//又是眼镜看花，ver看成var....
	echo($warn.'你的验证码不对，请重新输入'.$tryagin);
	$fiall=false;
	echo '<br>';
}

if($fiall===true)//成功的情况
	echo $success;
?>


<!DOCTYPE html>
<html>
<head>
	<title>结果界面</title>
</head>
<body>
	<h3>注册信息如下:</h3>
	<table border='1' width="80%">
		<tr>
			<td>用户名</td>
			<td>密码</td>
			<td>确认密码</td>
			<td>邮箱</td>
			<td>兴趣爱好</td>
		</tr>
		<tr>
			<td><?php echo $username;?></td>
			<td><?php echo $password;?></td><!--md5()和sha1()都是加密函数，计算字符串的散列值-->
			<td><?php echo $password1;?></td>
			<td><?php echo $eail;?></td>
			<td><?php echo $fav1;?></td>
		</tr>
	</table>
</body>
</html>