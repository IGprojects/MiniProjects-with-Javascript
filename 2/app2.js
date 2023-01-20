
//AL FER CLICK AL BUTO
const buttonatack1=document.querySelectorAll('#attack')
//console.log(buttonatack1);  

buttonatack1[1].addEventListener('click', atacar);

function atacar(){alert('atacar');}

//AL PASSAR EL MOUSE PER SOBRE I AL ANARSEN
const carta1=document.querySelector('.boxes_box1');
const carta2=document.querySelector('.boxes_box2');
const carta3=document.querySelector('.boxes_box3');
//console.log(carta1.childNodes);

function carta_selecciona(e){
    e.target.style.backgroundColor = 'rgb(187, 22, 212)';
    e.target.childNodes[1].style.color = 'white';
}
function carta_no_selecciona(e){
    e.target.style.backgroundColor = 'rgb(239, 135, 255)';
    e.target.childNodes[1].style.color = 'black';   //El titol de la carta(fill)
}

function defenseclick(e){
    const elementStyle = window.getComputedStyle(e.target);//RETORNA TOT UNA TAULA CSS AMB LES PROPIETATS DE LELEMENTS
    const elementDisplay = elementStyle.getPropertyValue('color');
    console.log(elementDisplay);
    if(elementDisplay=='rgb(255, 255, 255)'){
        e.target.style.backgroundColor = 'rgb(95, 31, 184)';
        e.target.style.color = 'black';
    }
    else{
    e.target.style.backgroundColor = 'rgb(74, 250, 38)';
    e.target.style.color = 'white';}
}

function attackclick(e){
    const elementStyle = window.getComputedStyle(e.target);//RETORNA TOT UNA TAULA CSS AMB LES PROPIETATS DE LELEMENTS
    const elementDisplay = elementStyle.getPropertyValue('color');
    console.log(elementDisplay);
    if(elementDisplay=='rgb(255, 255, 255)'){
        e.target.style.backgroundColor = 'rgb(144, 27, 135)';
        e.target.style.color = 'black';
    }
    else{
    e.target.style.backgroundColor = 'red';
    e.target.style.color = 'white';}
}


//CARTA SLECCIONADA - es fa aixins ja que no pot passar una funcio directe amb parametres a un eventlistener i aixins es pot reutilitzar amb altres objectes(cartes) senese tenir que utilizar tant de codi
carta1.addEventListener('mouseenter', function(e){carta_selecciona(e)},false);
carta1.childNodes[3].childNodes[3].addEventListener('click', function(e){defenseclick(e)},false);
carta1.childNodes[3].childNodes[1].addEventListener('click', function(e){attackclick(e)},false);

carta2.addEventListener('mouseenter', function(e){carta_selecciona(e)},false);
carta2.childNodes[3].childNodes[3].addEventListener('click', function(e){defenseclick(e)},false);
carta2.childNodes[3].childNodes[1].addEventListener('click', function(e){attackclick(e)},false);

carta3.addEventListener('mouseenter', function(e){carta_selecciona(e)},false);
carta3.childNodes[3].childNodes[3].addEventListener('click', function(e){defenseclick(e)},false);
carta3.childNodes[3].childNodes[1].addEventListener('click', function(e){attackclick(e)},false);

//CARTA NO SELECCIONADA
carta1.addEventListener('mouseleave', function(e){carta_no_selecciona(e)},false);
carta2.addEventListener('mouseleave', function(e){carta_no_selecciona(e)},false);
carta3.addEventListener('mouseleave', function(e){carta_no_selecciona(e)},false);

	