let buto=document.querySelector('.new-quote'); //id EL BUTO PER CAMBIAR REVIEW
let quote=document.querySelector('.quote'); //class LA REVIEW
let person=document.querySelector('.person'); //PERSONA QUI HA ESCRIT LA REVIEW

const quotes =[{quote:'"qwd owjqodijwqodjqwo jdowq jdowqdj owqjowqidjow q"',person:'Tolik'},
{quote:'"formuló la Teoría de la Relatividad, descubrió la cuarta dimensión."',person:'Albert Einstein'},
{quote:'"qwd owjqodijwqodjqwo jdowq jdowqdj owqjowqidjow q"',person:'Tolik2'},
{quote:'"qwd owjqodijwqodjqwo jdowq jdowqdj owqjowqidjow q"',person:'Tolik3'},
{quote:'"qwd owjqodijwqodjqwo jdowq jdowqdj owqjowqidjow q"',person:'Tolik4'},
{quote:'"qwd owjqodijwqodjqwo jdowq jdowqdj owqjowqidjow q"',person:'Tolik5'},
{quote:'"qwd owjqodijwqodjqwo jdowq jdowqdj owqjowqidjow q"',person:'Tolik6'},
{quote:'"qwd owjqodijwqodjqwo jdowq jdowqdj owqjowqidjow q"',person:'Tolik7'},
{quote:'"qwd owjqodijwqodjqwo jdowq jdowqdj owqjowqidjow q"',person:'Tolik8'},
{quote:'"qwd owjqodijwqodjqwo jdowq jdowqdj owqjowqidjow q"',person:'Tolik9'},
{quote:'"qwd owjqodijwqodjqwo jdowq jdowqdj owqjowqidjow q"',person:'Tolik10'}]

function cambiarreview(){
    let ranodm=Math.floor(Math.random() * quotes.length)//Intervale ntre 0 i large reviews

    quote.innerHTML=quotes[ranodm].quote;
    person.innerHTML=quotes[ranodm].person;
}

buto.addEventListener('click',cambiarreview,false);