

const loco_ScrollTriggerFix = () =>{

    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}

loco_ScrollTriggerFix(); 


// LAYER ONE

function mobileNavFunctionality(){const navBtn = document.querySelector('.menu');



navBtn. addEventListener('click', () =>{

  let navBar =  document.querySelector('.navBar');

  document.querySelector('.navBar').classList.toggle('xpand');

  if(navBar.classList.contains('xpand')){

    
    let closeICode = `<i class="fa-solid fa-xmark"></i>`;
    navBtn.innerHTML = closeICode;

  }

  else{

    navBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
  }

})}

mobileNavFunctionality();



setTimeout(()=>{

  let mainBgm = new Audio('Assets/mainx.mp3');
  mainBgm.play();

}, 2500)




gsap.to('.logo', {

  duration: 20,
  rotate: 360,
  repeat: -1,
  yoyo: true
})


// LOADER CODE
gsap.to('.loader',{

  duration: 2,
  transform: 'translateY(-100%)',
  delay: 3,
  

})

gsap.to('.loading-txt h1',{

  opacity: .5,
  scale: .95,
  duration: 1.5,
  repeat: -1,
  yoyo: true,
})

// LAYER TWO

//   SPIKE ANIMATION {SCROLL TRIGGER}

gsap.to('.spike', {

 
  transform: 'translateX(-100%)',
  scrollTrigger: {

    trigger: '.spike',
    scroller: '.main',
    start: 'top 40%',
    scrub: 4,




    }

})

gsap.to('.spike img', {

  duration: 20,
  rotate: 360,
  repeat: -1,
  yoyo: true
})

// SWIPER JS CAROUSEL

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "3",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 800,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      depth: 10000,
    },

    920: {
       slidesPerView: 3,
    },
  },
});

// HISTORY CAROUSEL JS

var swiper2 = new Swiper(".mySwiper2", {
  grabCursor: true,
  effect: "creative",
  loop: true,
  creativeEffect: {
    prev: {
      shadow: false,
      translate: [0, 0, -800],
    },
    next: {
      translate: ["300%", 0, 0],
      
    },
  },
});

// SAMURAI TEXT ANIMATION [SCROLL TRIGGER]

gsap.to('.sam-txt-wrapper',{

  transform: 'translateX(-100%)',
  scrollTrigger: {

    trigger: '.sam-txt-wrapper',
    scroller: '.main',
    scrub: 3,
  
    start: 'top 60%',
  }
})


function animationWrapper (){

  gsap.to('.htxt',{

    y: 40,
    duration: 2,
    repeat: -1,
    yoyo: true
  })

  gsap.from('#charTxt', {

    opacity: 0,
    y: 40,
    scrollTrigger:{

      trigger: '#charTxt',
      scroller: '.main',
      start: 'top 80%',
      end: 'top 30%'


    }
  })

  gsap.from('.charWrapper', {

    opacity: 0,
    y: 40,
    scrollTrigger:{

      trigger: '.charWrapper',
      scroller: '.main',
      start: 'top 80%',
      end: 'top 40%',
      scrub: 2,
      
    }
    
  
  })

  gsap.from('#popTxt',{

    opacity: 0,
    y: 40,
    scrollTrigger: {

      trigger: '#popTxt',
      scroller: '.main',
      start: 'top 80%',
      end: 'top 40%',
    }
  })

  gsap.from('#pop',{

    opacity: 0,
    x: 40,
    scrollTrigger: {

      trigger: '#pop',
      scroller: '.main',
      start: 'top 80%',
      end: 'top 30%',
      scrub: true
    }
  })

  gsap.from('#popSubTxt',{

    opacity: 0,
    x: 40,
    scrollTrigger: {

      trigger: '#popSubTxt',
      scroller: '.main',
      start: 'top 80%',
      end: 'top 40%',
      scrub: true
    }
  })

  gsap.from('#miyaImg',{

    opacity: 0,
    x: -40,
    scrollTrigger: {

      trigger: '#miyaImg',
      scroller: '.main',
      start: 'top 80%',
      end: 'top 40%',
      scrub: true
    }
  })

  gsap.from('#topMainTxt',{

    opacity: 0,
    y: 40,
    scrollTrigger: {

      trigger: '#topMainTxt',
      scroller: '.main',
      start: 'top 80%',
      end: 'top 40%',
      
    }
  })

  gsap.from('.top-wrapper',{

    opacity: 0,
    y: 40,
    x: -100,
    scrollTrigger: {

      trigger: '.top-wrapper',
      scroller: '.main',
      start: 'top 80%',
      end: 'top 40%',
      scrub: 2
      
    }
  })

  gsap.from('#his-txt',{

    opacity: 0,
    y: 40,
    scrollTrigger: {

      trigger: '#his-txt',
      scroller: '.main',
      start: 'top 80%',
      end: 'top 40%',
      
      
    }
  })

  gsap.from('.mySwiper2z',{

    opacity: 0,
    y: 40,
    scrollTrigger: {

      trigger: '.mySwiper2z',
      scroller: '.main',
      start: 'top 80%',
      end: 'top 40%',
      scrub: true
      
    }
  })

  gsap.from('.mainVidSec',{

    opacity: 0,
    y: 40,
    x: 100,
    scrollTrigger: {

      trigger: '.mainVidSec',
      scroller: '.main',
      start: 'top 80%',
      end: 'top 40%',
      scrub: true,
      
      
    }
  })
}

animationWrapper();