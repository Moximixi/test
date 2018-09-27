<?php
	require('test_contact.php');//直接导入封装好的连接信息

	$sql="select id,name,age from users";
	$mysqli_result=$mysqli->query($sql);
	//var_dump($mysqli_result);
	if($mysqli_result&&$mysqli_result->num_rows>0){//对象存在，并且里面有内容
		while($row=$mysqli_result->fetch_assoc()){//一行一行的获得结果集中的关联数组
			$rows[]=$row;//把它的每一行放在结果集中
		}
	}
	//print_r($rows);
	?>
<!DOCTYPE html>
<html>
<head>
	<title>通过数据库更新数据表</title>
</head>
<body>
	<h3>用户列表--<a href="addUser.html">添加用户</a></h3>
	<table border="1" cellpadding="0" cellspacing="0" width="80%" bgcolor="#ABCDEF">
		<tr>
			<td>编号</td>
			<td>用户名</td>
			<td>年龄</td>
			<td>操作</td>
		</tr>
		<?php $i=1; foreach($rows as $row): ?><!-- 注意这里的foreach用法 -->
		<tr>
			<td><?php echo $row['id']?></td><!-- 法一:在显示的过程中排序，直接输出$i即可；法二：还是按照数据表里面的来输出 -->
			<td><?php echo $row['name']?></td>
			<td><?php echo $row['age']?></td>
			<td><a href="doAction.php?act=delUser&&id=<?php echo $row['id'];?>">删除</a>|<a href="editUser.php?id=<?php echo $row['id'];?>">更新</a></td>
		</tr>
		<?php $i++;endforeach; ?>

	</table>
</body>
</html>