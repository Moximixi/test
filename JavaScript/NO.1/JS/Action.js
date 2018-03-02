var x=document.getElementsByTagName("fang");
/*获取九宫格中的小格子的DOM*/

/*随机取得小格子中的3个格子*/
var a,b,c;
var R,G,B;
function randdomnumber(){
    a=Math.floor(Math.random()*9);
    b=Math.floor(Math.random()*9);
    c=Math.floor(Math.random()*9);
    Notsame();
}
function Notsame() {
    if(a===b||b===c||a===c)
        randdomnumber();/*判断a，b，c之间是否有相等的数据，如果有，再次生成随机数*/
}

/*随机获取3种颜色,用RGB格式*/
function randomrgb() {
    R=Math.floor(Math.random()*256);
    G=Math.floor(Math.random()*256);
    B=Math.floor(Math.random()*256);
    return "rgb("+R+','+G+','+B+")";
}

/*清零函数*/
function reset() {
    let i;
    for(i=0;i<9;i++)
        x[i].style.backgroundColor="#FF8C00";
}

var timer;
function lighting() {
    /*设定计时器*/
    clearInterval(timer);/*先关后开的原则*/
    timer=setInterval(function () {
        reset();/*每次点击之前重置九宫格的颜色*/
        randdomnumber();
        x[a].style.backgroundColor=randomrgb();
        x[b].style.backgroundColor=randomrgb();
        x[c].style.backgroundColor=randomrgb();
    },1000);
}

function stoplighting() {
    clearInterval(timer);
    reset();
}

