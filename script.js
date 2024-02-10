function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

function homeAnimation() {
  var tl = gsap.timeline();
  tl.to(".loader-logo svg,.loader-logo2 svg", {
    transform: "translateY(-110%)",
    duration: 2,
    delay: 1,
    ease: Power1,
  })
    .to(
      ".loader-part1",
      {
        height: "0",
        duration: 3,
        ease: Power1,
      },
      "h"
    )
    .to(
      ".loader-part2",
      {
        height: "100%",
        duration: 3,
        ease: Power1,
      },
      "h"
    )
    .to(
      ".load-part",
      {
        width: "0",
        ease: Power1,

        duration: 3,
      },
      "h"
    )
    .from(
      ".home-page ",
      {
        transform: "translateY(100%)",
        ease: Power1,

        duration: 3,
      },
      "h"
    )
    .from(
      ".home-logo,.home-page-information p,.home-page-information .home-heading ,.line,.home-btn ",
      {
        scale: 0.5,
        duration: 3,
        ease: Power0,
      }
    )
    .to(".loader", {
      top: "-100%",
    })
    .to(
      ".header ",
      {
        background: "#eae5df",
        borderColor: "rgba(0, 0, 0, 0.251)",
        duration: 1,
        ease: Power1,
        scrollTrigger: {
          trigger: ".page2",
          scroller: ".main",
          start: "top 25%",
        },
      },
      "a"
    )
    .to(
      "header a",
      {
        color: "black",
        duration: 1,
        ease: Power1,
        scrollTrigger: {
          trigger: ".page2",
          scroller: ".main",
          start: "top 25%",
        },
      },
      "a"
    )
    .to(
      "header .nav-logo svg path",
      {
        // Select the path element(s) within the SVG
        fill: "black",
        duration: 1,
        ease: Power1, // Change the fill color to black (assuming you want to change the color)
        scrollTrigger: {
          trigger: ".page2",
          scroller: ".main",
          start: "top 25%",
        },
      },
      "a"
    )
    .to(
      ".nav-button a ",
      {
        background: "#00383C",
        duration: 1,
        ease: Power1,
        color: "white",
        scrollTrigger: {
          trigger: ".page2",
          scroller: ".main",
          start: "top 25%",
        },
      },
      "a"
    );
}
homeAnimation();
function slider() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}
slider();
