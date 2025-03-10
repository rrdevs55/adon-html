/***************************************************
==================== JS INDEX ======================
****************************************************

  // Data Css js
  //  sticky header
  // Register GSAP Plugins
  // Smooth active
  // Preloader
  // Side Info Js
  // meanmenu activation 
  // Counter active
  // Magnific Video popup
  // Image Reveal Animation
  // testimonial slider
  // text slider 
  // client slider 
  // GSAP Fade Animation 
  // Text Invert With Scroll 
  // Pin Active
  // grow animation 
  // go full width 
  // scale animation 
  // cta text animation 
  // hover reveal start
  // go-visible animation 
  // video Active
  // Moving text		
  // Moving Gallery		
  // moving testimonial 
  // capability hover active 
  // video start
  // text-animation start
  // service-area-2 text and bg animation start
  // work-area-2 box animation start
  // hover reveal image animation 
  // GSAP hover animations for .text-underline elements
  // Client Pin Active
  // about 3 thumb animation 
  // GSAP title animation
  // Animation Word
  // Full Character Setup 
  // approach-area
  // approach-area service details page
  // button animation
  // service-area-4
  // service-area-4 image
  // portfolio-slide
  // portfolio-slide-2
  // portfolio-slide-3
  // portfolio-slide-4
  // portfolio-slide-5
  // parallax
  // woking card



****************************************************/

