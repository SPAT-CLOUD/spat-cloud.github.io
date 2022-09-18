var HS = document.createElement('script');
HS.async="";
HS.src="https://spat-cloud.github.io/data/HarScript/HarScript.v2.9.Latest.min.js";
document.head.appendChild(HS);
var g = document.getElementsByTagName('span');
var c= 0;
function div(x)
{
if(c > 1000)return ((c/1000).toPrecision(2)).toString(10) + "K";else if(c > 1000000)return (c/1000000).toPrecision(2) + "M";else if(c > 1000000000)return (c/1000000000).toPrecision(2) + "B";else return c;}
function d(){c++;g[0].innerHTML = div(c) + " " + "subscribers";}
y = setInterval(d,500);
