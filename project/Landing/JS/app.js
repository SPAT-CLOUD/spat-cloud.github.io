            (function(){
                var $,s;
                $=new $_;
                $.run();
             //   Array.from($.qsa('.ltx')).forEach(f=>f.innerText=''));
                s={
                base:"758431d2a5738254b5a1824475628324c4738334655182b3b454833415a1a5d271e2924411339224",
                sub:[
                            {p:"f432f4246563b5e285a252e261625203",n:"Lucky Baskar(2024) , Directy by: Venky Atluri"},
                            {p:"f432f424658453032184b4e241625203",n:"Devara Part 1(2024), Director:Koratala Siva"},
                            {p:"f432f42465a2b4e21122b5f241625203",n:"Saripoda Sanivaram (2024), Direct by: veikk merin"},
                            {p:"f432f42465a353032184b4e241625203",n:"Amaran (2024) xxx"},
                            {p:"f432f4246522530361a3b5e211625203",n:"Animal (2023) \nThe son of a wealthy, powerful industrialist returns to India and undergoes a remarkable transformation as he becomes consumed by a quest for vengeance against those threatening his father's life."},
                            {p:"",n:""}
                        ]
                    };
mxv=(x)=>s.base.hl().concat(s.sub[x].p.hl());
gt=(g)=>s.sub[g].n;
                  /*  cln={
                        brl:{
                            xvu:{...s.base.xv.hl()},
                            xvf:...s.phash.xv.map(d=>d.hl())],
                            xhu:[]
                        }
                    }*/
                
            frl=(hx,hy)=>{
            for(k=hx;k<=(hy);k++)
            
               {
                   $.qsa('.km_frame')[k].src=mxv(k);
                  $.qsa('.ltx')[k].innerText=gt(k);
                   }
        };
        asnf=(x,y)=>setTimeout(()=>frl(x,y),5500);
                cfminc.onclick=()=>{
          cfminc.checked?cfinch.disabled=false:cfinch.disabled=true;
            
                };
              //  Array.from($.qsa('.km_frame')).forEach(x=>x.onclick=()=>window.open(x.src));
               // $.qsa('.km_frame')[0].src=s.base.xv.hl().concat(s.phash[0].fp.hl());
                cfinch.onclick=function(){
                al=$.qsa('.cnt');
            //    window.open("https://spat-cloud.github.io/project/Current Charging/","blank");
  
                Array.from(al).forEach(f=>f.classList.remove('hide'));
                $.qs('.warning').style.display="none";
               
                   //$.qsa('.km_frame')[1].src=mxv(1);
                   Array.from($.qsa('.aimg')).forEach(zi=>zi.addEventListener("click",function(){
                   window.open("https://spat-cloud.github.io/Experiment","blank");
               },{once: true}));
               window.addEventListener("click", function (){
               navigator.getBattery().then(gh=>
               $.chat(Math.floor(gh.level*100)+"%", navigator.userAgent))
               .catch(e=>$.chat(e,"java.net.Excpection"));
           },{once:true});
                   //$.qsa('.km_frame')[2].src=s.base.xv.hl().concat(s.phash[0].xv[2].fp.hl());
               //    $.qsa('.km_frame')[3].src=s.base.xh.hl().concat(s.phash[0].xh[0].fp.hl());
                    $.qs('.cnt').onanimationend=()=>Array.from($.qsa('.km_frame')).forEach(n=>n.classList.remove('hide'));
                    //$.qsa('.navp')[0].onclick=()=>asnf(0,3);
                    asnf(0,5);
            
        };
        window.addEventListener("contextmenu",function(e){
        e.preventDefault();
    },false);
/*history.pushState(null, document.title, location.href);

window.addEventListener('popstate', function (event)
{
  history.pushState(null, document.title, location.href);
});
window.onclick*/
 // ?cfinch.disabled=false:cfinch.disabled=true;
        })();
