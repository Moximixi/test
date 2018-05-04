function addClass(Element, value) {
    if (!Element.className)//如果这个节点没有设置class
        Element.className = value
    else {//这个节点存在class
        Element.className += " ";//先加上空格再添加新的class
        Element.className += value;
    }
}

function getNextElement(node) {//获得元素节点的函数
    if (node.nodeType == 1) {
        return node;
    }//如果当前节点就是元素节点，则返回当前节点
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }//如果当前节点不是并且它有下一个节点，则递归寻找下一个节点
    return null;//如果都没有，则返回空
}

function styleHeaderSiblings(tag,theclass) {
    if (!document.getElementsByTagName) return false;//检测
    var headers = document.getElementsByTagName(tag);
    for (var i = 0; i < headers.length; i++) {
        var elem = getNextElement(headers[i].nextSibling);
        addClass(elem, theclass);
    }
}

addLoadEvent(function () {//
    styleHeaderSiblings("h1","intro");
});

/*错误：
* 1.忘记加return！
* 2.在CSS里面，不是在JS里面！
* 3.getNextElement全部没加分号！
* 4.nodeType!!!!!!!不是nodeValue
* */