<?php 
    header("content-type:text/html;charset=utf-8");
    session_start();
    $name = isset($_SESSION['name']) ? $_SESSION['name'] : '';
    if($name!=''&&$name!="0"){
        echo "<script>window.location ='index.php'</script>";
    }
 ?>
<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
    <meta name="description" content="��¼����" name="viewport"
          content="width=device-width,initial-scale=1"/>
    <title>��¼����</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <script src="bootstrap/js/jquery-3.1.1.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="css/jq22.css">
    <link rel="stylesheet" href="css/login_style.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/main.js"></script>

</head>
<body>
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="container-fluid">
            <div class="navber-header navbar-left"><!--ͼ�겿��-->
                <a class="navber-brand" href="#"> <img class='logo' src="img/logo4.png"></a>

            </div>
            <ul class="nav navbar-nav"><!--�˵�����-->
                <li><a href="index.php">��ҳ</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">�γ� <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="Total_Video.html">����</a></li>
                        <li><a href="Video.html">��ѧ</a></li>
                        <li><a href="Video.html">����</a></li>
                        <li><a href="Video.html">��ѧ</a></li>
                    </ul>
                </li>
                <li><a href="About_Us.html">���</a></li>
                <li><a href="#">����</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right"><!--��¼ע��-->
                <li><a href="mySetting.html"><span class="glyphicon glyphicon-user"></span>&nbsp�ҵ�</a></li>
                <li class="active"><a href="login.html"><span class="glyphicon glyphicon-log-in"></span>&nbsp��¼</a></li>
            </ul>
            <form class="navbar-form navbar-right" role="search"><!--������-->
                <div class="form-group">
                    <input type="text" class="form-control" id="inputSearch" value="�����γ�....">
                </div>
                <button type="submit" class="btn btn-default">����</button>
            </form>
        </div>
    </div>
</nav><!--������-->
<div class="container">
    <div class="row">
        <div class="col-xs-5 left1">
            <img src="img/logo_left.png">
        </div>
        <div class='col-xs-7' id="login">
            <div class="wrapper">
                <div class="login">
                    <form action="#" method="post" class="container offset1 loginform">
                        <div id="owl-login">
                            <div class="hand"></div>
                            <div class="hand hand-r"></div>
                            <div class="arms">
                                <div class="arm"></div>
                                <div class="arm arm-r"></div>
                            </div>
                        </div>
                        <div class="pad">
                            <input type="hidden" name="_csrf" value="9IAtUxV2CatyxHiK2LxzOsT6wtBE6h8BpzOmk=">
                            <div class="control-group">
                                <div class="controls">
                                    <label for="email" class="control-label fa fa-envelope"></label>
                                    <input id="email" type="email" name="email" placeholder="�������������" tabindex="1"
                                           autofocus="autofocus" class="form-control input-medium">
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="controls">
                                    <label for="password" class="control-label fa fa-asterisk"></label>
                                    <input id="password" type="password" name="password" placeholder="�������������" tabindex="2"
                                           class="form-control input-medium">
                                </div>
                            </div>
                        </div>
                        <div class="form-actions"><a href="#" tabindex="5" class="btn pull-left btn-link text-muted">��������?</a>
							<a href="register.html" tabindex="6" class="btn btn-link text-muted">ע��</a>
                            <button type="submit" tabindex="4" onclick="doLogin()" class="btn btn-primary">��¼</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div><!--���岿��-->

<div class="container">
    <nav class="navbar-fixed-bottom">
        <div class="row text-center icon1">
            <a href="#"><img src="img/wechat.png"></a>
            <a href="#"><img src="img/sina.png"></a>
            <a href="#"><img src="img/qq.png"></a>
            <a href="#"><img src="img/google.png"></a>
        </div>
        <div class="row text-center">
            <p><a href="About_Us.html">�������� </a>|<a href="#"> �������� </a>|<a href="#"> ��ϵ���� </a></p>
        </div>
        <div class="row">
            <p class="text-center">Copyright@2013-2018 By Liuwenxiao</p>
        </div>
    </nav>
</div><!--�ײ�-->

<script src="js/jquery.min.js"></script>
<script>
    $(function () {

        $('#login #password').focus(function () {
            $('#owl-login').addClass('password');
        }).blur(function () {
            $('#owl-login').removeClass('password');
        });
    });
    var doLogin=function(){
        var name=document.getElementById('email').value;
        var pwd=document.getElementById('password').value;
        var url="./action/login.php?name="+name+'&pwd='+pwd;
        window.location=url;
    }
</script>
</body>
</html>