// GetFrame js
 function cap(){
     cf = document.getElementById('frm');
     vf = document.getElementById('swag');
     imh = document.getElementById('avp');
     cf.width=vf.videoWidth;
     cf.height = vf.videoHeight;
     cf.getContext('2d').drawImage(vf,0,0,vf.videoWidth,vf.videoHeight);
     cf.toBlob=(n)=>{
         
         
imh.src=URL.createObjectURL(n);     
 };
 }
