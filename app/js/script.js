function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");
    function updateClock() {
      var t = getTimeRemaining(endtime);
      if (t.total <= 0) {
        clearInterval(timeinterval);
        var deadline = new Date(Date.parse(endtime) + 1 * 24 * 60 * 60 * 1000);
        initializeClock('countdown', deadline);
      }
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  var deadline="December 10 2021 00:00:00 GMT+0500";
  initializeClock("countdown", deadline);



  let btn = document.querySelector('.footer__contacts-btn');
  let email = document.querySelector('.footer__contacts-email');
  let sub = document.querySelector('.footer__contacts-sub');

  email.onclick = function() {
    btn.classList.add('footer__contacts-left');
    btn.classList.remove('footer__contacts-right');
  }
  
  sub.onclick = function() {
    btn.classList.add('footer__contacts-right');
    btn.classList.remove('footer__contacts-left');

  }


  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__menu');
  let exit = document.querySelector('.header__menu-close');

  burger.onclick = function() {
    menu.classList.add('active');
    exit.classList.add('close');
  }

  exit.onclick = function() {
    menu.classList.remove('active');
    exit.classList.remove('close');
  }

  function scrollMain(top) {
    let mainLink = document.querySelector('.header');
    
    mainLink.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth"
    });
    menu.classList.remove('active');
    exit.classList.remove('close');
  }


function scrollCourse(top) {
  let courseLink = document.querySelector('.employment__inner');
  
  courseLink.scrollIntoView({
    block: "center",
    inline: "nearest",
    behavior: "smooth"
  });
  menu.classList.remove('active');
    exit.classList.remove('close');
}

function scrollSchedule(top) {
  
  let scheduleLink = document.querySelector('.teaching__inner');
  
  scheduleLink.scrollIntoView({
    block: "center",
    inline: "nearest",
    behavior: "smooth"
  });
    menu.classList.remove('active');
    exit.classList.remove('close');
}

function scrollTeachers(top) {
  
  let teachersLink = document.querySelector('.teachers__inner');
  
  teachersLink.scrollIntoView({
    block: "center",
    inline: "nearest",
    behavior: "smooth"
  });
    menu.classList.remove('active');
    exit.classList.remove('close');
}

function scrollFooter(top) {
  
  let footerLink = document.querySelector('.footer__inner');

  footerLink.scrollIntoView({
    block: "center",
    inline: "nearest",
    behavior: "smooth"
  });
  menu.classList.remove('active');
    exit.classList.remove('close');
}


document.querySelector('.main-link').onclick = scrollMain;
document.querySelector('.course-link').onclick = scrollCourse;
document.querySelector('.schedule-link').onclick = scrollSchedule;
document.querySelector('.teachers-link').onclick = scrollTeachers;
document.querySelector('.footer-link').onclick = scrollFooter;
document.querySelector('.contact-link').onclick = scrollFooter;


  







let footerShow = document.querySelector('.footer__social');


function footerUserLocation () {

let userScroll = window.pageYOffset;


  if (userScroll > 5500) {
    footerShow.classList.add('footer__social-show');
  }
}

let startShowFirst = document.querySelector('.start__first');
let startShowSecond = document.querySelector('.start__second');
let startShowThird = document.querySelector('.start__third');
let startShowForth = document.querySelector('.start__forth');

function startUserLocation () {

  let userScroll = window.pageYOffset;
    if (userScroll > 950) {
      startShowFirst.classList.add('start__scale-block-first');
      startShowSecond.classList.add('start__scale-block-second');
      startShowThird.classList.add('start__scale-block-third');
      startShowForth.classList.add('start__scale-block-forth');
    }
  }


window.onscroll = function () {
  footerUserLocation();
  startUserLocation();
}

window.addEventListener('scroll', footerUserLocation );
window.addEventListener('scroll', startUserLocation );

 


  
  

let images = document.querySelectorAll('img');

let options = {
  root: null,
  rootMargin: '25px',
  threshold: 0.01
}

function handleImg(myImg, observer) {
  myImg.forEach(myImgSingle => {
    console.log(myImgSingle.intersectionRatio);
    if(myImgSingle.intersectionRatio > 0) {
      loadImage(myImgSingle.target);
    }
  })
}

function loadImage(image){
  image.src = image.getAttribute('data');

  let value = '';
  for (let i = 0; i < images.length; i++) {
  value = images[i];
  if(value.hasAttribute('src')) {
  value.classList.add('animation');
  }
}
}

let observer = new IntersectionObserver(handleImg, options);


images.forEach ( img => {
  observer.observe(img);
})













