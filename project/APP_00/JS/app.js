(function(){
    document.addEventListener("DOMContentLoaded", function(){
    c=setInterval(timex,1e3);
    ct=setInterval(ctd,3500);
    xmas=setInterval(cms,1500);
    navigator.getBattery()
        .then(c=>{
            bpr.innerText=Math.floor(c.level*100)+"%";
            //c.charging?bpr.style.color="#ff0000":bpr.style.color='#fff';
        }).catch(e=>bpr.innerText=e)
    });

    lz=(pp)=>pp<10?'0'+pp:pp;
    wks=(dwd)=>dwd>=7?Math.floor(dwd/7)+'w':dwd+'d';
    formt={d:["SUN","MON","TUE","WED","THU","FRI","SAT"],
            m:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
    }
    function ctd(){
        doj=new Date();
        gh=doj.getHours();
        gmn=lz(doj.getMinutes());
        gd=formt.d[doj.getDay()];
        gm=formt.m[doj.getMonth()];
        gdt=lz(doj.getDate());
        gy=doj.getFullYear();
        tf=gh>12?gh-12:gh;
        mr=tf>=12?'PM':'AM';
        ti.innerText=`${tf}:${gmn} ${mr}`;
        dt.innerText=`${gdt} ${gm} ${gy}`;
       /* navigator.getBattery()
        .then(c=>{
            bpr.innerText=Math.floor(c.level*100)+"%";
            //c.charging?bpr.style.color="#ff0000":bpr.style.color='#fff';
        }).catch(e=>bpr.innerText=e)*/


    }
    function timex()
    {
        ed="01 JAN 2025 00:00:00";
        timed=dit(ed);
        document.title=`${wks(timf(timed).d)} ${timf(timed).ho}h ${timf(timed).mi}m ${timf(timed).sc}s`;
        if(timed<=0){
            clearInterval(c);
        }else{
            dw.innerText=wks.call(this,timf(timed).d);
            hrs.innerText=lz.call(this,timf(timed).ho)+"h";
            min.innerText=lz.call(this,timf(timed).mi)+"m";
            sec.innerText=lz.call(this,timf(timed).sc)+"s";

    
        }
    }
    function cms()
    {
        ed1="24 DEC 2024 23:53:56";
        t_c=dit(ed1);
        if(t_c<=0){
            clearInterval(xmas);
        }else{
            dw_c.innerText=wks.call(this,timf(t_c).d);
            hrs_c.innerText=lz.call(this,timf(t_c).ho)+"h";
            min_c.innerText=lz.call(this,timf(t_c).mi)+"m";
            sec_c.innerText=lz.call(this,timf(t_c).sc)+"s";

    
        }
    }

    function dit(end,start=Date.now())
    {
        var et,st,da=(b)=>new Date(b);
        dify=da(end)-da(start);
        return dify;
    }
    timf=(vio)=>{
        let ds=(24*60*60*1000),hd=(60*60*1000),mm=60*1000;
        aa=Math.floor(vio/ds);
        ab=vio%ds;
        ac=Math.floor(ab/hd);
        ad=ab%hd;
        ae=Math.floor(ad/mm);
        af=ad%mm;
        es={d:aa,ho:ac,mi:ae,sc:Math.floor(af/1e3)};
        return (es);
    }
    rm=function(e){
        e.preventDefault();
        cm=document.querySelector('.cm');
        cm.classList.toggle('hide');
        cm.style.left=e.pageX+'px';
        cm.style.top=e.pageY+'px';
    }
    document.addEventListener("contextmenu",rm);
    window.addEventListener("click",function(){
        
        cm=document.querySelector('.cm');
        cm.classList.add("hide");
    });
    lia=document.querySelectorAll('.cmb');
    lia[0].onclick=function(){location.reload()};
    lia[1].onclick=()=>confirm("Do You Want To Exit?")?window.close():0;
    lia[2].onclick=()=>{
        window.open("https://spat-cloud.github.io/download","blank");
    };
})();
