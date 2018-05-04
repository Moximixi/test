function displayAccesskeys(){
    if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) return false;//检测环节

    var akeys=new Array();//创建一个数组用于接受快捷键属性和对应的内容
    var links=document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        var current_link=links[i];
        if(!current_link.getAttribute("accesskey"))continue;//检测有没有快捷键属性
        var key=current_link.getAttribute("accesskey");
        var text=current_link.lastChild.nodeValue;
        akeys[key]=text;
    }
    var list=document.createElement("ul");
    for(key in akeys){
        var text=akeys[key];
        var str=key+"-"+text;//创建一个字符串，把数组里面的索引和内容连接起来
        var item=document.createElement("li");
        var item_text=document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header=document.createElement("h2");
    var header_text=document.createTextNode("Accesskeys:(快捷键)");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAccesskeys);