function prepareSlideshow() {
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id", "slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src", "topics.gif");
    preview.setAttribute("alt", "building block!");
    preview.setAttribute("id", "preview");
    slideshow.appendChild(preview);

    // var preview = document.getElementById("preview");
    //  preview.style.position = "absolute";
    //  preview.style.left = "0px";
    //  preview.style.top = "0px";//设置长条图的position为absolute，并且与上边和左边对齐

    var list = document.getElementById("linklist");
    insertAfter(slideshow, list);
    var lists = list.getElementsByTagName("a");

    lists[0].onmouseover = function () {
        moveElement("preview", -100, 0, 10);//实参全部加引号好像也没有问题
    }
    lists[1].onmouseover = function () {
        moveElement("preview", -200, 0, 10);
    }
    lists[2].onmouseover = function () {
        moveElement("preview", -300, 0, 10);
    }
}

addLoadEvent(prepareSlideshow);
/**
 *问题：
 * 1.slideshow后面忘记加appendchild，把preview连上!
 * 2.忘记在css里面给滚动图片设置position：absolute！
 * 3.movement函数很多没写！没有清空上次偏移，没有设置top，left初始值，没有应用快速偏移法！当然运行不出来了！
 */
