function highlightRows() {
    var temp = document.getElementsByTagName("tr");
    for (var i = 0; i < temp.length; i++) {
        temp[i].onmouseover = function () {
            this.style.fontWeight = "bold";
        }
        temp[i].onmouseout = function () {
            this.style.fontWeight = "normal";
        }
    }
}

addLoadEvent(highlightRows);
/**
 *
 *
 onmousedown    鼠标按钮被按下。
 onmousemove    鼠标被移动。
 onmouseover    鼠标移到某元素之上。
 onmouseout    鼠标从某元素移开。
 onmouseup    鼠标按键被松开。
 */
