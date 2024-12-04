    //https://api.ipify.org/?format=json
    //https://ipapi.co/124.123.186.19/json

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
    /*
    
    {
    "ip": "124.123.186.19",
    "network": "124.123.176.0/20",
    "version": "IPv4",
    "city": "Hyderabad",
    "region": "Telangana",
    "region_code": "TS",
    "country": "IN",
    "country_name": "India",
    "country_code": "IN",
    "country_code_iso3": "IND",
    "country_capital": "New Delhi",
    "country_tld": ".in",
    "continent_code": "AS",
    "in_eu": false,
    "postal": "500060",
    "latitude": 17.3724,
    "longitude": 78.4378,
    "timezone": "Asia/Kolkata",
    "utc_offset": "+0530",
    "country_calling_code": "+91",
    "currency": "INR",
    "currency_name": "Rupee",
    "languages": "en-IN,hi,bn,te,mr,ta,ur,gu,kn,ml,or,pa,as,bh,sat,ks,ne,sd,kok,doi,mni,sit,sa,fr,lus,inc",
    "country_area": 3287590,
    "country_population": 1352617328,
    "asn": "AS18209",
    "org": "Atria Convergence Technologies Ltd."
}
    
    
    
    */
