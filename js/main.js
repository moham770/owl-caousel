$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      margin: 5,
      loop: true,
      dots: true,
      nav: true,
      autoplay: true,
      animateOut: "fadeOut",
      animateIn: "flipInX",
      responsive: {
        0: {
          items: 1 
        },
        768: {
          items: 2 
        }
      }
    });
  });