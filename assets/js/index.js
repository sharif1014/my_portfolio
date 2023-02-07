(function ($) {
  "use strict";
  /*--------------------------------------------------------------
      Scripts initialization
    --------------------------------------------------------------*/
  $(window).on("load", function () {
    isotopeInitilize();
    carouselFun();
  });

  $(function () {
    humbergerMenu();
  });

  $(window).on("scroll", function () {});

  /*--------------------------------------------------------------
      1. Test Plugin
    --------------------------------------------------------------*/
  function isotopeInitilize() {
    // Masonry isotope functionality
    $("#portfolio_items").isotope({
      // options
      itemSelector: ".item",
      percentPosition: true,
      masonry: {
        columnWidth: 1,
      },
    });
    $(".nav-item").click(function () {
      $(".nav-item").removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr("data-filter");
      $("#portfolio_items").isotope({
        filter: selector,
      });
      return false;
    });
  }
  //Owl carousel functionality
  function carouselFun() {
    $(".post_images").owlCarousel({
      loop: true,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
      },
    });
  }

  /*--------------------------------------------------------------
    2. Scroll up
  --------------------------------------------------------------*/
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 300) {
      $("#scrollTopBtn").addClass("active");
    } else {
      $("#scrollTopBtn").removeClass("active");
    }
    $("#scrollTopBtn").click(function () {
      $("html,body").scrollTop(0);
    });
  });
})(jQuery); // End of use strict

// Mobile menu functionality
function humbergerMenu() {
  let isMenuOpen = false;
  $(".humberger_icon").click(function () {
    $(".menu_lists").slideToggle();
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      $(".humberger_icon span").addClass("close");
    } else {
      $(".humberger_icon span").removeClass("close");
    }
    //$(".humberger_icon span").toggleClass("close");
  });
  $(window).resize(function () {
    if ($(window).width() > 768) {
      $(".menu_lists").show();
    } else {
      if (isMenuOpen) {
        $(".menu_lists").show();
      } else {
        $(".menu_lists").hide();
      }
    }
  });
}
$(document).ready(function () {
  $(".menu_link").click(function () {
    $(".menu_link").removeClass("active");
    $(this).addClass("active");
  });
});
