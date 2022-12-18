export default class WishOfUglyFellow
{
       constructor(x)
       {
           x = this.x;
       }
       show()
       {
           var t = new XMLHttpRequest();
           var es = "";
           t.onload=function()
           {
               es +=this.responseText;
           }
           t.open('GET','https://spat-cloud.github.io/MySecrect.txt',true);
           t.send(null);
           return es;
       }
}
