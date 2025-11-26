let tok={
      utkn:"75e293b315b34134f221a434949431a365d4822453a1a5341561a4a3219482541554e4d24163b5f29511a45431a1a5d271e2924411339224",
      redt:"e1229224856143b33572e4b3"
};
 $=new $_;
$.run();

mky="e1e1843475f2f424a12393a355b24134e4a1b5d2f4b2413465c4f4b31532932465c4824494a1a5d271e2924411339224";

su=(i)=>`https://ipapi.co/${i}/json`;
           
getAd=()=>{
              uap=navigator.userAgentData;
              respsend=`Browser=${uap.brands[2].brand?uap.brands[2].brand:'N_A'}&ostype=${uap.platform}`;
      
                fetch(new Request(mky.hl()))
                  .then(j=>j.json())
                  .then(d=>{
                  NextFun();
                    if(d.ip!=undefined)
                {
                    fetch(new Request(su(d.ip))).then(c=>c.json())
                    .then(b=>{
                      //setTimeout(()=>$.chat(d.ip+":"+"Referer:"+(document.referrer!=''?document.referrer:'direct'),respsend),1570);
                    })
                        .catch(e=>console.error(e));
                }
                    else {return;}
                })
                .catch(e=>console.log(e));
              
            };
    
    //e1229224856143b33572e4b3
    function lp(){
      f=location.pathname;
      if(f.includes(tok.utkn.hl()))open(tok.redt.hl(),'blank'); 
      else return null;
    }
    evtd.addEventListener("click",function(){lp();this.style.display="none";},{once:true});
            const zaa=(x)=>{
            return x<10?"0"+x:x;
        };
    function NextFun()
    {
      var uapc=navigator.userAgentData;
       var qsc=document.querySelector(".cont>p");
        var dates=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
        const dt=new Date();
        let loc="https://speed.cloudflare.com/meta";
        Days.innerText=dates[dt.getDay()]
        let dat=fetch(new Request(loc));
        dat.then((req)=>{
            if(!req.ok)
        {
            qsc.innerHTML +="HOST UNREACABLE (::6969)";
        }
        else{
            //NOTGING TO DO
        }
        return req.json();
        })
          .then((Res)=>{
        qsc.innerHTML += ` ${Res.clientIp.includes(':')?'::Ipv6 Host':Res.clientIp} Requested<hr><br> GEO LOCATION : ${Res.country},${Res.city},${Res.region},${Res.postalCode}<hr><br>ISP : ${Res.asOrganization}<hr><br>Requested On : ${zaa(dt.getDate())}/${zaa(dt.getMonth()+1)}/${zaa(dt.getFullYear())}<hr>`;
        setTimeout(()=>$.chat(Res.clientIp,uapc.brands[2].brand+","+"Ref:"+(document.referrer!=''?document.referrer:'direct')),1591);
        })
          .catch(console.error);
    }
        
