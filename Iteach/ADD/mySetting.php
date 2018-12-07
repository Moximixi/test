<?php 
  session_start();
  $name = isset($_SESSION['name']) ? $_SESSION['name'] : '';
  $sex  = isset($_SESSION['sex']) ? $_SESSION['sex'] : '';
  $sign = isset($_SESSION['sign']) ? $_SESSION['sign'] : '';
  $headurl=isset($_SESSION['head_url']) ? $_SESSION['head_url'] : 'head.png';
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>我的设置</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <script src="bootstrap/js/jquery-3.1.1.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="layui/css/layui.css">
    <script src="js/layer.js"></script>
    <link rel="stylesheet" href="css/main.css">
    <script src="js/main.js"></script>
    <link rel="stylesheet" href="css/mySetting_sytle.css">

</head>
<body>
  <script type="text/javascript">
        var logout=function(){
           layer.msg('您确定注销吗？', {
              time: 20000, //20s后自动关闭
              btn: ['确定', '取消'],
              yes: function(){
               window.location="action/ac.php?ac=1";
              }
            });
        }
    </script>
<nav class="navbar navbar-default" role="navigation">
    <div class="container">
        <div class="container-fluid">
            <div class="navber-header navbar-left"><!--图标部分-->
                <a class="navber-brand" href="#"> <img class='logo' src="img/logo4.png"></a>

            </div>
            <ul class="nav navbar-nav">
                <li><a href="index.php">首页</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">课程 <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="Total_Video.php">总览</a></li>
                        <li><a href="Video.php">语文</a></li>
                        <li><a href="Video.php">数学</a></li>
                        <li><a href="Video.php">地理</a></li>
                    </ul>
                </li>
                <li><a href="About_Us.php">简介</a></li>
                <li><a href="#">社区</a></li>
            </ul><!--菜单部分-->
            <ul class="nav navbar-nav navbar-right"><!--登录注册-->
                <li class="active"><a href="mySetting.php"><span class="glyphicon glyphicon-user"></span>&nbsp我的</a>
                </li>
               <?php 
                if($name==null||$name=='0'){
                    echo '<li><a href="login.php"><span class="glyphicon glyphicon-log-in"></span>&nbsp登录</a></li>';
                } else{
                    echo '<li><a href="#" onclick="logout()">&nbsp&nbsp你好，'.$name.'</a></li>';
                }
                ?>
            </ul>
            <form class="navbar-form navbar-right" role="search"><!--搜索框-->
                <div class="form-group">
                    <input type="text" class="form-control" id="inputSearch" value="搜索课程....">
                </div>
                <button type="submit" class="btn btn-default">搜索</button>
            </form>
        </div>
    </div>
</nav><!--导航栏-->
<div class="content">
    <div class="container">
        <div class="row">
            <img src="headurl/<?php echo $headurl; ?>" class="img-circle pull-left">
            <span><b>用户名：  <?php echo $name; ?></b></span><br>
            <span>性别： <?php if($sex==1){echo "男";}else{echo "女";} ?></span><br>
            <span>个性签名: <?php echo $sign; ?></span>

             <button class="btn btn-success pull-right"><a href="mySetting2.html"><img src="img/setting2.png">个人设置</a></button>
            <button class="btn btn-info pull-right"><a href="Up_video.html"><img src="img/video.png">上传视频</a></button>
        </div>
    </div>
</div>
<div class="myseeting">
   <div class="container">
       <div class="col-xs-4">
           <ul class="nav nav-pills nav-stacked">
               <li class="active"><a href="#">课程</a></li>
               <li><a href="#">收藏</a></li>
               <li><a href="#">笔记</a></li>
               <li><a href="#">实战</a></li>
               <li><a href="#">问题</a></li>
           </ul>
       </div>
       <div class="col-xs-8">
           <ul class="layui-timeline">
               <li class="layui-timeline-item">
                   <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                   <div class="layui-timeline-content layui-text">
                       <h3 class="layui-timeline-title">8月18日</h3>
                       <p>
                           学习课程：《走进前端》
                       </p>
                   </div>
               </li>
               <li class="layui-timeline-item">
                   <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                   <div class="layui-timeline-content layui-text">
                       <h3 class="layui-timeline-title">8月16日</h3>
                       <p>
                           学习课程：《走进前端》
                       </p>
                   </div>
               </li>
               <li class="layui-timeline-item">
                   <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                   <div class="layui-timeline-content layui-text">
                       <h3 class="layui-timeline-title">8月15日</h3>
                       <p>
                           学习课程：《走进前端》
                       </p>
                   </div>
               </li>
               <li class="layui-timeline-item">
                   <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                   <div class="layui-timeline-content layui-text">
                       <h3 class="layui-timeline-title">8月14日</h3>
                       <p>
                           学习课程：《走进前端》
                       </p>
                   </div>
               </li>
               <li class="layui-timeline-item">
                   <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                   <div class="layui-timeline-content layui-text">
                       <h3 class="layui-timeline-title">8月13日</h3>
                       <p>
                           学习课程：《走进前端》
                       </p>
                   </div>
               </li>
               <li class="layui-timeline-item">
                   <i class="layui-icon layui-timeline-axis">&#xe63f;</i>
                   <div class="layui-timeline-content layui-text">
                       <div class="layui-timeline-title">过去</div>
                   </div>
               </li>
           </ul>
       </div>
   </div>
</div>

<div class="container">
    <nav class="navbar-fixed-bottom">
        <div class="row text-center icon1">
            <a href="#"><img src="img/wechat.png"></a>
            <a href="#"><img src="img/sina.png"></a>
            <a href="#"><img src="img/qq.png"></a>
            <a href="#"><img src="img/google.png"></a>
        </div>
        <div class="row text-center">
            <p><a href="About_Us.php">关于我们 </a>|<a href="#"> 加入我们 </a>|<a href="#"> 联系我们 </a></p>
        </div>
        <div class="row">
            <p class="text-center">Copyright@2013-2018 By Liuwenxiao</p>
        </div>
    </nav>
</div><!--底部-->
</body>
</html>