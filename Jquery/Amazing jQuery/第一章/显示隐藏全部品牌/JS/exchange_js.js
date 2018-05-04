$(function () {
    var $last5=$("ul li:gt(5):not(last)");
    $last5.hide();
    var $togglenBtn=$(".showmore a");
    $togglenBtn.click(function () {
        if($last5.is(":visible")){
            $last5.hide();
            $(this).find("span")
                .css("background","url(../IMG/down.gif)no-repeat 0 0")
                .text("显示全部品牌");
            $("ul li").removeClass("promoted");
        }
        else {
            $last5.show();
            $(this).find("span")
                .css("background","url(../IMG/up.gif)no-repeat 0 0")
                .text("隐藏部分品牌");
            $("ul li").filter(":contains(佳能),:contains(尼康)").addClass("promoted");
        }
        return false;
    })
})