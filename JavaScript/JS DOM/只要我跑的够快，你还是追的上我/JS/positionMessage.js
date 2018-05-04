function positionMessage() {//设置初始位置的函数
    var elem = document.getElementById("message");
        elem.style.position = "absolute";
        elem.style.left = "100px";
        elem.style.top = "100px";
        moveElement("message",225,225,40);

    var elem = document.getElementById("message2");
        elem.style.position = "absolute";
        elem.style.left = "50px";
        elem.style.top = "50px";
        moveElement("message2",225,225,40);
}
addLoadEvent(positionMessage);