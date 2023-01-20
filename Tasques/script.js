const $=(ID)=>document.getElementById(ID)
const datenumber=$('dateNumber');
const datetext=$('dateText');
const datemonth=$('dateMonth');
const dateyear=$('dateYear');
const taskcontainer=$('taskcontainer');

function setdate(){
    const date=new Date();
    //AL DEMANAR COM VOLS QUE ET RETORNI EL DIA... U DEMANAS COM SI FOSSIN ATRIBUTS QUE UTILITZA UNA BASE DE DADES
    datenumber.textContent=date.toLocaleDateString('es',{day:'numeric'});
    datetext.textContent=date.toLocaleDateString('es',{weekday:'long'});
    datemonth.textContent=date.toLocaleDateString('es',{month:'short'});
    dateyear.textContent=date.toLocaleDateString('es',{year:'numeric'});
}

function addnewtask(event){
    event.preventDefault();
    //const {value}=event.target.tasktext; ES LO MATEIX QUE OBENIR EL VALOR PERO ESCRIT DIFERENT
    const TEXTTASCA=event.target.tasktext.value;
    const newtask=document.createElement('div');//IMPORTANT NO POSSAR COM SI FOS UNA ETIQUETA EN HTML NOO!(<DIV>) 
    newtask.classList.add('task','roundBorder');
    newtask.addEventListener('click',cambiarestat);
    newtask.textContent=TEXTTASCA;
    taskcontainer.prepend(newtask);//AFAGEIX EL DIV DE NEW TASK A DALT DE TOT
    event.target.reset();
}

function cambiarestat(event){
    event.target.classList.toggle('done');//EL TOGGLE EN CAS DE QUE NO TINGUI LA CLASSE DONE LA AFAGEIX I EN CAS DE QUE JA LA TINGUI LA TREU

}

function ordertasks(){
    const tasksdone=[];
    const tasksnodone=[];
    taskcontainer.childNodes.forEach(task=>{
        task.classList.contains('done') ? tasksdone.push(task) : tasksnodone.push(task); //EN CAS AFIRMATIU SEXECUTA EL PRIMER PUSH EN CAS NEGATIU EL SEGON PUSH JA QUE NO CONTE LA CLASS DONE
    })
    return [...tasksnodone,...tasksdone];
}

function ordertasksfinal(){
    ordertasks().forEach(task=>taskcontainer.appendChild(task));//SOLAMENT SHA DE FER UN AAPPENCHILD JA LINFO GUARDADA EN LES ARRAYS ESTA COM A NODES
}


setdate();
