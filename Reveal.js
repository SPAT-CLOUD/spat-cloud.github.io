function ltr(t)
{
var g="";
for(i=0;i<t.length;i++){g +=t.charAt((t.length-i)-1);
}
return g;
}
var t=0;
function dis(){
t++;
$HId('d').innerHTML = "Message will reveal in" + " " + t + " " + "seconds";
if(t==4){$HVanish('d');}
}
setInterval(dis,1000);
let y=new Secrect();
var f="U3bZBCa0l2VgsGbhRFI5xGdjVmcpREIk5WQgQXYoNEIk5WYgUmbvhGUg4WagU3bZByb0ByasFGVg8GdgQnbhdHIJBSZpREIlJ3bmVmQpIDazl2VulWYNhCI/cmbvJ3VgUmbvREIlZXYoBSSgQXYodFIulWYnFEIyVGagU2ZhN3cl1GIvRFI09mTgQWahNHIlh2UgQXdCBiclhGIoRXa3BCdhh2YgQmbhByasFGdg8GdgQnbhdHI5xmbvBSSgUWbg8GdgcmbptGbhRFI09mTgUGaTBCd1JEIyVGSg8GVgsGbhRFIvRFI05WYXBSSukHcwFGagQmbhBSeoRHbhVGSgUmYgQGb19GaTBSZoNVKxg2cpdlbpFWTo4SXyVGdzl2Ug42dPBSeNBSZrlGTbxmcpdEI0FGaUBCazl2VgkXT";
var dx=$Hdecode64(ltr(f)).split(y.setKey()).join('L');
setTimeout(()=> $HId('SM').innerHTML = dx,6000);
