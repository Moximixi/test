function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

function highlightPage() {//高亮当前导航栏函数
    var nav = document.getElementById("navigation");
    var links = nav.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        var linkurl = links[i].getAttribute("href");//取得当前a的href
        var currenturl=window.location.href;
        if (currenturl.indexOf(linkurl) != -1) {//将当前网址与a的href进行比较
            links[i].className = "here";

        }
    }
}

addLoadEvent(highlightPage);

/**
 *问题:
 * 1.这个html文档里面<a>根本没有在header里面！坑人！
 */
