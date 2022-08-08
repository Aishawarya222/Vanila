function validate(){
    var uname, Eml, z, place, loc, marts, MobNo, skype,s1, s2;
    uname= document.getElementById("uname");
    Eml= document.getElementById("Eml");
    place= document.getElementById("place");
    loc= document.getElementById("loc");
    marts= document.getElementById("marts");
    MobNo= document.getElementById("MobNo");
    skype= document.getElementById("skype");


    s1= document.getElementById("s1");
    s2= document.getElementById("s2");
    s3= document.getElementById("s3");
    s4= document.getElementById("s4");
    s5= document.getElementById("s5");
    s6= document.getElementById("s6");
    s7= document.getElementById("s7");

    if(uname.value==""){
        s1.innerHTML='*must be fill';
    }
    else{
        s1.innerHTML="";
    }
    if(Eml.value==""){
        s2.innerHTML='*Enter valid emailID';
    }
    else{
        s2.innerHTML="";
    } 
    if(place.value==""){
        s3.innerHTML='*must be fill';
    }
    else{
        s3.innerHTML="";
    } 
    if(loc.value==""){
        s4.innerHTML='*Enter valid emailID';
    }
    else{
        s4.innerHTML="";
    } 
    if(marts.value==""){
        s5.innerHTML='*Enter valid emailID';
    }
    else{
        s5.innerHTML="";
    } 
    if(MobNo.value==""){
        s6.innerHTML='*Enter valid emailID';
    }
    else{
        s6.innerHTML="";
    } 
    if(skype.value==""){
        s7.innerHTML='*Enter valid emailID';
    }
    else{
        s7.innerHTML="";
    } 
    if((uname.value=="")||(Eml.value=="")||(place.value=="")||(loc.value=="")||(marts.value=="")||(MobNo.value=="")){
        z=false;
    }
    else{
        z=true;
    }
    return z;
}