const ip = document.getElementById('Inp');

const b = document.querySelectorAll('#Bt');

b.forEach(jk => { jk.onclick = function () { AddD(this) } });

//handler=(x)=>typeof (x)=="NaN"?"java.lang.NotANumberExecption":+(x).toFixed(11);

function AddD(h)

 {

    switch (h.innerText)

     { 

        case 'c':

             ip.value = "";

             break; 

        case '=': 

             ip.value = isNaN(+eval(ip.value))?" ":(+eval(ip.value)=="Infinity"?"∞":+eval(ip.value).toFixed(9));

            break; 

        default: 

            ip.value += h.innerText; 

    }

}

document.addEventListener("contextmenu",function(e){

        e.preventDefault();

        

});

document.addEventListener("keydown",function(e){

    e.preventDefault();

    if(e.key<=9){

        ip.value+=e.key;

    }

    else if((e.shiftKey && e.key=="+")||e.key=='-'||e.key=='/'){

        ip.value+=e.key;

    }

    else if(e.key=="Enter")

    {

        ip.value=(eval(ip.value));

    }

    else if(e.key=="Backspace"){

        xz=ip.value.split('');

        xz.pop();

        ip.value=xz.toString().split(',').join('');

    }

    else if(e.keyCode==67){

        ip.value="";

    }

});
