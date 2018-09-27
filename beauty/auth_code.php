<?php
$image=imagecreatetruecolor(100,38);//创建画布
$bgcolor=imagecolorallocate($image,255,255,255);//白色的背景颜色
imagefill($image,0,0,$bgcolor);

$captch_code='';//用于存储验证码的变量

//创造验证码
for($i=0;$i<4;$i++){
    $font=10;
    $x=($i*100/4)+rand(5,10);//每个元素之间横向距离是25px
    $y=rand(5,10);
    $data='abcdefghijklmnopqrstuvwxyz1234567890';//数据库
    $fontcontent=substr($data,rand(0,strlen($data)),1);//从数据库里面获取一个字符
    $captch_code.=$fontcontent;//将每个字符串放在数据变量中
    $fontcolor=imagecolorallocate($image, rand(0, 120), rand(0, 120), rand(0, 120));//每个字体颜色不一样
    imagestring($image,$font,$x,$y,$fontcontent,$fontcolor);
}

//增加干扰点
for($i=0;$i<200;$i++){
    $pointcolor=imagecolorallocate($image,rand(0, 255), rand(0, 255), rand(0, 255));
    imagesetpixel($image,rand(1,99),rand(1,38),$pointcolor);
}
//增加干扰线
for ($i = 0; $i < 3; $i++) {
    $linecolor = imagecolorallocate($image, rand(0, 255), rand(0, 255), rand(0, 255));
    imageline($image, rand(1, 99), rand(1, 38), rand(1, 99), rand(1, 38), $linecolor);
}
//增加干扰圆弧
for ($i = 0; $i < 3; $i++) {
    $roundcolor = imagecolorallocate($image, rand(0, 255), rand(0, 255), rand(0, 255));
    imagearc($image, mt_rand(0, 100), mt_rand(0, 38), mt_rand(0, 100 / 2), mt_rand(0, 38 / 2), mt_rand(0, 360), mt_rand(0, 360), $roundcolor);
}

//输出格式
header('content-type:image.png');
imagepng($image);

//销毁图片
imagedestroy($image);