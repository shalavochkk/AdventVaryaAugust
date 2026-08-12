/* ===========================================================
   THE AUGUST RELIQUARY — GOTHIC ADVENT CALENDAR
   =========================================================== */

const DAYS = 31;

const STORAGE_KEY = "august-calendar";

const DEBUG_UNLOCK_KEY = "unlockAll";


/* ===========================================================
   DAY CONFIG
   ===========================================================
   Заполняй каждый день здесь. Ничего больше трогать не нужно —
   всё остальное подхватится автоматически.

   title  — заголовок в модалке
   text   — описание/текст дня
   image  — путь к картинке (кладёшь файл в assets/images/)
   music  — путь к треку (кладёшь файл в assets/music/),
            если музыки нет — просто убери строку music
            или оставь null
   =========================================================== */

const DAY_CONFIG = {

    1:  { title:"Первое число августа",  text:"Надеюсь этот месяц принесет тебе только радость и как можно больше моей любви, кстати я люблю тебя очень сильно!",  image:"https://i.pinimg.com/736x/3f/d1/8c/3fd18c0f1660f780db5fcd14a629377b.jpg",  music:null },
    2:  { title:"Второе число августа",  text:"Туть эта, ну, как бы так сказать... ты моя прелесть вопщем, мяу",  image:"https://i.pinimg.com/1200x/38/8b/04/388b04f00944b737fda539cc5eeeb442.jpg",  music:null },
    3:  { title:"Третье число августа",  text:"Знаешь, дарить подарочки в интернете круто конечно, но ты не представляешь как бы сильно я хотел подарить тебе цветочек..",  image:"https://i.pinimg.com/736x/c6/82/e0/c682e0ea53ffecd459cefc6ae4c0d34f.jpg",  music:null },
    4:  { title:"Четвертое число августа",  text:"Я люблю тебя, ты знаешь, но!!! я люблю тебя очень сильно, ну прям пиздец, ну вот честно, ты очень мне дорога <3",  image:"https://i.pinimg.com/736x/01/8d/d2/018dd224ac388e0c25ed03daed4643a6.jpg",  music:null },
    5:  { title:"Пятое число августа",  text:"Я бы очень хотел, прожить всю эту блядскую жизнь, вместе с тобой, я уверен что вместе она будет не такой ужасной)",  image:"https://i.pinimg.com/1200x/54/b7/6c/54b76c2f384167455019371d6fa88017.jpg",  music:null },
    6:  { title:"Шестое число августа",  text:"Очень хотел бы обнять тебя так, как котик обнимает эту банку монстра, мяв",  image:"https://i.pinimg.com/736x/70/ea/fe/70eafe62db4a6c39c8d1d81d73e98afd.jpg",  music:null },
    7:  { title:"Седьмое число августа",  text:"Круто было бы сидеть сейчас где-нибудь на лавочке, или на крыше, в общем вайбовом местечке и рассказывать всякие искренние штучки...",  image:"https://i.pinimg.com/736x/70/be/0c/70be0c8aba1703319f6da98878c3c405.jpg",  music:null },

    8:  { title:"Восьмое число августа",  text:"Надеюсь у тебя все не так плохо, я тебя люблю очень и скучаю",  image:"https://i.pinimg.com/1200x/51/5d/ca/515dcacf66f4856d15c201296acd3c64.jpg",  music:null },
    9:  { title:"Девятое число августа",  text:"Котик соскучився, мяу, обнимашек хочу",  image:"https://i.pinimg.com/736x/f4/b1/b5/f4b1b50ad737868012168d70c068b193.jpg",  music:null },
    10: { title:"Десятое число августа", text:"Хоть бы у тя все было хорошо (⁰ ◕〜◕ ⁰)", image:"https://i.pinimg.com/736x/f3/5e/75/f35e75382882924521c064b439492e75.jpg", music:null },
    11: { title:"Одиннадцатое число августа", text:"Я соскучился, ужас как сильно соскучился", image:"https://i.pinimg.com/736x/56/cb/f8/56cbf883b6928c2852417f7f3e8141ba.jpg", music:null },
    12: { title:"Двенадцатое число августа", text:"Мяу мяу? мяу мяууу мяу..", image:"https://i.pinimg.com/736x/b1/2d/0c/b12d0c39a64e7b337a80baef5758fa39.jpg", music:null },
    13: { title:"Тринадцатое число августа", text:"YНинаю, смотреш ты или неть, но я надеюсь те все нрав :3", image:"https://i.pinimg.com/736x/49/f7/7c/49f77c4999d23f9084026ec65f73c0e9.jpg", music:null },
    14: { title:"Четырнадцатое число августа", text:"Мне тебя очень не хватает", image:"https://i.pinimg.com/736x/a0/27/62/a0276281ac5c04ada2b33c789d54bd96.jpg", music:null },
    15: { title:"Пятнадцатое число августа", text:"Напомимяу, я тебя очень мяулюблю!!", image:"https://i.pinimg.com/736x/b2/04/10/b20410aa62ac4c26c28d7bc69bfc713e.jpg", music:null },

    16: { title:"Шестнадцатое число августа", text:"Description for day 16.", image:"assets/images/16.jpg", music:null },
    17: { title:"Семнадцатое число августа", text:"Description for day 17.", image:"assets/images/17.jpg", music:null },
    18: { title:"Восемнадцатое число августа", text:"Description for day 18.", image:"assets/images/18.jpg", music:null },
    19: { title:"Девятнадцатое число августа", text:"Description for day 19.", image:"assets/images/19.jpg", music:null },
    20: { title:"Двадцатое число августа", text:"Description for day 20.", image:"assets/images/20.jpg", music:null },
    21: { title:"Двадцатое первое число августа", text:"Description for day 21.", image:"assets/images/21.jpg", music:null },
    22: { title:"Двадцатое второе число августа", text:"Description for day 22.", image:"assets/images/22.jpg", music:null },
    23: { title:"Двадцатое третье число августа", text:"Description for day 23.", image:"assets/images/23.jpg", music:null },
    24: { title:"Двадцатое четвертое число августа", text:"Description for day 24.", image:"assets/images/24.jpg", music:null },
    
    25: { title:"Двадцатое пятое число августа", text:"Description for day 25.", image:"assets/images/25.jpg", music:null },
    26: { title:"Двадцатое шестое число августа", text:"Description for day 26.", image:"assets/images/26.jpg", music:null },
    27: { title:"Двадцатое седьмое число августа", text:"Description for day 27.", image:"assets/images/27.jpg", music:null },
    28: { title:"Двадцатое восьмое число августа", text:"Description for day 28.", image:"assets/images/28.jpg", music:null },
    29: { title:"Двадцатое девятое число августа", text:"Description for day 29.", image:"assets/images/29.jpg", music:null },
    30: { title:"Тридцатое число августа", text:"Description for day 30.", image:"assets/images/30.jpg", music:null },
    31: { title:"Тридцатое первое число августа", text:"Description for day 31.", image:"assets/images/31.jpg", music:null }

};


