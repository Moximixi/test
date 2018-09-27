<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="UTF-8">
    <title>注册界面</title>
    <link rel="stylesheet" href="style/index_style.css">
</head>
<body>
    <header>
        <img src="images/关闭.png">
        <span>优惠报名</span>
        <img src="images/分享.png">
    </header>
    <content>
        <div>
            <span>姓名:</span>
            <input type="text" placeholder="请输入您的姓名"/>
        </div>
        <div>
            <span>性别:</span>
            <form>
                <input type="radio" name="sex" value="male">男
                <input type="radio" name="sex" value="female">女
            </form>
        </div>
        <div>
            <span>电话号码:</span>
            <input type="text" placeholder="请输入您的手机号码"/>
        </div>
        <div>
            <span>优惠项目:</span>
            <select name="event">
                <option value="项目一">项目一</option>
                <option value="项目二">项目二</option>
                <option value="项目三">项目三</option>
                <option value="项目四">项目四</option>
            </select>
        </div>
        <div>
            <span>邀请码:</span>
            <input type="text" placeholder="请输入你的邀请码"/>
        </div>
        <div>
            <span>验证码:</span>
            <input type="text" placeholder="请根据下图输入验证码"/>
        </div>
        <div>
            <img src="auth_code.php?r=<?php echo rand();?>" alt="验证码" id="mg">
            <a href="javascript:void(0)" onclick="document.getElementById('mg').src='auth_code.php?r='+Math.random()">看不清，换一个</a>
<!--            先让超链接a点击不发生任何反应，然后给img的src赋给任意一个值来刷新-->
        </div>
    </content>
    <footer>
        <a href="#" id="btn">提交</a>
    </footer>

    <script>
        document.getElementById("btn").onclick=function(){
            alert("恭喜你！注册成功！")
        }
    </script>

    <!--下次任务-->
    <!--1.搞定验证码-->
    <!--2.UI优化-->
</body>
</html>