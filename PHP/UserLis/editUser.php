<?php
	require('test_contact.php');
	$id=$_GET['id'];
	$sql="select id,name,age from users where id=".$id;
	$res=$mysqli->query($sql);
	if($res&&$res->num_rows>0){
		$row=$res->fetch_assoc();
		//print_r($row);
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
<h2>编辑用户</h2>
<form action="doAction.php?act=editUser&&id=<?php echo $id?>" method="post"><!-- form！！！ -->
	<table border="1" width="80%" cellspacing="0" cellpadding="0" bgcolor="#ABCDEF">
		<tr>
			<td>用户名</td>
			<td><input type="text" name="username" value="<?php echo $row['name']?>" required="required"></td>
		</tr>
		<tr>
			<td>密码</td>
			<td><input type="password" name="password" placeholder="请输入正确的密码" required="required"></td>
		</tr>
		<tr>
			<td>年龄</td>
			<td><input type="number" name="age" min="1" max="120" value="<?php echo $row['age']?>" required="required"></td>
		</tr>
		<tr>
			<td colspan="2"><input type="submit" value="编辑用户"></td>
		</tr>
	</table>
</form>

</body>
</html>
