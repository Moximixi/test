<?php
	$str='qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM123456789';
	$check='';
	for($i=0;$i<4;$i++){
		$check.='<span style="color:rgb('.rand(0,255).','.rand(0,255).','.rand(0,255).')">'.$str[rand(0,strlen($str)-1)].'</span>';//是rand！谢谢！
	}



?>

<!DOCTYPE html>
<html>
<head>
	<meta charset='utf-8'>
	<title>注册界面</title>
</head>
<body>
	<h1>注册界面</h1>
	<form method="post" action="doAction.php">
		<table border='1' cellspacing='0' cellpadding="0" width="80%" bgcolor='#ABCDEF'>
			<tr>
				<td>用户名</td>
				<td><input type='text' name='username' id='' placeholder="请输入合法的用户名">用户名首字母以字母开始，并且长度6-10</td>
			</tr>
			<tr>
				<td>密码</td>
				<td><input type='password' name='password' id='' placeholder="请输入密码">密码长度6-10</td>
			</tr>
			<tr>
				<td>确认密码</td>
				<td><input type="password" name='password1'
					id='' placeholder="请输入确认密码">
				两次密码需要保持一致</td>
			</tr>
			<tr>
				<td>邮箱</td>
				<td><input type='text' name='email' id='' placeholder="请输入合法的邮箱">邮箱必须包含@,eg:1132908112@163.com</td>
			</tr>
			<tr>
				<td>兴趣爱好</td>
				<td>
					<input type='checkbox' name='fav[]' id='' value='php'>PHP
					<input type='checkbox' name='fav[]' id='' value='c'>C
					<input type='checkbox' name='fav[]' id='' value='c++'>C++
					<input type='checkbox' name='fav[]' id='' value='java'>Java<br>
					<input type='checkbox' name='fav[]' id='' value='javascript'>Javascript
					<input type='checkbox' name='fav[]' id='' value='python'>Python
					<input type='checkbox' name='fav[]' id='' value='c#'>C#
				</td>
			</tr>
			<tr>
				<td>验证码</td>
				<td><input type='text' name='verify' id=''><?php echo $check;?>
					<input type='hidden' name='verify1' value='<?php echo strip_tags($check);?>'><!--通过隐藏域来传递真实验证码,并且通过strip_tags()函数去掉了原生验证码里面的PHP-->
				</td>
			</tr>
			<tr>
				<td><button>立即注册</button></td>
				<td></td>
			</tr>
		</table>
	</form>
</body>
</html>
 