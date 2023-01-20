const acordion=document.getElementsByClassName('content-container');

for(let i=0;i<acordion.length;i++){

    acordion[i].addEventListener('click',  function(){
        //EL TOGGLE EN CAS DE NO TINGUI LA CLASSE L AFAGEIX I EN CAS DE JA LA TINGUI
        //L ELIMINA
        this.classList.toggle('active');


    })

}