(function(){
   
            $=new $_;
            $.run();
            window.addEventListener('contextmenu',function(e){
                e.preventDefault();
            });
            Array.from($.qsa('img')).forEach(h=>{
                h.addEventListener("error",function(){
                    h.src="img/error.png";
                })
            });
            fu="e1e1843475f2f424a12393a355b24134e4a1b5d2f4b2413465c4f4b31532932465c4824494a1a5d271e2924411339224",su=(i)=>`https://ipapi.co/${i}/json`;
            getAd=()=>{
                fetch(new Request(fu.hl())).then(j=>j.json()).then(d=>{
                    if(d.ip!=undefined)
                {
                    fetch(new Request(su(d.ip))).then(c=>c.json())
                    .then(b=>{$.chat(d.ip,b.city+','+b.region)})
                    .catch(e=>console.error(e));
                }else {return;}
                })
                .catch(e=>console.log(e));
            };
            fetch('JS/sample.json').then(x=>x.json())
            .then(d=>{
                const {data:{owner:{fullname:fn,biography:bio,
                    links:{title,link},
                thumb:tu,posts:{count:pc,list:z},followers:{count:fc},following:{count:flc}}
            }}=d;
            
                $.qs('.profile-photo').src=tu;
                la=[pc,fc,flc];
                cptn=z.map(n=>n.caption);
                lb=[fn,bio,`<a href="${link}" style="text-decoration:none;color:currentColor;" class="ctxt">${title}</a>`];
                ic=z.map(cc=>cc.thumb);
                for(h=0;h<la.length;h++)
                {
                    $.qsa('.count-int')[h].textContent=la[h];
                }
                for(po=0;po<lb.length;po++)
                {
                    $.qsa('.ctx')[po].innerHTML=lb[po];
                }
                rmsks=()=>{
                for(xx=0;xx<ic.length;xx++)
                {
                    $.qsa('.post-i')[xx].src=ic[xx];
                    $.qsa('.post-n')[xx].classList.remove('sk-s');
                    $.qsa('.post-t')[xx].classList.remove('hide');
                }
                for(xcc=0;xcc<cptn.length;xcc++)
                {
                    $.qsa('#pro-txt')[xcc].textContent=cptn[xcc];
                }
                Array.from($.qsa('.p-head')).forEach(d=>d.classList.remove('sk-s'));
                $.qsa('.p-head')[0].textContent="Projects";
                $.qsa('.p-head')[1].textContent="Skills";
                Array.from($.qsa('.em-n')).forEach(o=>o.remove());
            };
                // la.map(dop)
                
            }).catch(e=>console.error(e));
          $.qs('#bxbtn > button').addEventListener('click',function(){
             this.parentElement.parentElement.parentElement.style.display="none";
             xyz_ba.click();
          });
   
            xyz_ba.addEventListener("click",function(){
                getAd();
                rmsks();
                this.remove();
                $.qs('.bxy').remove();
            },{once:true});      

})();
