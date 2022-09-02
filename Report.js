function Report()
{
   var v = document.getElementById('HS-Report');
   var b = new XMLHttpRequest();
   b.onload = function()
              {
                 v.innerHTML = this.responseText;
              };
   v.open("GET","https://spat-cloud.github.io/Report",true);
   v.send(null);
}
