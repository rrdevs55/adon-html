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

  // work-title animation 
  if (document.querySelectorAll(".work-title").length > 0) {
    let work_title_anim = document.querySelector(".work-title")
    if (work_title_anim) {
      let content_1 = document.querySelector(".first")
      let content_2 = document.querySelector(".last")

      gsap.to(content_1, {
        marginLeft: "0",
        ease: "none",
        scrollTrigger: {
          trigger: work_title_anim,
          scrub: 2,
          start: 'top 90%',
          end: "top center",
        }
      })

      gsap.to(content_2, {
        marginRight: "0",
        ease: "none",
        scrollTrigger: {
          trigger: work_title_anim,
          scrub: 2,
          start: 'top 90%',
          end: "top center",
        }
      })
    }
  }


  // Preloader Animation
  if (document.querySelectorAll(".loader-wrap").length > 0) {
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
  }




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
        markers: false,
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


  // portfolio 3 active 
  if (document.querySelectorAll(".portfolio-3-active").length > 0) {
    var portfolio_3_active = new Swiper(".portfolio-3-active", {
      slidesPerView: 1,
      loop: true,
      autoplay: true,
      spaceBetween: 5,
      speed: 2000,
      navigation: {
        prevEl: ".portfolio-3-button-prev",
        nextEl: ".portfolio-3-button-next",
      },
    });
  }

  // testimonial 3 active
  if (document.querySelectorAll(".testimonial-3-active").length > 0) {
    var testimonial_3_active = new Swiper(".testimonial-3-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 5,
      speed: 2000,
      watchSlidesProgress: true,
      navigation: {
        prevEl: ".testimonial-3-button-prev",
        nextEl: ".testimonial-3-button-next",
      },
      breakpoints: {
        // when window width is >= px
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1201: {
          slidesPerView: 3,
        },
        1367: {
          slidesPerView: 3,
        },
      }
    });
  }

  // Moving Gallery		
  if (document.querySelectorAll(".moving-gallery").length > 0) {
    gsap.utils.toArray('.moving-gallery').forEach((section, index) => {
      const w = section.querySelector('.wrapper-gallery');
      const [x, xEnd] = (index % 2) ? [(section.offsetWidth - w.scrollWidth), 0] : [0, section.offsetWidth - w.scrollWidth];
      gsap.fromTo(w, { x }, {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: 1,
        }
      });
    });
  }

  // Text Invert With Scroll 
  const split = new SplitText(".text-invert", { type: "lines" });
  split.lines.forEach((target) => {
    gsap.to(target, {
      backgroundPositionX: 0,
      ease: "none",
      scrollTrigger: {
        trigger: target,
        scrub: 1,
        start: 'top 85%',
        end: "bottom center",
      }
    });
  });
  // testimonial 4 active
  if (document.querySelectorAll(".testimonial-4-active").length > 0) {
    var testimonial_4_active = new Swiper(".testimonial-4-active", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 5,
      speed: 2000,
      watchSlidesProgress: true,
      pagination: {
        el: ".testimonial-4-pagination",
      },
    });
  }

  // gsap nav
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1); // Get section ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });



  /*rogress-bar***/
  if (document.querySelectorAll(".progress-bar").length > 0) {
    const bars = document.querySelectorAll('.progress-bar');
    const countTexts = document.querySelectorAll('.count-text');

    function animateToValue(bar, targetValue, countText) {
      let currentValue = parseInt(bar.style.height) || 0;

      const interval = setInterval(() => {
        const current = parseInt(bar.style.height) || 0;
        if (current < targetValue) {
          bar.style.height = (current + 1) + '%';
          countText.textContent = (current + 1) + '%';
        } else if (current > targetValue) {
          bar.style.height = (current - 1) + '%';
          countText.textContent = (current - 1) + '%';
        } else {
          clearInterval(interval);
        }
      }, 15);
    }

    function startOnScroll() {
      const section = document.getElementById('skills-section');

      const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            bars.forEach((bar, index) => {
              const target = parseInt(bar.getAttribute('data-value'));
              animateToValue(bar, target, countTexts[index]);
            });
            sectionObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.5
      });

      sectionObserver.observe(section);
    }
    startOnScroll();
  }




  // Moving brand		
  if (document.querySelectorAll(".moving-brand").length > 0) {
    mm.add("(min-width: 1200px)", () => {
      gsap.utils.toArray('.moving-brand').forEach((section, index) => {
        const w = section.querySelector('.wrapper-brand');
        const [x, xEnd] = (index % 2) ? [(section.offsetWidth - w.scrollWidth), 0] : [0, section.offsetWidth - w.scrollWidth];
        gsap.fromTo(w, { x }, {
          x: xEnd,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
            start: "20% bottom",
            end: "80% center",
          }
        });
      });
    });
  }

  // client-testimonial
  // ===============================
  mm.add("(min-width: 1200px)", () => {
    if (document.querySelectorAll(".client-testimonial").length > 0) {
      const title = document.querySelector(".section-3-title-wrapper");
      const items = gsap.utils.toArray(".client-testimonial__item");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".client-testimonial",
          start: "top 0%",
          end: "+=400%",
          scrub: 0,
          markers: true,
          pin: true
        }
      });

      tl.to(title, {
        opacity: 0,
        webkitFilter: "blur(10px)",
        scrollTrigger: {
          trigger: ".client-testimonial",
          start: "top 0%",
          end: "+=200%",
          scrub: true,
          markers: true,
        }
      });

      tl.add("startItems", "+=1");

      items.forEach((item, index) => {
        const delay = index * 0.9;
        tl.fromTo(
          item,
          { x: "450%", opacity: 1 },
          { x: 0, opacity: 1, duration: 1 },
          `startItems+=${delay}`
        );
      });

      const totalItemDuration = (items.length - 1) * 0.9 + 1;
      tl.to({}, { duration: 2 }, `startItems+=${totalItemDuration}`);
    }
  });


  // Service list Hover Animation
  // ===============================
  function Team_animation() {
    const wrapper = $(".service-5__wrapper");
    const active_bg = wrapper.find(".active-bg");

    function moveBgTo(target) {
      if (!target.length) return;

      const offsetTop = target.offset().top;
      const height = target.outerHeight();
      const wrapperTop = wrapper.offset().top;
      const translateY = offsetTop - wrapperTop;

      active_bg.css({
        transform: `translateY(${translateY}px)`,
        height: `${height}px`,
        opacity: 1
      });
    }

    // On hover
    wrapper.find(".service-5__item").on("mouseenter", function () {
      moveBgTo($(this));
    });

    // On leave, hide background
    wrapper.on("mouseleave", function () {
      active_bg.css({
        opacity: 0,
        height: 0
      });
    });
  }

  $(document).ready(function () {
    Team_animation();
  });


  // Moving Gallery		
  if (document.querySelectorAll(".fun-fact-area-inner").length > 0) {
    gsap.utils.toArray('.fun-fact-area-inner').forEach((section, index) => {
      const w = section.querySelector('.fun-fact-wrapper');
      const [x, xEnd] = (index % 2) ? [(section.offsetWidth - w.scrollWidth), 0] : [0, section.offsetWidth - w.scrollWidth];
      gsap.fromTo(w, { x }, {
        x: xEnd,
        scrollTrigger: {
          trigger: ".fun-fact-area",
          scrub: 1,
          start: "bottom bottom",
          pin: true,
          // markers: true,
        }
      });
    });
  }

  // about-4-title-shape animation 
  if (document.querySelectorAll(".about-4-title-shape").length > 0) {
    mm.add("(min-width: 1200px)", () => {
      var ab4 = gsap.timeline();
      ab4.to(".about-4-title-shape img", {
        width: "40px",
        height: "40px",
        // translateX: 50,
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-4-title-shape",
          start: "center center",
          endTrigger: ".client-area-4",
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: 0,
          markers: true,
        }
      })
      ab4.to(".about-4-title-shape img", {
        translateX: 500,
        ease: "none",
        scrollTrigger: {
          trigger: ".client-area-4",
          start: "bottom bottom",
          endTrigger: ".client-area-4",
          end: "bottom center",
          pin: ".about-area-4",
          pinSpacing: true,
          scrub: 0,
          markers: true,
        }
      })
      ab4.to(".about-4-title-shape img", {
        scale: 400,
        rotation: 90,
        ease: "none",
        scrollTrigger: {
          trigger: ".client-area-4",
          start: "bottom center",
          endTrigger: ".client-area-4",
          end: "bottom top",
          pin: ".about-area-4",
          pinSpacing: true,
          scrub: 0,
          markers: true,
        }
      })
    });
  }


  // service area animation 
  if (document.querySelectorAll(".service-area").length > 0) {
    mm.add("(min-width: 1200px)", () => {
      window.addEventListener("load", () => {
        const tl = gsap.timeline();

        tl.to(".services-wrapper-1 .service-box-1", {
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-wrapper-box",
            start: "top top",
            end: "+=50%",
            toggleActions: "play complete play reverse",
            pin: true,
            // markers: true,
          }
        });

        tl.to(".add-shape-wrapper", {
          transform: "translate(0, 0)",
          ease: "none",
          duration: 50,
          scrollTrigger: {
            trigger: ".add",
            start: "top top",
            end: "center top",
            scrub: true,
            // markers: true,
          }
        });

        tl.to(".add-shape", {
          transform: "scale(860)",
          ease: "none",
          scrollTrigger: {
            trigger: ".add",
            start: "center top",
            end: "bottom -=30%",
            pin: ".service-area",
            scrub: 0,
            // markers: true,
          }
        });
      });
    });
  }


  // Animate the image scaling to fullscreen, keeping center position
  gsap.to(".image-wrapper", {
    scrollTrigger: {
      trigger: ".hero-area-7",
      start: "top top",
      end: "+=100%",
      scrub: 1,
      pin: true,
    },
    width: "100vw",
    height: "100vh",
    ease: "power4.inOut"
  });


  // Labels fade in with horizontal movement
  gsap.to(".label-left", {
    scrollTrigger: {
      trigger: ".hero-area-7",
      start: "top 30%",
      end: "top 10%",
      scrub: true
    },
    opacity: 1,
    x: -10
  });

  gsap.to(".label-right", {
    scrollTrigger: {
      trigger: ".hero-area-7",
      start: "top 30%",
      end: "top 10%",
      scrub: true
    },
    opacity: 1,
    x: 10
  });


  // hover reveal 4 start
  // if (document.querySelectorAll(".our-expertise-7").length > 0) {
  //   const hoveritem = document.querySelectorAll(
  //     ".our-expertise-7__item"
  //   );

  //   function moveImage(e, hoveritem, index) {
  //     const item = hoveritem.getBoundingClientRect();
  //     const x = e.clientX - item.x;
  //     const y = e.clientY - item.y;
  //     if (hoveritem.children[index]) {
  //       hoveritem.children[
  //         index
  //       ].style.transform = `translate(${x}px, ${y}px)`;
  //     }
  //   }
  //   hoveritem.forEach((item, i) => {
  //     item.addEventListener("mousemove", (e) => {
  //       setInterval(moveImage(e, item, 1), 50);
  //     });
  //     add.to(".add-shape", {
  //       transform: "scale(860)",
  //       ease: "none",
  //       delay: 1,
  //       scrollTrigger: {
  //         trigger: ".add",
  //         start: "bottom 100%",
  //         end: "bottom top",
  //         pin: true,
  //         scrub: 1,
  //         // markers: true,
  //       }
  //     }, "+=1");
  //   });
  // }

})(jQuery);


