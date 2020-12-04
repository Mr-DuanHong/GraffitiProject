/*日期*/
window.onload = function(){  /*事件onload，在页面或图像完成加载后触发函数*/
    var oDt=new Date(); /*创建一个Date对象类型的变量（前缀o代表类型对象），返回当前日期时间*/
    var sWd="";  /*前缀s，字符串类型变量，记录周几*/
    var iWeekDay=oDt.getDay();/*Date对象中的方法getDay()，作用为返回一周中的某一个天（0~6）*/

    /*星期x的显示*/
    switch(iWeekDay){  /*此处用一个switch函数将getDay方法返回的数字转换为汉字*/
        case 0:
            sWd="星期日";break;
        case 1:
            sWd="星期一";break;
        case 2:
            sWd="星期二";break;
        case 3:
            sWd="星期三";break;
        case 4:
            sWd="星期四";break;
        case 5:
            sWd="星期五";break;
        case 6:
            sWd="星期六";break;
    }

    var iMonth=oDt.getMonth()+1;  /*getMonth,返回月份（0~11）*/
    /*下面这行，对document(html5文件)执行getElementById方法，查找括号内id的元素，然后整个作为对象，执行innerHTML方法，改变文本内容*/
    document.getElementById("displaydate").innerHTML="<span>"+oDt.getFullYear()+"年"+iMonth+"月"+oDt.getDate()+"日 "+sWd+"</span>";
    var iTimerid = window.setInterval("showtime()",1000);/*setInterval方法，可以定期调用函数或表达式。此处目的为设置了一个定时器，每隔1000毫秒（1秒）调用一次showrime函数，这样就可以动态显示时间了*/


    /*图片切换*/

    if(document.getElementById("a1")!=null){
        document.getElementById("a1").onmouseover = function(){ /*在发生事件：鼠标悬停a1上时执行函数去切换图片*/
            document.getElementById("badimg").src="images/1.jpg";
        }
    }
    if(document.getElementById("a2")!=null){
        document.getElementById("a2").onmouseover = function(){
            document.getElementById("badimg").src="images/2.jpg";
        }
    }
    if(document.getElementById("a3")!=null){
        document.getElementById("a3").onmouseover = function(){
            document.getElementById("badimg").src="images/上古卷轴5.jpg";
        }
    }
    if(document.getElementById("a4")!=null){
        document.getElementById("a4").onmouseover = function(){
            document.getElementById("badimg").src="images/荒野大镖客1.jpg";
        }
    }
}

/*时间*/
function showtime(){
    var oDt=new Date();
    var iTimerid;
    var sTime="";
    if(oDt.getHours()<10){ /*getHours返回小时（0~23）*/
        sTime+="0"+oDt.getHours()+":";
    }
    else{
        sTime+=oDt.getHours()+":";
    }
    if(oDt.getMinutes()<10){
        sTime+="0"+oDt.getMinutes()+":";
    }
    else{
        sTime+=oDt.getMinutes()+":";
    }
    if(oDt.getSeconds()<10){
        sTime+="0"+oDt.getSeconds();
    }
    else{
        sTime+=oDt.getSeconds();
    }
    document.getElementById("displaytime").innerHTML="<span>"+sTime+"</span>";

}

