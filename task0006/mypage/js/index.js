/**
 * Created by Cherry on 2016/9/23.
 */
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

function checkCookie()
{
    username=getCookie('username')
    if (username!=null && username!="")
    {
        $("#username").html('��ӭ'+ username );
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
        if($('#img1').attr('src')=="images/�볡ȯ1.jpg"){
            $('#img1').attr('src', 'images/�볡ȯ5.gif');
            $('#img2').attr('src', 'images/�볡ȯ3.png');
            $('#img3').attr('src', 'images/�볡ȯ6.jpg');
        }
        else{
            $('#img1').attr('src', 'images/�볡ȯ1.jpg');
            $('#img2').attr('src', 'images/�볡ȯ2.jpg');
            $('#img3').attr('src', 'images/�볡ȯ4.gif');
        }
    });
    checkCookie();
})