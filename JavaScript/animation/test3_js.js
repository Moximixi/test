var obj=document.getElementById('part1');
var timer=null;
var current_opa=0.5;
obj.onmouseover=function(){
	showup(1);
}
function showup(opa){
	clearInterval(timer);
		timer=setInterval(function(){
			if(current_opa==opa){
				clearInterval(timer);
			}
			else if(current_opa<opa){
				current_opa+=0.1;
				obj.style.opacity+=0.1;
				if(obj.style.opacity>=1)
					obj.style.opacity=1;
			}
			else{
				current_opa-=0.1;
				obj.style.opacity-=0.1;
					if(obj.style.opacity<=0)
					obj.style.opacity=0;
			}
		},30);
}