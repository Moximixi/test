function displayCitations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;//检测环节

    var quotes = document.getElementsByTagName("blockquote");

    for (var i = 0; i < quotes.length; i++) {
        if (!quotes[i].getAttribute("cite")) continue;//如果没有引用网址，立刻进入下一次循环
        //取得所有blockquote的引用网址
        var url = quotes[i].getAttribute("cite");
        var quoteChildren = quotes[i].getElementsByTagName("*");
        if (quoteChildren.length < 1) continue;//如果没有子元素，立刻进入下一次循环
        //准确无误的取得子元素中的最后一个元素
        var elem = quoteChildren[quoteChildren.length - 1];
        //创建标记
        var link = document.createElement("a");
        var link_text = document.createTextNode("引用网址");
        link.appendChild(link_text);
        link.setAttribute("href", url);
        // var superscript=document.createElement("sup");
        // superscript.appendChild(link);
        //将链接放在最后一个元素里面
        elem.appendChild(link);
    }
}

addLoadEvent(displayCitations);