$(function () {
    var i=4;//一页有4个
    var page=1;//初始页数为1
    $('span.next').click(function () {
        var $parents=$(this).parents("div.v_show");
        var $v_show=$parents.find("div.v_content_list");
        var $v_content=$parents.find("div.v_content");
        var v_width=$v_content.width();//视频浏览区的边框长度
        var len=$v_show.find("li").length;//总的照片数量
        var page_cout=Math.ceil(len/i);//最大页数

        if(page==page_cout){//到了最后一页
            $v_show.animate({left:'0px'},"slow");
            page=1;
        }
        else {
            $v_show.animate({left:-page*v_width},"slow");
            page++;
        }
        $parents.find("span").eq(page-1).addClass("current").siblings().removeClass("current");//给当前圆点添加样式，并且去掉它的兄弟节点的样式
    })
    $('span.prev').click(function () {
        var $parents=$(this).parents("div.v_show");
        var $v_show=$parents.find("div.v_content_list");
        var $v_content=$parents.find("div.v_content");
        var v_width=$v_content.width();//视频浏览区的边框长度
        var len=$v_show.find("li").length;//总的照片数量
        var page_cout=Math.ceil(len/i);//最大页数

        if(page==1){
            $v_show.animate({left:-(page_cout-1)*v_width},"slow");
            page=page_cout;
        }
        else {
            $v_show.animate({left:-(page-2)*v_width},"slow");
            page--;
        }
        $parents.find("span").eq(page-1).addClass("current").siblings().removeClass("current");//给当前圆点添加样式，并且去掉它的兄弟节点的样式
    })
})