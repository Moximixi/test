<?php
	//控制中心
	header('content_type:text/html;charset=utf-8');
	require('test_contact.php');
	@$username=$_POST['username'];
	@$username=$mysqli->escape_string($username);//转义用户名中的特殊字符，例如单双引号
	@$password=md5($_POST['password']);
	@$age=$_POST['age'];
	$act=$_GET['act'];//这里的get方法
	@$id=$_GET['id'];

// 6分钟
switch($act){
	case 'addUser'://添加用户
		$sql="insert users(name,age) values('$username','$age')";
		$res=$mysqli->query($sql);
		if($res){
				$insert_id=$mysqli->insert_id;
				echo "<script type='text/javascript'>
						alert('恭喜你,你是网站的第{$insert_id}位用户');
						location.href='user_list.php';
				</script>";
		}else{
			echo "<script type='text/javascript'>
					alert('添加失败,重新添加');
					location.href='addUser.html';
			</script>";
		}
		break;
	case 'delUser'://删除用户
		$sql="delete from users where id=".$id;
		$res=$mysqli->query($sql);
		if($res){
				echo "<script type='text/javascript'>
						alert('恭喜你,成功删除第'+$id+'位用户');
						location.href='user_list.php';
				</script>";
		}else{
			echo "<script type='text/javascript'>
					alert('删除失败');
					location.href='user_list.php';
			</script>";
		}
		break;
	case 'editUser'://编辑用户
		$sql="update users set name='{$username}',age='{$age}' where id=".$id;//这里必须加''号和大括号：表示里面是变量
		$res=$mysqli->query($sql);
		if($res){
				echo "<script type='text/javascript'>
						alert('恭喜你,成功更新第'+$id+'位用户');
						location.href='user_list.php';
				</script>";//js里面用+来连接
		}else{
			echo "<script type='text/javascript'>
					alert('更新失败');
					location.href='editUser.php';
			</script>";
		}
		break;
}