/**
 * Created by Cherry on 2016/9/27.
 */

//function beforeSubmit(form){
//    if(form.username.value==''){
//        alert('用户名不能为空！');
//        form.username.focus();
//        return false;
//    }
//    if(form.password.value==''){
//        alert('密码不能为空！');
//        form.password.focus();
//        return false;
//    }
//    if(form.password.value.length<6){
//        alert('密码至少为6位，请重新输入！');
//        form.password.focus();
//        return false;
//    }
//    if(form.password.value!=form.password2.value) {
//        alert('你两次输入的密码不一致，请重新输入！');
//        form.password2.focus();
//        return false;
//    }
//    return true;
//}

function setCookie(name, value, iDay)
{
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay); //用来设置过期时间用的，获取当前时间加上传进来的iDay就是过期时间
    document.cookie=name+'='+value+';expires='+oDate;
};
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
function removeCookie(name)
{
    setCookie(name, 1, -1); //-1就是告诉系统已经过期，系统就会立刻去删除cookie
};

$(function(){
    $("#login-button").click(function(){
        var user=$("#username").val();
        var pwd=$("#password").val();
        if(user==''){
            alert("用户名不能为空");
            return false
        }
        if(pwd.length<6){
            alert("密码不符合要求");
            return false;
        }
    });

    var form=document.getElementById('form');
    var user=document.getElementsByName('username')[0];
    form.onsubmit=function()
    {
        setCookie('username', user.value, 14);
    };
    //user.value=getCookie('username');
})
