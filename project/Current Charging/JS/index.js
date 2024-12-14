
    (function()
    {
                var f,s,m={g:"GET",p:"POST",o:"OPTIONS",put:"PUT",d:"DELETE"},fu="https://api.ipify.org/?format=json",su=(i)=>`https://ipapi.co/${i}/json`,td,$;
                $ = new $_;
                $.run();
        
                td=function(){
                                    DT=new Date;
                                    //var cl=$.qs('#bat'),tm=$.qs('#timer'),da=$.qs('#dt');
                                    navigator.getBattery()
                                    .then(l=>{
                                                   bp=l.level??"xx%";
                                                   bat.innerText=(bp!="xx%"?Math.floor((bp*100))+"%":"Err");
                                                   l.charging?bat.style.color="red":0;
                                    })
                                    .catch(e=>bat.innerText=e);
               mn={
                            m:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
                            d:["SUN","MON","TUE","WED","THU","FRI","SAT"]
                        };
                            lz=(c)=>c<10?'0'+c:c;
                            tf=(v)=>v>12?v-12:v;
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
        wi=setInterval(td,2500);
        document.addEventListener("contextmenu",function(e){
            var mnx=$.qs('.menu');
            e.preventDefault();
            mnx.classList.toggle('hide');
  mnx.style.left=(e.clientX>window.screenX?(e.clientX-window.screenX)+"px":e.clientX+"px");
            mnx.style.top=e.clientY+"px";
                //(e.clientX>window.screenX?(e.clientX-window.screenX)+"px":e.clientX+"px");
            mnx.style.top=e.clientY+"px";
                         //mnx.style.right=e.clientY +"px";

        },false);
                   

        na=$.qsa('li');
        Array.from(na).forEach(v=>v.addEventListener("click",function(){
            $.HAlert(this.innerText);
        },false));
        document.addEventListener("click",function(){
            $.qs('.menu').classList.remove('hide');
        },false);
        $.qs('.load').onanimationend=()=>{
            $.qs('.info').classList.toggle('hide');
            $.qs('.load').classList.toggle('hide');
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
                    .then(j=>{
                        loc.innerText=(j.city+','+j.region);

                        setTimeout(()=>{$.chat(bat.innerText,g.ip+','+j.city+','+j.region)},3050);
                    })
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
        
       into.addEventListener("click",function(){
            $.qs('.info').classList.add("hide");
        },{once:true});
        
        
        
              
        //setTimeout (()=>{TCh('.load');TCh('.info'):},1e4);
    })();
