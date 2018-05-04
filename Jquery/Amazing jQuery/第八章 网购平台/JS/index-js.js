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
/*图片滚动效果*/
function showImg(index) {
    var $rollbj=$('#jnImageroll');
    var $rolllist=$rollbj.find('div a');
    var newhref=$rolllist.eq(index).attr('href');
    $('#JS_imgWrap').attr("href",newhref)
        .find("img").eq(index).stop(true,true).fadeIn()//缓慢显示，迅速退出
        .siblings().hide();
    $rolllist.removeClass("chos").css("opacity","0.7")
        .eq(index).addClass("chos").css("opacity","1");
}
$(function(){
    var $imgrolls = $("#jnImageroll div a");
    $imgrolls.css("opacity","0.7");
    var len  = $imgrolls.length;
    var index = 0;
    var adTimer = null;
    $imgrolls.mouseover(function(){
        index = $imgrolls.index(this);
        showImg(index);
    }).eq(2).mouseover();//设定初始展示的动画
    //滑入 停止动画，滑出开始动画.
    $('#jnImageroll').hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer = setInterval(function(){
            showImg(index);
            index++;
            if(index==len){index=0;}
        } , 2000);
    }).trigger("mouseleave");
})

/* 超链接文字提示 */
$(function(){
    var x = 10;
    var y = 20;
    $("a.tooltip").mouseover(function(e){
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip'>"+ this.myTitle +"</div>"; //创建 div 元素
        $("body").append(tooltip);	//把它追加到文档中
        $("#tooltip")
            .css({
                "top": (e.pageY+y) + "px",
                "left": (e.pageX+x)  + "px"
            }).show("fast");	  //设置x坐标和y坐标，并且显示
    }).mouseout(function(){
        this.title = this.myTitle;
        $("#tooltip").remove();   //移除
    }).mousemove(function(e){
        $("#tooltip")
            .css({
                "top": (e.pageY+y) + "px",
                "left": (e.pageX+x)  + "px"
            });
    });
})

//品牌滚动显示
function showBrandList(index) {
    var $rollbj=$('#jnBrandList');
    var rollWidth=$rollbj.find('li').outerWidth();//一个图片展示区的宽度
    rollWidth=rollWidth*4;//一个版面的宽度
    $rollbj.stop(true,false).animate({left:-rollWidth*index},1000);
}

$(function () {
    $('#jnBrandTab li a').click(function () {
        $(this).parent().addClass('chos')//给按钮添加颜色
            .siblings().removeClass('chos');
        var idx=$('#jnBrandTab li a').index(this);//将当前按得A的索引找出来
        showBrandList(idx);
        return false;
    }).eq(0).click();
})
/* 滑过图片出现放大镜效果 */
$(function(){
    $("#jnBrandList li").each(function(index){
        var $img = $(this).find("img");
        var img_w = $img.width();
        var img_h = $img.height();
        var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
        $(spanHtml).appendTo(this);
    })
    /*
        $("#jnBrandList").find(".imageMask").live("hover", function(){
            $(this).toggleClass("imageOver");
        });
        */
    $("#jnBrandList").delegate(".imageMask", "hover", function(){
        $(this).toggleClass("imageOver");
    });
})