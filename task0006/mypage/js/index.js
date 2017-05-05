/**
 * Created by Cherry on 2016/9/23.
 */
function getCookie(name)
{
    var arr=document.cookie.split('; '); //多个cookie值是以; 分隔的，用split把cookie分割开并赋值给数组
    for(var i=0;i<arr[i].length;i++) //历遍数组
    {
        var arr2=arr[i].split('='); //原来割好的数组是：user=simon，再用split('=')分割成：user simon 这样可以通过arr2[0] arr2[1]来分别获取user和simon
        if(arr2[0]==name) //如果数组的属性名等于传进来的name
        {
            return arr2[1]; //就返回属性名对应的值
        }
        return ''; //没找到就返回空
    }
};

function checkCookie()
{
    username=getCookie('username')
    if (username!=null && username!="")
    {
        $("#username").html('欢迎'+ username );
        $('#login').hide();
        $('#register').hide();
        $('#userimg').show();
        $('#username').show();
    }
    else
    {
        $('#login').show();
        $('#register').show();
        $('#userimg').hide();
        $('#username').hide();
    }

}
$(function(){
    $('.nav li').hover(function() {
        $('ul', this).slideDown(200);
    }, function() {
        $('ul', this).slideUp(100);
    });

    $('a.btn').click(function() {
        if($('#img1').attr('src')=="images/入场券1.jpg"){
            $('#img1').attr('src', 'images/入场券5.gif');
            $('#img2').attr('src', 'images/入场券3.png');
            $('#img3').attr('src', 'images/入场券6.jpg');
        }
        else{
            $('#img1').attr('src', 'images/入场券1.jpg');
            $('#img2').attr('src', 'images/入场券2.jpg');
            $('#img3').attr('src', 'images/入场券4.gif');
        }
    });
    checkCookie();
})