function showSection(id){//显示和隐藏函数
    var divs=document.getElementsByTagName("div");
    for(var i=0;i<divs.length;i++){
        if(divs[i].className.indexOf("section")==-1)continue;//如果这个块不是要选择的块，跳过，进入下一个循环
        if(divs[i].getAttribute("id").indexOf(id)==-1)//同理，这个id也不用加双引号！
            divs[i].style.display="none";
        else
            divs[i].style.display="block";
    }
}

function prepareInternalnav() {
    var nav=document.getElementById("internalnav");
    var links=nav.getElementsByTagName("a");//找到nav下面的所有的<a>
    for(var i=0;i<links.length;i++){
        var temp=links[i].getAttribute("href").split("#")[1];
        document.getElementById(temp).style.display="none";//问题：这里的temp不需要加引号！（先将有这样的id部分隐藏）
        links[i].destination=temp;//创建一个属性，属性的作用域是持久存在的
        links[i].onclick=function () {
            showSection(this.destination);
        }
    }
}

addLoadEvent(prepareInternalnav);