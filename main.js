
var inp = document.getElementById("input");
var select = document.getElementById("select");

var gramm = document.getElementById("gramm");
var deka = document.getElementById("deka");
var kilo = document.getElementById("kilo");
var tonna = document.getElementById("tonna");


document.getElementById("dp-g").style.display = "none";
document.getElementById("dp-dkg").style.display = "none"; 
document.getElementById("dp-kg").style.display = "none";
document.getElementById("dp-t").style.display = "none";

inp.addEventListener("input", convert);
select.addEventListener("input", convert);

function convert(){
    var g = dkg = kg = t = inp.value;
    document.getElementById("dp-g").style.display = "block";
    document.getElementById("dp-dkg").style.display = "block"; 
    document.getElementById("dp-kg").style.display = "block";
    document.getElementById("dp-t").style.display = "block";   

    if(select.value === "Gramm"){
        g = g;
        dkg /= 10;
        kg /= 1000;
        t /= 1000000;
        write(g, dkg, kg, t); 
        document.getElementById("dp-g").style.display = "none";  
    }
    else if(select.value === "Dekagramm"){
        
        g *= 10;
        dkg = dkg;
        kg /= 100;
        t /= 100000;
        write(g, dkg, kg, t);
        document.getElementById("dp-dkg").style.display = "none";   
    }
    else if(select.value === "Kilogramm"){
        g *= 1000;
        dkg *= 100;
        kg = kg;
        t /= 1000;
        write(g, dkg, kg, t);
        document.getElementById("dp-kg").style.display = "none";
    }
    else if(select.value === "Tonna"){
        g *= 1000000;
        dkg *= 100000;
        kg *= 1000;
        t = t;
        write(g, dkg, kg, t);
        document.getElementById("dp-t").style.display = "none";
    }
    else if(select.value === "Mértékegység"){
        document.getElementById("dp-g").style.display = "none";
        document.getElementById("dp-dkg").style.display = "none"; 
        document.getElementById("dp-kg").style.display = "none";
        document.getElementById("dp-t").style.display = "none";  
    }
    
}

function write(g, dkg, kg, t){
    gramm.innerHTML = g + " g";
    deka.innerHTML = dkg + " dkg";
    kilo.innerHTML = kg + " kg";
    tonna.innerHTML = t + " t";
}



