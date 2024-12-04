    (function(){
        var f,s,m={g:"GET",p:"POST",o:"OPTIONS",put:"PUT",d:"DELETE"},fu="https://api.ipify.org/?format=json",su=(i)=>`https://ipapi.co/${i}/json`;
        td=function(){
            DT=new Date;
            navigator.getBattery().then(l=>{bp=l.level??"xx%";
            bat.innerText=(bp!="xx%"?Math.floor((bp*100))+"%":"Err");
            l.charging?bat.style.color="red":0;
            }).catch(e=>bat.innerText=e);
            mn={
                m:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
                d:["SUN","MON","TUE","WED","THU","FRI","SAT"]
            }
            lz=(c)=>c<10?'0'+c:c;
            tf=(v)=>v>=12?v-12:v;
            mr=(p)=>p>=12?'PM':'AM';
            
            H=DT.getHours();
            M=lz(DT.getMinutes())
            MR=mr(H);
            D=mn.d[DT.getDay()];
            MN=mn.m[DT.getMonth()];
            Y=DT.getFullYear();
            dt.innerText=`${DT.getDate()} ${MN} ${Y},${D}`;
            timer.innerText=`${tf(H)}:${M} ${MR}`;

        };
        f=new XMLHttpRequest;
        f.responseType="json";
        f.onload=function(){
            if(this.status!=0)
            {
                g=this.response;
                s=g.ip??"err";
                if(s!="err"){
                    fetch(new Request(su(s)))
                    .then(h=>h.json())
                    .then(j=>loc.innerText=(j.city+','+j.region))
                    .catch(e=>console.log(e))
                }
            }
            else
            {
                console.log("err");
            }
        };
        f.open(m.g,fu);
        f.send();
        into.addEventListener("click",function(e){
            document.querySelectorAll('.info')[0].classList.add("hide");
        },{once:true});
        intr=setInterval(td,3000);
    })();
