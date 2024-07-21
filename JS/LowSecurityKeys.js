class LowCrypt{
    constructor(x,y){
         this.x=x;
          this.y=y;}
r={0:'Q',1:'R',2:'S',3:'T',4:'U',5:'V',6:'W',7:'X',8:'Y',9:'Z'};
    ir={'Q':0,'R':1,'S':2,'T':3,'U':4,'V':5,'W':6,'X':7,'Y':8,'Z':9};
     HC_1=(h)=>parseInt(h,2**4)+31;
      CC_1=(f)=>String.fromCharCode(f);
       SS_1=(g,c=',')=>String(g).split(c).join('');
     ___dhash(x){
         var N=[];
           for(var t in x){
                N.push((x.charCodeAt(t)-(2**5-1)).toString(16));
         }
       return this.SS_1(N).toUpperCase();
       
      }
      
      ___drhash(t){
       
            var ch=[];
             for(var n=0;n<t.length/2;n++){
                 ch.push(t.slice(n*2,(n+1)*2));
            }
            return this.SS_1(ch.map(this.HC_1).map(this.CC_1));
      }
       ___dProductKey(f){
           var a;
a=f.split('');

            
   e=(f)=>f in this.r?this.r[f]:f;
  return this.SS_1(a.map(e));
        }
___dynamicId(y){
        return parseInt(this.___dhash(y),16);
}
___dRProductKey(g){
     var ji,d;
      ji=g.split('');
      d=(l)=>l in this.ir?this.ir[l]:l;
      return this.SS_1(ji.map(d));
}
}
//Low Security Key Genrate.java
h=new LowCrypt;
Vh=(x)=>{//Genratw
re=btoa(x);
return h.___dhash(re);
};
RH=(gg)=>{//Reverse
F=h.___drhash(gg);
ba=atob(F);
return ba;
};
RunHash=(j)=>{
s=h.___drhash(j);
K=atob(s);
eval(K);
}