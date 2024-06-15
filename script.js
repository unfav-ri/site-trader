function scrollFooter(scrollY, heightFooter) {
    console.log(scrollY);
    console.log(heightFooter);
  
    if (scrollY >= heightFooter) {
      $("footer").css({
        bottom: "0px",
      });
    } else {
      $("footer").css({
        bottom: "-" + heightFooter + "px",
      });
    }
  }
  
  $(window).load(function () {
    var windowHeight = $(window).height(),
      footerHeight = $("footer").height(),
      heightDocument =
        windowHeight + $(".content").height() + $("footer").height() - 20;
  
    // Definindo o tamanho do elemento pra animar
    $("#scroll-animate, #scroll-animate-main").css({
      height: heightDocument + "px",
    });
  
    // Definindo o tamanho dos elementos header e conteÃºdo
    $("header").css({
      height: windowHeight + "px",
      "line-height": windowHeight + "px",
    });
  
    $(".wrapper-parallax").css({
      "margin-top": windowHeight + "px",
    });
  
    scrollFooter(window.scrollY, footerHeight);
  
    // ao dar rolagem
    window.onscroll = function () {
      var scroll = window.scrollY;
  
      $("#scroll-animate-main").css({
        top: "-" + scroll + "px",
      });
  
      $("header").css({
        "background-position-y": 50 - (scroll * 100) / heightDocument + "%",
      });
  
      scrollFooter(scroll, footerHeight);
    };
  });
  
  $(document).ready(function () {
    var lastScrollTop = 0;
  
    $(window).scroll(function () {
      var st = $(this).scrollTop();
  
      if (st > lastScrollTop) {
        // Scrolling down
        $(".fade-in").each(function () {
          var offset = $(this).offset().top;
          var isVisible = offset - st < $(window).height() - 100;
  
          if (isVisible) {
            $(this).addClass("visible");
          }
        });
      } else {
        // Scrolling up
        $(".fade-in").each(function () {
          var offset = $(this).offset().top;
          var isVisible = offset - st < $(window).height() - 100;
  
          if (!isVisible) {
            $(this).removeClass("visible");
          }
        });
      }
  
      lastScrollTop = st;
    });
  });
  
  $(document).ready(function () {
    var menuContainer = $(".menu-container");
  
    $(window).scroll(function () {
      var scrolledToTop = $(window).scrollTop() === 0;
  
      if (scrolledToTop) {
        menuContainer.removeClass("hidden");
      } else {
        menuContainer.addClass("hidden");
      }
    });
  });