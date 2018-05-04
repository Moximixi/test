$(function () {
    var x = 10, y = 20;
    $("a.tool").mousemove(
        function (e) {
            $("#tooltip").css({
                "top": (e.pageY + y) + "px",
                "left": (e.pageX + x) + "px"
            })
        }
    ).mouseout(function () {
        this.title = this.myTitle;
        $("#tooltip").remove();
    }).mouseover(function (e) {
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip'>" + this.myTitle + "</div>";
        $("body").append(tooltip);
        $("#tooltip").css({
            "top": (e.pageY + y) + "px",
            "left": (e.pageX + x) + "px"
        }).show("fast");//快速显示
    })
})