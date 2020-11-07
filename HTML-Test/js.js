document.write(Date());                                 //显示时间
document.write("<br/>")                                 //换行
window.alert(7);                                        //弹窗
var x=16 + "Volvo";
document.write(x);
function myFunction3(a, b) { 
    return a * b;                                       // 返回 a 乘于 b 的结果 
}
var y=myFunction3(3,4);
document.write(y+"<br/>");
var person=                                             //定义一个对象person
{
	firstname : "John",
	lastname  : "Doe",
	id        :  5566
};
document.write(person.lastname + "<br>");
document.write(person["id"] + "<br>");
var carname=new String;                                 //声明一个新变量类型
var answer = 'It\'s alright';
var answer = "He is called \"Johnny\"";                 //通过转义字符\来添加引号
function myFunction4(){
	var result;
	result=(document.getElementById("age").value<18)?"年龄太小":"年龄已达到";
    document.getElementById("demo3").innerHTML=result;
}
/*
<p>点击按钮检测年龄</p>
<input id="age" value="">
<p>是否达到投票年龄？</p>
<button onlick="myfunction4()">点击按钮</button>
<p id="demo3"></p>
 */
