const navbarToggler = document.querySelector(".navbar-toggler");
const primaryNavigation = document.querySelector("#primary-navigation");
const primaryHeader = document.querySelector(".primary-header");
const logo = document.querySelector(".logo");
const loaderWrapper = document.querySelector(".loader-wrapper");
const bars = document.querySelectorAll(".bar");
const topButton = document.getElementById("top-button");

// Navigation Click Toggle
let isStretched = false;
document.addEventListener("DOMContentLoaded", function () {
  navbarToggler.addEventListener("click", function () {
    primaryNavigation.classList.toggle("show");
    bars.forEach((bar) => {
      if (isStretched) {
        bar.classList.remove("stretched");
      } else {
        bar.classList.add("stretched");
      }
    });
    isStretched = !isStretched;
  });
});

// Navigation Sticky Toggle
window.addEventListener("scroll", function () {
  primaryHeader.classList.toggle("sticky", window.scrollY > 0);
  logo.classList.toggle("logo-toggle-white", window.scrollY > 0);
});

// Loading Page Animation
document.body.classList.add("loading");

window.addEventListener("load", function () {
  loaderWrapper.style.opacity = 1;

  setTimeout(function () {
    loaderWrapper.style.transition = "transform 2.05s ease-out";
    loaderWrapper.style.transform = "translateY(-100%)";
    // loaderWrapper.style.opacity = 0;

    setTimeout(function () {
      loaderWrapper.style.display = "none";
      document.body.classList.remove("loading");
    }, 1300); // 1300 //
  }, 1500); //  1500//
});

// Arrow Animation
const arrow = document.querySelector(".arrow-show-down");
arrow.style.opacity = 0;

const startAnimation = () => {
  arrow.style.opacity = 1;

  let posY = 0;
  let startTime = null;

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;

    posY = -7 * Math.sin(progress / 300);
    arrow.style.transform = `translateY(${posY}px)`;

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};

setTimeout(startAnimation, 7000);

// Show Active Links on Navbar
const navbarLinks = document.querySelectorAll("nav ul li a");

navbarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navbarLinks.forEach((link) => {
      link.classList.remove("active");
    });

    this.classList.add("active");
  });
});

// Move Up Animations
gsap.registerPlugin(ScrollTrigger);

var animation = gsap.fromTo(
  ".container-skills-header-text",
  {
    y: 100,
    rotation: 0,
    opacity: 0,
  },
  {
    y: 0,
    rotation: 0,
    duration: 0.8,
    opacity: 1,
    ease: "ease.in",
  }
);

var animation1 = gsap.fromTo(
  ".container-programms",
  {
    y: 100,
    rotation: 0,
    opacity: 0,
  },
  {
    y: 0,
    rotation: 0,
    duration: 0.8,
    opacity: 1,
    ease: "ease.in",
  }
);

var animation2 = gsap.fromTo(
  ".container-about-me-header",
  {
    y: 100,
    rotation: 0,
    opacity: 0,
  },
  {
    y: 0,
    rotation: 0,
    duration: 0.8,
    opacity: 1,
    ease: "ease.in",
  }
);

var animation3 = gsap.fromTo(
  ".projects-header",
  {
    y: 100,
    rotation: 0,
    opacity: 0,
  },
  {
    y: 0,
    rotation: 0,
    duration: 0.8,
    opacity: 1,
    ease: "ease.in",
  }
);

var animation4 = gsap.fromTo(
  ".projects-container > :nth-child(1)",
  {
    y: 100,
    rotation: 0,
    opacity: 0,
  },
  {
    y: 0,
    rotation: 0,
    duration: 0.8,
    opacity: 1,
    ease: "ease.in",
  }
);

var animation5 = gsap.fromTo(
  ".projects-container > :nth-child(2)",
  {
    y: 100,
    rotation: 0,
    opacity: 0,
  },
  {
    y: 0,
    rotation: 0,
    duration: 0.8,
    opacity: 1,
    ease: "ease.in",
  }
);

var animation6 = gsap.fromTo(
  ".projects-container > :nth-child(3)",
  {
    y: 100,
    rotation: 0,
    opacity: 0,
  },
  {
    y: 0,
    rotation: 0,
    duration: 0.8,
    opacity: 1,
    ease: "ease.in",
  }
);

var animation7 = gsap.fromTo(
  ".container-about-me-picture",
  {
    y: 100,
    rotation: 0,
    opacity: 0,
  },
  {
    y: 0,
    rotation: 0,
    duration: 0.8,
    opacity: 1,
    ease: "ease.in",
  }
);

// Animatrion Triggers
ScrollTrigger.create({
  trigger: ".container-skills-header-text",
  start: "top 90%",
  animation: animation,
  once: true,
});

ScrollTrigger.create({
  trigger: ".container-skills-header-text",
  start: "top 80%",
  animation: animation1,
  once: true,
});

ScrollTrigger.create({
  trigger: ".container-about-me-header",
  start: "top 92%",
  animation: animation2,
  once: true,
});

ScrollTrigger.create({
  trigger: ".projects",
  start: "top 74%",
  animation: animation3,
  once: true,
});

ScrollTrigger.create({
  trigger: ".projects-container > :nth-child(1)",
  start: "top 95%",
  animation: animation4,
  once: true,
});

ScrollTrigger.create({
  trigger: ".projects-container > :nth-child(2)",
  start: "top 90%",
  animation: animation5,
  once: true,
});

ScrollTrigger.create({
  trigger: ".projects-container > :nth-child(3)",
  start: "top 90%",
  animation: animation6,
  once: true,
});

ScrollTrigger.create({
  trigger: ".me-pic",
  start: "top 90%",
  animation: animation7,
  once: true,
});

// Adds On Window To Show Button
window.addEventListener("scroll", function () {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", function () {
  var scrollInterval = setInterval(function () {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -850);
    } else {
      clearInterval(scrollInterval);
    }
  }, 7);
});

// Line Animation
const line1 = document.querySelector(".line1");

const animationLine1 = gsap.to(line1, {
  height: "200%",
  duration: 2,
  ease: "power2.out",
});

ScrollTrigger.create({
  trigger: ".container-programms",
  start: "top 50%",
  animation: animationLine1,
  once: true,
});

// Pop email
// const contactBtn = document.querySelector(".btn-work");
// const contactPop = document.querySelector(".contactPop");

// contactBtn.addEventListener("click", () => {
//   if (contactPop.style.display === "block") {
//     contactPop.style.display = "none";
//   } else {
//     contactPop.style.display = "block";
//   }
// });

// document.addEventListener("click", (event) => {
//   if (!contactPop.contains(event.target) && event.target !== contactBtn) {
//     contactPop.style.display = "none";
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.querySelector(".btn-work");
  const contactPop = document.querySelector(".contactPop");
  const contactForm = document.querySelector(".contactPop form");

  contactBtn.addEventListener("click", () => {
    if (contactPop.style.display === "block") {
      contactPop.style.display = "none";
    } else {
      contactPop.style.display = "block";
    }
  });

  document.addEventListener("click", (event) => {
    if (!contactPop.contains(event.target) && event.target !== contactBtn) {
      contactPop.style.display = "none";
    }
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the default form submission behavior

    // Add code here to submit the form data to the server

    contactPop.style.display = "none"; // hide the contact form after submission
  });
});
