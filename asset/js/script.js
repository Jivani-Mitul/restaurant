/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// loader js
document.addEventListener('DOMContentLoaded', () => {
    const spinnerWrapperEL = document.querySelector('.spinner_wrapper');

    window.addEventListener('load', () => {
        spinnerWrapperEL.style.opacity = "1";
        spinnerWrapperEL.style.visibility = "visible";
        setTimeout(() => {
            spinnerWrapperEL.style.opacity = '0';
            spinnerWrapperEL.style.visibility = "hidden";
        }, 200);
    });
});


//testimonial swiper js
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    loop:true,
  });

// event swiper
var swiper = new Swiper(".eventswiper", {
    slidesPerView: 1,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        768:{
            slidesPerView: 3
        },
        576:{
            slidesPerView: 2
        }
    }
  });


  //gallery section swiper
  var swiper = new Swiper(".galleryslider", {
    slidesPerView: 1,
    spaceBetween:10,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints:{
      1200:{
        slidesPerView:5
      },
      992:{
          slidesPerView:4
      },
      768:{
          slidesPerView: 2
      },
      576:{
          slidesPerView: 2
      }
  }
  });

  // scroll animation script
  AOS.init();