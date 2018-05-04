function moveElement(elementID,final_x,final_y,interval) {//移动函数
    var element=document.getElementById(elementID);
    var xpos=parseInt(element.style.left);//获得初始距离
    var ypos=parseInt(element.style.top);

    if(xpos==final_x&&ypos==final_y)
        return true;
    if(xpos<final_x)
        xpos++;
    if(xpos>final_x)
        xpos--;
    if(ypos<final_y)
        ypos++;
    if(ypos>final_y)
        ypos--;
    element.style.left=xpos+"px";//将移动后的数据又返还回去
    element.style.top=ypos+"px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";//注意这里！不懂的有点多
    movement=setTimeout(repeat,interval);//间接性的执行这个函数,并且最好养成返回一个数据的好习惯，方便clearTimeout
}

/*
* 问题：为什么repeat中的elementID一定要先加单引号，再加双引号？！
* */