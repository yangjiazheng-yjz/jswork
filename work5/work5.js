//9x9空表格
str = '<table border="1">'
for(var i=1;i<=9;i++){
    str += '<tr>'
for(var j=1;j<=9;j++){
    str +='<td>&nbsp;</td>'
}
    str +='</tr>'
}
str += '</table>'
document.getElementById('table').innerHTML = str
// 倒九九乘法空表
    str = '<table border="2">'
    for(var i=9;i>=1;i--){
        str += '<tr>'
    for(var j=1;j<=i;j++){
        str +='<td>&nbsp;</td>'
    }
        str +='</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str
//倒九九乘法表
document.write("<table border='2' width='900'>");
for(var i=9;i>=1;i--){
    document.write("<tr>");
for(var j=1;j<=i;j++){
    document.write("<td align='center'>");
    document.write(i+'X'+j+"="+i*j);
    document.write("</td>");
}
    document.write("</tr>");
}
document.write("</table>")