(function ($) {
  "use strict";

  var windowOn = $(window);
  let mm = gsap.matchMedia();


  // Data Css js
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  //  sticky header
  function pinned_header() {
    var lastScrollTop = 0;

    windowOn.on('scroll', function () {
      var currentScrollTop = $(this).scrollTop();
      if (currentScrollTop > lastScrollTop) {
        $('.header-sticky').removeClass('sticky');
        $('.header-sticky').addClass('transformed');
      } else if ($(this).scrollTop() <= 500) {
        $('.header-sticky').removeClass('sticky');
        $('.header-sticky').removeClass('transformed');
      } else {
        // Scrolling up, remove the class
        $('.header-sticky').addClass('sticky');
        $('.header-sticky').removeClass('transformed');
      }
      lastScrollTop = currentScrollTop;
    });
  }
  pinned_header();

  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CustomEase);

  // Smooth active
  var device_width = window.screen.width;

  if (device_width > 767) {
    if (document.querySelector("#has_smooth").classList.contains("has-smooth")) {
      const smoother = ScrollSmoother.create({
        smooth: 0.9,
        effects: device_width < 1025 ? false : true,
        smoothTouch: 0.1,
        // normalizeScroll: false,
        normalizeScroll: {
          allowNestedScroll: true,
        },
        ignoreMobileResize: true,
      });
    }

  }

  // GSAP Fade Animation 
  let fadeArray_items = document.querySelectorAll(".fade-anim");
  if (fadeArray_items.length > 0) {
    const fadeArray = gsap.utils.toArray(".fade-anim")
    fadeArray.forEach((item, i) => {
      var fade_direction = "bottom"
      var onscroll_value = 1
      var duration_value = 1.15
      var fade_offset = 50
      var delay_value = 0.15
      var ease_value = "power2.out"
      if (item.getAttribute("data-offset")) {
        fade_offset = item.getAttribute("data-offset");
      }
      if (item.getAttribute("data-duration")) {
        duration_value = item.getAttribute("data-duration");
      }
      if (item.getAttribute("data-direction")) {
        fade_direction = item.getAttribute("data-direction");
      }
      if (item.getAttribute("data-on-scroll")) {
        onscroll_value = item.getAttribute("data-on-scroll");
      }
      if (item.getAttribute("data-delay")) {
        delay_value = item.getAttribute("data-delay");
      }
      if (item.getAttribute("data-ease")) {
        ease_value = item.getAttribute("data-ease");
      }
      let animation_settings = {
        opacity: 0,
        ease: ease_value,
        duration: duration_value,
        delay: delay_value,
      }
      if (fade_direction == "top") {
        animation_settings['y'] = -fade_offset
      }
      if (fade_direction == "left") {
        animation_settings['x'] = -fade_offset;
      }
      if (fade_direction == "bottom") {
        animation_settings['y'] = fade_offset;
      }
      if (fade_direction == "right") {
        animation_settings['x'] = fade_offset;
      }
      if (onscroll_value == 1) {
        animation_settings['scrollTrigger'] = {
          trigger: item,
          start: 'top 85%',
        }
      }
      gsap.from(item, animation_settings);
    })
  }


  // Preloader Animation
  $(document).ready(function () {
    setTimeout(function () {
      $('#container').addClass('loaded');
    }, 500);

    setTimeout(function () {
      $('.loader-wrap').fadeOut(1000, function () {
        $(this).remove();
      });
    }, 3000);

    $('.odometer').waypoint(function (direction) {
      if (direction === 'down') {
        let countNumber = $(this.element).attr("data-count");
        $(this.element).html(countNumber);
      }
    }, {
      offset: '80%'
    });
  });



  const svg = document.getElementById("svg");
  const tl = gsap.timeline();
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
    delay: 1.5,
    y: -100,
    opacity: 0,
  });
  tl.to(svg, {
    duration: 0.5,
    attr: {
      d: curve
    },
    ease: "power2.easeIn",
  }).to(svg, {
    duration: 0.5,
    attr: {
      d: flat
    },
    ease: "power2.easeOut",
  });
  tl.to(".loader-wrap", {
    y: -1500,
  });
  tl.to(".loader-wrap", {
    zIndex: -1,
    display: "none",
  });
  tl.from(
    "main", {
    y: 100,
    opacity: 0,
    delay: 0.3,
  },
    "-=1.5"
  );

  // Preloader end

  // Side Info Js
  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });

  $(window).scroll(function () {
    if ($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
      $(".side-info").removeClass("info-open");
      $(".offcanvas-overlay").removeClass("overlay-open");
    }
  });

  // meanmenu activation 
  $('.main-menu').meanmenu({
    meanScreenWidth: "1199",
    meanMenuContainer: '.mobile-menu',
    meanMenuCloseSize: '28px',
  });
  $('.main-menu-all').meanmenu({
    meanScreenWidth: "5000",
    meanMenuContainer: '.mobile-menu',
    meanMenuCloseSize: '28px',
  });



  // Magnific Video popup
  if ($('.video-popup').length && 'magnificPopup' in jQuery) {
    $('.video-popup').magnificPopup({
      type: 'iframe',
    });
  }

  // GSAP title animation
  if (document.querySelectorAll(".rr_title_anim").length > 0) {
    if ($('.rr_title_anim').length > 0) {
      let splitTitleLines = gsap.utils.toArray(".rr_title_anim");
      splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none reverse'
          }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.2
        });
      });
    }
  }

  // Animation Word
  if (document.querySelectorAll(".word-anim").length > 0) {
    let animation_word_anim_items = document.querySelectorAll(".word-anim");

    animation_word_anim_items.forEach((word_anim_item) => {

      var stagger_value = 0.04
      var translateX_value = false
      var translateY_value = false
      var onscroll_value = 1
      var data_delay = 0.1
      var data_duration = 0.75

      if (word_anim_item.getAttribute("data-stagger")) {
        stagger_value = word_anim_item.getAttribute("data-stagger");
      }
      if (word_anim_item.getAttribute("data-translateX")) {
        translateX_value = word_anim_item.getAttribute("data-translateX");
      }

      if (word_anim_item.getAttribute("data-translateY")) {
        translateY_value = word_anim_item.getAttribute("data-translateY");
      }

      if (word_anim_item.getAttribute("data-on-scroll")) {
        onscroll_value = word_anim_item.getAttribute("data-on-scroll");
      }
      if (word_anim_item.getAttribute("data-delay")) {
        data_delay = word_anim_item.getAttribute("data-delay");
      }
      if (word_anim_item.getAttribute("data-duration")) {
        data_duration = word_anim_item.getAttribute("data-duration");
      }

      if (onscroll_value == 1) {
        if (translateX_value && !translateY_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: data_duration,
            x: translateX_value,
            autoAlpha: 0,
            stagger: stagger_value,
            delay: data_delay,
            scrollTrigger: {
              trigger: word_anim_item,
              start: 'top 90%'
            }
          });
        }

        if (translateY_value && !translateX_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value,
            scrollTrigger: {
              trigger: word_anim_item,
              start: 'top 90%'
            }
          });
        }

        if (translateY_value && translateX_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            x: translateX_value,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value,
            scrollTrigger: {
              trigger: word_anim_item,
              start: 'top 90%'
            }
          });
        }

        if (!translateX_value && !translateY_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            x: 20,
            autoAlpha: 0,
            stagger: stagger_value,
            scrollTrigger: {
              trigger: word_anim_item,
              start: 'top 85%',
            }
          });
        }
      } else {
        if (translateX_value > 0 && !translateY_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            x: translateX_value,
            autoAlpha: 0,
            stagger: stagger_value
          });
        }

        if (translateY_value > 0 && !translateX_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value
          });
        }

        if (translateY_value > 0 && translateX_value > 0) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            x: translateX_value,
            y: translateY_value,
            autoAlpha: 0,
            stagger: stagger_value
          });
        }

        if (!translateX_value && !translateY_value) {
          let split_word = new SplitText(word_anim_item, {
            type: "chars, words"
          })
          gsap.from(split_word.words, {
            duration: 1,
            delay: data_delay,
            x: 20,
            autoAlpha: 0,
            stagger: stagger_value
          });
        }

      }

    });
  }


  // Full Character Setup 
  // if (document.querySelectorAll(".char-anim").length > 0) {
  //   var animation_char_come_items = document.querySelectorAll(".char-anim")
  //   animation_char_come_items.forEach((item) => {

  //     var stagger_value = 0.05
  //     var translateX_value = 20
  //     var translateY_value = false
  //     var onscroll_value = 1
  //     var data_delay = 0.1
  //     var data_duration = 1
  //     var ease_value = "power2.out"

  //     if (item.getAttribute("data-stagger")) {
  //       stagger_value = item.getAttribute("data-stagger");
  //     }
  //     if (item.getAttribute("data-translateX")) {
  //       translateX_value = item.getAttribute("data-translateX");
  //     }
  //     if (item.getAttribute("data-translateY")) {
  //       translateY_value = item.getAttribute("data-translateY");
  //     }
  //     if (item.getAttribute("data-on-scroll")) {
  //       onscroll_value = item.getAttribute("data-on-scroll");
  //     }
  //     if (item.getAttribute("data-delay")) {
  //       data_delay = item.getAttribute("data-delay");
  //     }
  //     if (item.getAttribute("data-ease")) {
  //       ease_value = item.getAttribute("data-ease");
  //     }
  //     if (item.getAttribute("data-duration")) {
  //       data_duration = item.getAttribute("data-duration");
  //     }

  //     if (onscroll_value == 1) {
  //       if (translateX_value > 0 && !translateY_value) {
  //         let split_char = new SplitText(item, {
  //           type: "chars, words"
  //         });
  //         gsap.from(split_char.chars, {
  //           duration: data_duration,
  //           delay: data_delay,
  //           x: translateX_value,
  //           autoAlpha: 0,
  //           stagger: stagger_value,
  //           ease: ease_value,
  //           scrollTrigger: {
  //             trigger: item,
  //             start: 'top 85%',
  //           }
  //         });
  //       }
  //       if (translateY_value > 0 && !translateX_value) {
  //         let split_char = new SplitText(item, {
  //           type: "chars, words"
  //         });
  //         gsap.from(split_char.chars, {
  //           duration: data_duration,
  //           delay: data_delay,
  //           y: translateY_value,
  //           autoAlpha: 0,
  //           ease: ease_value,
  //           stagger: stagger_value,
  //           scrollTrigger: {
  //             trigger: item,
  //             start: 'top 85%',
  //           }
  //         });
  //       }
  //       if (translateX_value && translateY_value) {
  //         let split_char = new SplitText(item, {
  //           type: "chars, words"
  //         });
  //         gsap.from(split_char.chars, {
  //           duration: 2,
  //           delay: data_delay,
  //           y: translateY_value,
  //           x: translateX_value,
  //           autoAlpha: 0,
  //           ease: ease_value,
  //           stagger: stagger_value,
  //           scrollTrigger: {
  //             trigger: item,
  //             start: 'top 85%',
  //           }
  //         });
  //       }
  //       if (!translateX_value && !translateY_value) {
  //         let split_char = new SplitText(item, {
  //           type: "chars, words"
  //         });
  //         gsap.from(split_char.chars, {
  //           duration: 1,
  //           delay: data_delay,
  //           x: 50,
  //           autoAlpha: 0,
  //           stagger: stagger_value,
  //           ease: ease_value,
  //           scrollTrigger: {
  //             trigger: item,
  //             start: 'top 85%',
  //           }
  //         });
  //       }
  //     } else {
  //       if (translateX_value > 0 && !translateY_value) {
  //         let split_char = new SplitText(item, {
  //           type: "chars, words"
  //         });
  //         gsap.from(split_char.chars, {
  //           duration: 1,
  //           delay: data_delay,
  //           x: translateX_value,
  //           ease: ease_value,
  //           autoAlpha: 0,
  //           stagger: stagger_value
  //         });
  //       }
  //       if (translateY_value > 0 && !translateX_value) {
  //         let split_char = new SplitText(item, {
  //           type: "chars, words"
  //         });
  //         gsap.from(split_char.chars, {
  //           duration: 1,
  //           delay: data_delay,
  //           y: translateY_value,
  //           autoAlpha: 0,
  //           ease: ease_value,
  //           stagger: stagger_value
  //         });
  //       }
  //       if (translateX_value && translateY_value) {
  //         let split_char = new SplitText(item, {
  //           type: "chars, words"
  //         });
  //         gsap.from(split_char.chars, {
  //           duration: 1,
  //           delay: data_delay,
  //           y: translateY_value,
  //           x: translateX_value,
  //           ease: ease_value,
  //           autoAlpha: 0,
  //           stagger: stagger_value
  //         });
  //       }
  //       if (!translateX_value && !translateY_value) {
  //         let split_char = new SplitText(item, {
  //           type: "chars, words"
  //         });
  //         gsap.from(split_char.chars, {
  //           duration: 1,
  //           delay: data_delay,
  //           ease: ease_value,
  //           x: 50,
  //           autoAlpha: 0,
  //           stagger: stagger_value
  //         });
  //       }
  //     }

  //   });


  //   let revealContainers = document.querySelectorAll(".return");

  //   revealContainers.forEach((container) => {
  //     let image = container.querySelector("img");
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container,
  //         toggleActions: "restart none none reset"
  //       }
  //     });

  //     tl.set(container, { autoAlpha: 1 });
  //     tl.from(container, 1.5, {
  //       xPercent: -100,
  //       ease: Power2.out
  //     });
  //     tl.from(image, 1.5, {
  //       xPercent: 100,
  //       scale: 1.3,
  //       delay: -1.5,
  //       ease: Power2.out
  //     });
  //   });

  // }



  // button animation
  $('.rr-btn-circle').on('mouseenter', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find('.rr-btn-circle-dot').css({
      top: y,
      left: x
    });
  });

  $('.rr-btn-circle').on('mouseout', function (e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;

    $(this).find('.rr-btn-circle-dot').css({
      top: y,
      left: x
    });
  });
  1
  var hoverBtns = gsap.utils.toArray(".rr-hover-btn-wrapper");

  const hoverBtnItem = gsap.utils.toArray(".rr-btn-circle");
  hoverBtns.forEach((btn, span) => {
    $(btn).mousemove(function (e) {
      callParallax(e);
    });

    function callParallax(e) {
      parallaxIt(e, hoverBtnItem[span], 100);
    }

    function parallaxIt(e, target, movement) {
      var $this = $(btn);
      var relX = e.pageX - $this.offset().left;
      var relY = e.pageY - $this.offset().top;

      gsap.to(target, 0.5, {
        x: ((relX - $this.width() / 2) / $this.width()) * movement,
        y: ((relY - $this.height() / 2) / $this.height()) * movement,
        ease: Power2.easeOut,
      });
    }
    $(btn).mouseleave(function (e) {
      gsap.to(hoverBtnItem[span], 0.5, {
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });

  // contact-form-daynamic
  $(document).ready(function () {
    $('#contact__form').submit(function (event) {
      event.preventDefault();
      var form = $(this);
      $('.loading-form').show();

      setTimeout(function () {
        $.ajax({
          type: form.attr('method'),
          url: form.attr('action'),
          data: form.serialize()
        }).done(function (data) {
          $('.loading-form').hide();
          $('#response-message').html('<p class="success-message">Your message has been sent successfully.</p>');
          form[0].reset();
        }).fail(function () {
          $('.loading-form').hide();
          $('#response-message').html('<p class="error-message">Something went wrong. Please try again later.</p>');
        });
      }, 1000);
    });
  });



  document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".hero-2__video video");

    video.addEventListener("click", function () {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
      }
    });
  });

  // client slider 
  if (document.querySelectorAll(".client-slider-active").length > 0) {
    if ('.client-slider-active') {
      var client_slider_active = new Swiper(".client-slider-active", {
        slidesPerView: 'auto',
        loop: true,
        autoplay: true,
        spaceBetween: 145,
        speed: 5000,
        allowTouchMove: false,
        autoplay: {
          delay: 1,
        },
        breakpoints: {
          0: {
            spaceBetween: 50,
          },
          768: {
            spaceBetween: 100,
          },
          1200: {
            spaceBetween: 145,
          }
        }
      });
    }
  }


  // if ($('.work-area-2').length > 0 && window.innerWidth > 768) {
  //   let work_area_2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".work-area-2",
  //       start: "top -20%",
  //       end: "bottom 60%",
  //       pin: ".section-header",
  //       markers: false,
  //       pinSpacing: false,
  //       scrub: 3,
  //     },
  //   });
  // }

  if ($('.works-wrapper-box').length > 0 && window.innerWidth > 768) {
    // let initialPosition = gsap.getProperty('.section-title', 'x'); // Capture the initial position

    let work_area_2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".works-wrapper-box",
        start: "top 0%s", // Adjust this value as needed
        end: "bottom 70%", // Adjust this value as needed
        pin: ".section-header",
        markers: true,
        pinSpacing: false,
        scrub: 3,

        // onEnterBack: () => {
        //   // When section-title scrolls back up, show .remove-text class again immediately
        //   gsap.to('.section-title .remove-text', {
        //     opacity: 1,
        //     visibility: 'visible',
        //     x: '0',
        //     duration: 1
        //   });

        //   // Move section-title back to its initial position (stored in initialPosition)
        //   gsap.to('.section-title', {
        //     x: initialPosition,
        //     duration: 1
        //   });
        // },

        // onLeave: () => {
        //   // When section-title reaches the end position, hide .remove-text class first
        //   gsap.to('.section-title .remove-text', {
        //     opacity: 0,
        //     visibility: 'hidden',
        //     x: '-30',
        //     duration: 1
        //   });

        //   // Then, move .section-title 200px to the right after the text is hidden
        //   gsap.to('.work-area-2 .section-title', {
        //     x: 200,
        //     duration: 1
        //   });
        // },

      },
    });
  }


  if (document.querySelectorAll(".testimonial-active").length > 0) {
    if ('.testimonial-active') {
      var client_slider_active = new Swiper(".testimonial-active", {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 2000,
        autoplay: false,
        pagination: {
          el: ".testimonial-pagination",
        },
      });
    }
  }
  2


  // Moving text		
  if (document.querySelectorAll(".moving-text").length > 0) {
    gsap.utils.toArray('.moving-text').forEach((section, index) => {
      const w = section.querySelector('.wrapper-text');
      const [x, xEnd] = (index % 2) ? [(section.offsetWidth - w.scrollWidth), 0] : [0, section.offsetWidth - w.scrollWidth];
      gsap.fromTo(w, { x }, {
        x: xEnd,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
          start: "20% bottom",
          end: "80% top",
        }
      });
    });
  }


})(jQuery);


