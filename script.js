var myDate;
var currentDate;
var currentMonth;
var currentYear;
var currentTime;
var dayNumber;
var date = document.getElementById("date");
var time = document.getElementById("time");
setInterval(() => {
  myDate = new Date();
  currentDate = myDate.getDate();
  currentMonth = myDate.getMonth();
  currentYear = myDate.getFullYear();
  currentTime = myDate.toLocaleTimeString();
  dayNumber = myDate.getDay();
  switch (dayNumber) {
    case 1: {
      currentDay = "MON";
      break;
    }
    case 2: {
      currentDay = "TUE";
      break;
    }
    case 3: {
      currentDay = "WED";
      break;
    }
    case 4: {
      currentDay = "THU";
      break;
    }
    case 5: {
      currentDay = "FRI";
      break;
    }
    case 6: {
      currentDay = "SAT";
      break;
    }
    case 0: {
      currentDay = "SUN";
      break;
    }
    default: {
      currentDate = "ERR";
      break;
    }
  }
  date.innerHTML =
    currentYear + "-" + currentMonth + "-" + currentDate + " " + currentDay;
  time.innerHTML = currentTime;
}, 1000);


// -------------------------------------- Theme Changer -------------------------------------------

let homeBg = document.getElementById('backgroundImg');
let homeIcon = document.getElementById('home');
let fog = document.getElementById('fog')
let moon = document.getElementById('moon')
let squirrel = document.getElementById('squirrel')
let forest = document.getElementById('forest')
let raccon = document.getElementById('raccon')

homeIcon.addEventListener('click',()=>{
    homeBg.style.backgroundImage = 'url(assets/bg-img.avif)';
    homeIcon.style.transform = 'translateX(0px)';
    fog.style.transform = 'translateX(50px)'
    moon.style.transform = 'translateX(50px)';
    forest.style.transform = 'translateX(50px)';
    raccon.style.transform = 'translateX(50px)';
    squirrel.style.transform = 'translateX(50px)';
})

fog.addEventListener('click',()=>{
  homeBg.style.backgroundImage = 'url(assets/fog.avif)';
  homeIcon.style.transform = 'translateX(50px)';
  fog.style.transform = 'translateX(0px)'
  moon.style.transform = 'translateX(50px)';
  forest.style.transform = 'translateX(50px)';
  raccon.style.transform = 'translateX(50px)';
  squirrel.style.transform = 'translateX(50px)';
})

moon.addEventListener('click',()=>{
  homeBg.style.backgroundImage = 'url(assets/moon.avif)';
  homeIcon.style.transform = 'translateX(50px)';
  fog.style.transform = 'translateX(50px)'
  moon.style.transform = 'translateX(0px)';
  forest.style.transform = 'translateX(50px)';
  raccon.style.transform = 'translateX(50px)';
  squirrel.style.transform = 'translateX(50px)';
})

forest.addEventListener('click',()=>{
  homeBg.style.backgroundImage = 'url(assets/forest.avif)';
  homeIcon.style.transform = 'translateX(50px)';
  fog.style.transform = 'translateX(50px)'
  moon.style.transform = 'translateX(50px)';
  forest.style.transform = 'translateX(0px)';
  raccon.style.transform = 'translateX(50px)';
  squirrel.style.transform = 'translateX(50px)';
})

raccon.addEventListener('click',()=>{
  homeBg.style.backgroundImage = 'url(assets/raccon.avif)';
  homeIcon.style.transform = 'translateX(50px)';
  fog.style.transform = 'translateX(50px)'
  moon.style.transform = 'translateX(50px)';
  forest.style.transform = 'translateX(50px)';
  raccon.style.transform = 'translateX(0px)';
  squirrel.style.transform = 'translateX(50px)';
})

squirrel.addEventListener('click',()=>{
  homeBg.style.backgroundImage = 'url(assets/squirrel.avif)';
  homeIcon.style.transform = 'translateX(50px)';
  fog.style.transform = 'translateX(50px)'
  moon.style.transform = 'translateX(50px)';
  forest.style.transform = 'translateX(50px)';
  raccon.style.transform = 'translateX(50px)';
  squirrel.style.transform = 'translateX(0px)';
})