var obj = document.getElementById('part1');
var timer=null;
function Move(target) {
	clearInterval(timer);//每次清除上一次的动画效果
	timer=setInterval(function() {
		speed=(target-obj.offsetLeft)/10;//实现缓冲效果
		speed=speed>0?Math.ceil(speed):Math.floor(speed);//清除speed出现的小数
		if(obj.offsetLeft==target){
			clearInterval(timer);
		}
		else{
		obj.style.left = obj.offsetLeft + speed + 'px';//offestLeft不用加style!!！
	}
	}, 30);
}

obj.onmouseover = function() {
	Move(0);//直接传目标值就可以了
}
obj.onmouseout = function() {
	Move(-200);
}
