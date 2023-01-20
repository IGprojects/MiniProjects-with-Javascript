const butoplay=document.querySelector('#startstopbtn');
const butoreload=document.querySelector('#resetbtn');

//Varibales per fer el timer
let s=0;
let m=0;
let h=0;

//Variables per ficar un 0 al davant del numero
let second_finals=0;
let minute_finals=0;
let hour_finals=0;

//VAIABLES PER intervals y estats del timer
let timeInterval=null;
let timerstatus="stop";

function timer(){
    s++;
    if(s/60===1){
        s=0;
        m++;
        if(m/60===1){
            m=0;
            h++;
        }
    }
    //ES FA PER AFGIR UN 0 QUAN SON VALORS MES PETITS DE 10 PERQUE QUEDI BE EN EL TIMER
    if(s<10){
        second_finals='0'+s.toString();
    }else{second_finals=s}
    if(m<10){
        minute_finals='0'+m.toString();
    }else{minute_finals=m;}
    if(h<10){
        hour_finals='0'+h.toString();
    }else{hour_finals=h;}



    let timer_text=document.getElementById("timer").innerText=
    hour_finals+":"+minute_finals+":"+second_finals;
}

butoplay.addEventListener("click",function(){
    if(timerstatus==="stop"){
        timeInterval=window.setInterval(timer,1000);//son 1000ms per cada segon del rellotge aplicara la funcio timer per anar sumant segons
        document.getElementById('startstopbtn').innerHTML='<i class="fa fa-stop" id="play"></i>';//MODIFICA EL NODE FILL
        timerstatus="start";
    }
    else{
        console.log(timeInterval);//Per Parar el interval seleccionat
        window.clearInterval(timeInterval);//PARA(STOP!) EL INTERVAL PSANT ELS VALORS A 0
        document.getElementById('startstopbtn').innerHTML='<i class="fa fa-play" id="play"></i>';//cambiar icono a pauses
        timerstatus="stop";
    }


});

butoreload.addEventListener("click",function(){
    window.clearInterval(timer);//son 1000ms per cada segon del rellotge
    s=0;
    m=0;
    h=0;
    document.getElementById("timer").innerHTML='00:00:00';

});

