function addClass(Element, value) {
    if (!Element.className)//如果这个节点没有设置class
        Element.className = value
    else {//这个节点存在class
        Element.className += " ";//先加上空格再添加新的class
        Element.className += value;
    }
}

function stripeTables() {
    var tables = document.getElementsByTagName("table");//把所有的表格做成一个数组
    for (var i = 0; i < tables.length; i++) {//在一个数组中
        var odd = false;//首行是单数行，所以是false
        var rows = tables[i].getElementsByTagName("tr");//将一个数组中的所有行做成一个数组
        for (var j = 0; j < rows.length; j++) {
            var elem = rows[j];
            if (odd == true) {
                addClass(elem, "odd");
                odd = false;//这行是偶数行，将下一行设为奇数行
            }
            else odd = true;//这行是奇数行，将下一行设为偶数行
        }
    }
}

addLoadEvent(stripeTables);

/*第一次0错误提交，哈啊哈哈哈！*/