//快速获取ID
function my$(id){
	return document.getElementById(id);
}

//设置任意元素的值
function setElement(Element,text){
	if(typeof(Element.innerText)==undefined){
		Element.textContent=text;
	}
	else{
		Element.innerText=text;
	}
}

//获取任意元素的值
function getElement(Element){
	if(typeof(Element.innerText)==undefined){
		console.log(Element.textContent);
	}
	else{
		console.log(Element.innerText);
	}
}

//为任意元素，绑定任意事件
function addEventListener(element,type,fn){//这里type不用加on
	//判断浏览器是否支持这个方法
	if(element.addEventListener){
		element.addEventListener(type,fn,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+type,fn);
	}else{
		element["on"+type]=fn;
	}
}