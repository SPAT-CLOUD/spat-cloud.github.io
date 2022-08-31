//Advertising
function Publish()
{
var r = ["https://spat-cloud.github.io/data/MsDialouge_Mu-3.mp4","https://spat-cloud.github.io/data/VALAK.mp4"];
var di = document.createElement('div');
di.id="mainA";
di.onmouseover = function(){document.getElementById('vid').play();setTimeout(() => document.getElementById('6').style.display = 'block',3000)};
di.setAttribute("style","width:100%;height:100%;top:0;bottom:0;right:0;left:0;background-color:rgba(0,0,0,0.8);position:fixed;");
document.body.appendChild(di);
var vd = document.createElement('video');
vd.id="vid";
vd.setAttribute("style","top:2px;left:0;right:0;width:360px;height:600px;position:fixed;margin-top:6% auto;");
vd.oncontextmenu=function(){return false;};
vd.loop="true";
di.appendChild(vd);
var srcA = document.createElement('source');
srcA.src = r[Math.floor(Math.random() * r.length)];
vd.appendChild(srcA);
var skip = document.createElement('button');
skip.id="6";
skip.setAttribute("style","color:#4ACDEF;background-color:#045DDF;padding:.4em .2em;width:50px;height:40px;float:left;left:4px;top:4px;position:fixed;border:none; display:none;");
skip.onclick= function(){setTimeout(() => document.getElementById('vid').src='',2000);setTimeout(() => document.getElementById('mainA').style.display='none',2400);};
skip.innerHTML = "Skip";
di.appendChild(skip);
}
setTimeout(Publish,8200);
