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
           return es;
       }
}
