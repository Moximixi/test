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
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations:（缩略词对应全称）");
    header.appendChild(header_text);

    //将说明部分和列表放在body的最后面
    document.getElementsByTagName("body")[0].appendChild(header);
    document.getElementsByTagName("body")[0].appendChild(dlist);

}

addLoadEvent(displayAbbreviations);