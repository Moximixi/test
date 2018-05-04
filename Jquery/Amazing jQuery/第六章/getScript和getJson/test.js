var comments = [
    {
        "username": "Tom",
        "content": "cool"
    }, {
        "username": "Jack",
        "content": "cool"
    }, {
        "username": "Rose",
        "content": "cool"
    }
]
var html='';
$.each(comments,function (index,comment) {
    html += '<div class="comment"><h6>' + comment['username'] + ':</h6><p class="para">' + comment['content'] + '</p></div>';
})
$('#reset').append(html);


