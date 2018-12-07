//显示导航栏函数
$(function () {
    var $jnNav=$('#nav li');
    $jnNav.find('.jnNav').hide();//先让外面的藏起来
    $jnNav.hover(function () {
        $(this).find('.jnNav').show();
    },function () {
        $(this).find('.jnNav').hide();
    })
})



