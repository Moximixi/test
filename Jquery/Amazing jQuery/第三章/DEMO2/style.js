$(function () {
    var x = 10, y = 20;
    $("a.tool").mousemove(
        function (e) {
            $("#tooltip").css({
                "top": (e.pageY + y) + "px",
                "left": (e.pageX + x) + "px"
            })
        }
    )
    $("a.tool").mouseout(function () {
        $("#tooltip").remove();
        this.title = this.myTitle;
    })
    $("a.tool").mouseover(function (e) {
        this.myTitle = this.title;
        this.title = "";//取消原来的title自带显示效果
        this.photo = this.myTitle ? "<br/>" + this.myTitle : "";
        var tooltip = $("<div id='tooltip'><img src=" +this.href+ " alt='产品预览图'/>" + this.photo + "<\/div>");
        $("body").append(tooltip);
        $("#tooltip").css({
            "top": (e.pageY + y) + "px",
            "left": (e.pageX + x) + "px"
        }).show("fast");//快速显示
    })
})