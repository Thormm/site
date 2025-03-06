(function () {
  'use strict';

  // ======================
  // navigation
  // ======================
  window.addEventListener('scroll', function () {
    let nav = document.querySelector('.navigation');
    if (window.scrollY > 1) {
      nav.classList.add('nav-bg');
    } else {
      nav.classList.remove('nav-bg');
    }
  });

  // ======================
  // Search Form Open
  // ====================== 
  document.querySelector('#searchOpen').addEventListener('click', function () {
    let searchWrapper = document.querySelector('.search-wrapper');
    searchWrapper.classList.add('open');
    setTimeout(function () {
      document.querySelector('.search-box').focus();
    }, 400);
  });

  document.querySelector('#searchClose').addEventListener('click', function () {
    document.querySelector('.search-wrapper').classList.remove('open');
  });

  // ======================
  // clients logo slider
  // ====================== 
  new Swiper(".client-logo-slider", {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 10,
    speed: 500,
    autoplay: {
      delay: 2400,
    },
    breakpoints: {
      0: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 4,
      },
      1190: {
        slidesPerView: 5,
      },
    }
  });

  // ======================
  // Same Height
  // ======================  
  function setHeight() {
    var tallest = 0;
    var elements = document.querySelectorAll('.match-height');
    if (window.innerWidth < 767) {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.height = 'auto';
      }
    } else {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.height = 'auto';
        var height = elements[i].offsetHeight;
        if (height > tallest) {
          tallest = height;
        }
      }
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.height = tallest + 'px';
      }
    }
  }

  window.addEventListener('load', setHeight);
  window.addEventListener('resize', setHeight);

  // ======================
  // Lightbox Gallery
  // ======================
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
  });

  // ==================================
  // Shuffle js filter and masonry
  // ==================================
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    document.querySelectorAll('input[name="shuffle-filter"]').forEach(function (input) {
      input.addEventListener('change', function () {
        if (input.checked) {
          myShuffle.filter(input.value);
        }
      });
    });
  }
})();