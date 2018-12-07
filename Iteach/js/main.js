//搜索框placeholder函数
$(function () {
    $('#inputSearch').focus(function () {
        if(this.value==this.defaultValue)
            this.value='';
    }).blur(function () {
        if(this.value=='')
            this.value=this.defaultValue;
    })
})