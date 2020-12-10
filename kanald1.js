function myFunction(item) {
    var element = document.getElementById("myToggle");
    element.classList.toggle("Toggle");
    console.log(element.classList);
}


function downmenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.btndrop')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.addEventListener("load", function(){

    var mainSwiper = new Swiper('.main-slider .swiper-container', {
       breakpoints: {
        760: {
          slidesPerView: 3,
          spaceBetween: 10,
        }
      },
        loop: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


    var itemsSwiper = new Swiper('.items-slider .swiper-container', {
      breakpoints: {
        768: {
          slidesPerView: 8,
          spaceBetween: 10,
          slidesPerGroup: 8,  
        },

        930: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop: true,
          slidesPerView: 4,
          spaceBetween: 10,
          slidesPerGroup: 4,
        }

      },
        slidesPerView: 4.5,
        spaceBetween: 10,
        slidesPerGroup: 4,
      });
  })
  
