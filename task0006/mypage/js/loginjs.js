/**
 * Created by Cherry on 2016/9/27.
 */

//function beforeSubmit(form){
//    if(form.username.value==''){
//        alert('�û�������Ϊ�գ�');
//        form.username.focus();
//        return false;
//    }
//    if(form.password.value==''){
//        alert('���벻��Ϊ�գ�');
//        form.password.focus();
//        return false;
//    }
//    if(form.password.value.length<6){
//        alert('��������Ϊ6λ�����������룡');
//        form.password.focus();
//        return false;
//    }
//    if(form.password.value!=form.password2.value) {
//        alert('��������������벻һ�£����������룡');
//        form.password2.focus();
//        return false;
//    }
//    return true;
//}

function setCookie(name, value, iDay)
{
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+iDay); //�������ù���ʱ���õģ���ȡ��ǰʱ����ϴ�������iDay���ǹ���ʱ��
    document.cookie=name+'='+value+';expires='+oDate;
};
function getCookie(name)
{
    var arr=document.cookie.split('; '); //���cookieֵ����; �ָ��ģ���split��cookie�ָ����ֵ������
    for(var i=0;i<arr[i].length;i++) //��������
    {
        var arr2=arr[i].split('='); //ԭ����õ������ǣ�user=simon������split('=')�ָ�ɣ�user simon ��������ͨ��arr2[0] arr2[1]���ֱ��ȡuser��simon
        if(arr2[0]==name) //�����������������ڴ�������name
        {
            return arr2[1]; //�ͷ�����������Ӧ��ֵ
        }
        return ''; //û�ҵ��ͷ��ؿ�
    }
};
function removeCookie(name)
{
    setCookie(name, 1, -1); //-1���Ǹ���ϵͳ�Ѿ����ڣ�ϵͳ�ͻ�����ȥɾ��cookie
};

$(function(){
    $("#login-button").click(function(){
        var user=$("#username").val();
        var pwd=$("#password").val();
        if(user==''){
            alert("�û�������Ϊ��");
            return false
        }
        if(pwd.length<6){
            alert("���벻����Ҫ��");
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
