export  class WishOfUglyFellow
{
       constructor(x)
       {
           x = this.x;
       }
       show()
       {
           var t = new XMLHttpRequest();
           t.onload=function()
           {
               document.getElementById(g).innerHTML=this.responseText;
           }
           t.open('GET','https://spat-cloud.github.io/MySecrect.txt',true);
           t.send(null);
       }
}
