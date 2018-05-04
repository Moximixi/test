function focusLabels() {//点击label标签，输入框获得焦点的函数
    var labs = document.getElementsByTagName("label");
    for (var i = 0; i < labs.length; i++) {
        if (!labs[i].getAttribute("for")) continue;
        var id = labs[i].getAttribute("for");
        labs[i].onclick = function () {
            var elem = document.getElementById(id);
            elem.focus();
        }
    }
}

function isFilled(field) {//判断是否输入的东西
    if (field.length < 1 || field.value == field.defaultValue)//判断长度是否为空，或者是否依然还是默认值没有更改
        return false;
    else
        return true;
}

function isEmail(field) {//判断是否是邮件
    if (field.value.indexOf("@") == -1 || field.value.indexOf(".") == -1)//通过输入的邮件格式中是否含有@或者.来简单判断输入的是不是邮件
        return false;
    else
        return true;
}

function validateForm(whichform) {
    for (var i = 0; i < whichform.elements.length; i++) {
        var element = whichform.elements[i];
        if (element.required = "required") {
            if (!isFilled(element)) {
                alert("这个" + element.name + "必填");
                return false;
            }
            if(!isEmail(element)){
                alert("这个"+element.name+"不是一个有效的邮件，请重新输入");
                return false;
            }
        }
    }
}

addLoadEvent(focusLabels);
/*用AJAX完成表单验证，总结全书，准备开启新坑*/