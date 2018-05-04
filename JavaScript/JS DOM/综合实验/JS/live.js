function displayAbbreviations() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;//检测环节

    //取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();

    //遍历所有缩略词的信息，并放入一个数组当中
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }

    //创建定义列表
    var dlist = document.createElement("dl");
    for (key in defs) {//用了for in循环
        var definition = defs[key];
        //列表的标题部分
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //列表的描述部分
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        //连接
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }

    //创建说明部分
    var header = document.createElement("h3");
    var header_text = document.createTextNode("Abbreviations:（缩略词对应全称）");
    header.appendChild(header_text);
    var container=document.getElementById("content");//这次是在container后面，不是在div后面
    //将说明部分和列表放在body的最后面
    container.appendChild(header);
    container.appendChild(dlist);

}

function highlightRows() {
    var temp = document.getElementsByTagName("tr");
    for (var i = 0; i < temp.length; i++) {
            temp[i].oldClassname=temp[i].className;
            temp[i].onmouseover=function () {
                addClass(this,"highlight");//鼠标某一行上面时，为这个行创(或者添加)一个类
            }
            temp[i].onmouseout=function () {
                this.className=this.oldClassname;//鼠标离开的时候，把原来的类还给它
            }
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

addLoadEvent(displayAbbreviations);
addLoadEvent(highlightRows);
addLoadEvent(stripeTables);