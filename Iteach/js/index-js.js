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

//搜索框placeholder函数
$(function () {
    $('#inputSearch').focus(function () {
        if(this.value==this.defaultValue)
            this.value='';
    }).blur(function () {
        if(this.value=='')
            this.value=this.defaultValue;
    })
})

