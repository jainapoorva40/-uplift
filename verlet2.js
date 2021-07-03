function colour(){
setInterval(function()
{
if(document.getElementById('var').style.color== 'black')
var col1='blue';
else
col1='black';

if(document.getElementById('let').style.color=='black'){
let col2='red';
}
else{
col2='black';
}
document.getElementById('var').style.color=col1;
document.getElementById('let').style.color=col2;
},500)
}