function addLoadEvent(func) { //延迟加载函数
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElent) {//将新节点插入到目标节点后面的函数
	var parent=targetElent.parentNode;
	if(parent.lastChild==targetElent){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElent.nextSibling);
	}
}
/************************上面是通用函数,以后可能还会用到**************************/

function showPic(whichpic) {//替换文本和图片函数
	if (!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href"); //用来替换图片的地址
	var placeholder = document.getElementById("placeholder"); //图片占位部分

	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src", source);

	if (document.getElementById("description")) {
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : ""; //用来替换的文字部分
		var description = document.getElementById("description"); //文字描述部分
		//description.innerHTML="<p>whoyou?</p>";
		if (description.firstChild.nodeType == 3) { //文本节点
			description.firstChild.nodeValue = text;
		} /*firstChild,nodeValue*/
	}
	return true;
}

function prepareGallery() {//onclick函数
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById("imagegallery")) return false;
	/*检测环节*/

	var gallery = document.getElementById("imagegallery"); //ul
	var links = gallery.getElementsByTagName("a"); //a
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return showPic(this) ? false : true;
		}
	}
}

function preparePlaceholer() { //创建节点函数
	if(!document.createElement)return false;
	if(!document.createTextNode)return false;
	if(!document.getElementById)return false;
	if(!document.getElementById("imagegallery"))return false;
	//检测阶段

	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "IMG/placeholder.jpg");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desctext = document.createTextNode("Choose an Image");
	description.appendChild(desctext);
	//document.getElementsByTagName("body")[0].appendChild(description);
	//document.getElementsByTagName("body")[0].appendChild(placeholder);
	var gallery=document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,gallery);
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholer);

/*错误总结:
 * 1.return
 * 2.firstChild,secondChild
 * 3.getElementsByTagName
 * 4.最后要调用那个函数！不然怎么运行？！
 * 5.createElement
 * */