const calendar = document.getElementById("calendar");

const modal = document.getElementById("modal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalText = document.getElementById("modalText");

const modalAudio = document.getElementById("modalAudio");

const closeButton = document.getElementById("close");

const embersLayer = document.getElementById("embers");


const opened = loadProgress();


const data = [];

for(let i = 1; i <= DAYS; i++){

    const cfg = DAY_CONFIG[i] || {};

    data.push({

        day:i,

        title:cfg.title || `Day ${i}`,

        text:cfg.text || `Description for day ${i}.`,

        image:cfg.image || `assets/images/${i}.jpg`,

        music:cfg.music || null

    });

}


/* ===========================================================
   INIT
   =========================================================== */

window.addEventListener("DOMContentLoaded",()=>{

    createCalendar();

    spawnEmbers(16);

    closeButton.addEventListener(

        "click",

        closeModal

    );

    modal.addEventListener("click",(e)=>{

        if(e.target===modal){

            closeModal();

        }

    });

    window.addEventListener("keydown",(e)=>{

        if(e.key==="Escape" && !modal.classList.contains("hidden")){

            closeModal();

        }

    });

});


/* ===========================================================
   CREATE GRID
   =========================================================== */

function createCalendar(){

    calendar.innerHTML="";

    data.forEach((item,index)=>{

        calendar.append(

            createCard(item,index)

        );

    });

}

/* ===========================================================
   CREATE CARD
   =========================================================== */

function createCard(item,index){

    const card = document.createElement("button");

    card.className = "card";

    card.dataset.day = item.day;

    card.style.setProperty("--i", index);

    const now = new Date();

    const isAugust = now.getMonth() === 7;

    const currentDay = isAugust ? now.getDate() : 0;

    const unlockAll = localStorage.getItem(DEBUG_UNLOCK_KEY) === "true";

    if(item.day > currentDay && !unlockAll){

        card.classList.add("locked");

    }

    if(opened.includes(item.day)){

        card.classList.add("opened");

    }

    if(isAugust && item.day === currentDay){

        card.classList.add("today");

    }

    card.innerHTML = `

        <div class="texture"></div>

        <div class="glass"></div>

        <div class="arch"></div>

        <div class="chain"></div>

        <div class="seal"></div>

        <div class="medallion"></div>

        <div class="cracks"></div>

        <span class="number">

            ${item.day}

        </span>

    `;

    card.addEventListener("click",()=>{

        if(card.classList.contains("locked")){

            shake(card);

            return;

        }

        if(!opened.includes(item.day)){

            opened.push(item.day);

            saveProgress();

            card.classList.add("opened","just-opened");

            card.addEventListener(

                "animationend",

                ()=>card.classList.remove("just-opened"),

                {once:true}

            );

        }

        openModal(item);

    });

    return card;

}

/* ===========================================================
   SHAKE
   =========================================================== */

function shake(element){

    element.animate(

        [

            {transform:"translateX(0) rotate(0)"},

            {transform:"translateX(-6px) rotate(-1deg)"},

            {transform:"translateX(6px) rotate(1deg)"},

            {transform:"translateX(-4px) rotate(-.5deg)"},

            {transform:"translateX(4px) rotate(.5deg)"},

            {transform:"translateX(0) rotate(0)"}

        ],

        {

            duration:350,

            easing:"ease"

        }

    );

}

/* ===========================================================
   OPEN MODAL
   =========================================================== */

function openModal(item){

    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";

    modalTitle.textContent = item.title;

    modalText.textContent = item.text;

    modalImage.style.backgroundImage =
        `url(${item.image})`;

    if(item.music){

        modalAudio.src = item.music;

        modalAudio.currentTime = 0;

        modalAudio.volume = 0.55;

        modalAudio.play().catch(()=>{

            /* браузер может заблокировать автоплей — это не критично */

        });

    }
    else{

        modalAudio.pause();

        modalAudio.removeAttribute("src");

    }

}


/* ===========================================================
   CLOSE MODAL
   =========================================================== */

function closeModal(){

    modal.classList.add("hidden");

    document.body.style.overflow = "";

    modalAudio.pause();

}

/* ===========================================================
   EMBERS
   =========================================================== */

function spawnEmbers(count){

    if(!embersLayer) return;

    for(let i = 0; i < count; i++){

        const ember = document.createElement("span");

        ember.className = "ember";

        ember.style.left = `${Math.random()*100}%`;

        ember.style.setProperty(

            "--drift",

            `${(Math.random()*80-40).toFixed(0)}px`

        );

        ember.style.animationDuration =
            `${(10+Math.random()*10).toFixed(1)}s`;

        ember.style.animationDelay =
            `${(Math.random()*14).toFixed(1)}s`;

        embersLayer.append(ember);

    }

}

/* ===========================================================
   STORAGE
   =========================================================== */

function saveProgress(){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(opened)

    );

}

function loadProgress(){

    const saved = localStorage.getItem(

        STORAGE_KEY

    );

    if(!saved){

        return [];

    }

    try{

        return JSON.parse(saved);

    }

    catch{

        return [];

    }

}
