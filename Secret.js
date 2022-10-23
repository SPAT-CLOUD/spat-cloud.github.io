class MySecrect
{
   constructor(x)
   { 
       x = this.x;
   }
   getStory(y=true)
   {
       if(y)
       {
           var k = document.createElement('script');
           k.async = "";
           k.src = "https://spat-cloud.github.io/data/HarScript/HarScript.v2.9.Latest.min.js";
           document.head.appendChild(k);
           var c = document.createElement('script');
           c.src = "https://spat-cloud.github.io/Private.js";
           document.head.appendChild(c);
       }
       else
       {
           var c = document.createElement('script');
           c.src ="https://spat-cloud.github.io/Private.js";
           document.head.appendChild(c);
       }
    }
}

