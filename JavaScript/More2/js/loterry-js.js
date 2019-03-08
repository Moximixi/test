var lottery={
    index:0,	//当前转动到哪个位置
    count:0,	//总共有多少个位置
    timer:0,	//setTimeout的ID，用clearTimeout清除
    speed:200,	//初始转动速度
    times:0,	//转动次数
    cycle:60,	//转动基本次数：即至少需要转动60次再进入抽奖环节
    prize:-1,	//中奖位置
    init:function(id){//节点检测
        if ($("#"+id).find(".lottery-unit").length>0) {
            $lottery = $("#"+id);//抽奖转盘当前的节点
            $units = $lottery.find(".lottery-unit");//奖品的节点
            this.obj = $lottery;
            this.count = $units.length;
            $lottery.find(".lottery-unit-"+this.index).addClass("active");//给转盘当前位置添加当前状态
        };
    },
    roll:function(){//转动转盘的方法
        var index = this.index;
        var count = this.count;
        var lottery = this.obj;
        $(lottery).find(".lottery-unit-"+index).removeClass("active");//转动之前先把当前的状态删去
        index += 1;
        if (index>count-1) {
            index = 0;
        };
        $(lottery).find(".lottery-unit-"+index).addClass("active");
        this.index=index;/*把当前转动到的位置赋值给lottery.index*/
        return false;
    },
    stop:function(index){
        this.prize=index;/*如果当前的位置转到中奖位置，则停止*/
        return false;/*返回false终止程序*/
    }
};

function roll(){
    lottery.times += 1;
    lottery.roll();
    if (lottery.times > lottery.cycle && lottery.prize==lottery.index) {
        clearTimeout(lottery.timer);
        lottery.prize=-1;
        lottery.times=0;
        click=false;
    }else{
        if (lottery.times<lottery.cycle) {
            lottery.speed -= 10;/*0-60次数之间转动速度增大，间隔减小*/
        }else if(lottery.times==lottery.cycle) {
            var index = Math.random()*(lottery.count)|0;/*生成一个随机数作为中奖号*/
            lottery.prize = index;/*将中奖号赋给prize*/
        }else{/*转动次数大于规定圈数*/
            if (lottery.times > lottery.cycle+10 && ((lottery.prize==0 && lottery.index==7) || lottery.prize==lottery.index+1)) {
                lottery.speed += 150;/*结尾阶段增加时间间隔，增加悬念*/
            }else{
                lottery.speed += 300;
            }
        }
        if (lottery.speed<100) {
            lottery.speed=100;/*控制转动速度最小减到100*/
        };
        lottery.timer = setTimeout(roll,lottery.speed);/*设置控制器,每隔lotter.speed的时间执行一次roll()函数*/
    }
    return false;
}

var click=false;

window.onload=function(){
    lottery.init('lottery');
    $("#lottery a").click(function(){
        if (click) {
            return false;/*如果多次点击，则不执行*/
        }else{
            lottery.speed=100;
            roll();/*执行转动*/
            click=true;/*抽奖完成后可继续抽奖*/
            return false;
        }
    });
};
