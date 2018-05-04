//搜索框placeholder函数
$(function () {
    $('#inputSearch').focus(function () {
        if(this.value==this.defaultValue)
            this.value='';
    }).blur(function () {
        if(this.value=='')
            this.value=this.defaultValue;
    }).keyup(function (e) {
        if(e.which==13)//如果按下后松开的是回车键
            alert('输入搜索完成');
    })
})
//网页换肤
$(function(){
    var $li =$("#skin li");
    $li.click(function(){
        switchSkin( this.id );
    });
    var cookie_skin = $.cookie("MyCssSkin");
    if (cookie_skin) {
        switchSkin( cookie_skin );
    }
});
function switchSkin(skinName) {
    $('#'+skinName).addClass("selected").siblings().removeClass("selected");
    $("#cssfile").attr("href","CSS/skin/"+skinName+".css");//少了那么一个正斜线/，是不是傻?!
    $.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
}
//导航栏下拉菜单效果
$(function () {
    $('#nav li').hover(function () {
        $(this).find('.jnNav').show();
    },function () {
        $(this).find('.jnNav').hide();
    })
})
/*热销效果*/
$(function () {
    $('.jnCatainfo .promoted').append('<s class="hot"></s>');
})
/**/