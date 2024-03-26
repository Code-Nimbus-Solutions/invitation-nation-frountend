import React from "react";
import HeroImg from "../assets1/hero-section-images/hero-img.png";
import HeroDecorationLeft from "../assets1/hero-section-images/hero-decoration.png";
import HeroDecorationRight from "../assets1/hero-section-images/hero-decoration.png";
import HeroRightArrow from "../assets1/hero-section-images/hero-right-arrow.png";
import HeroLeftArrow from "../assets1/hero-section-images/hero-left-arrow.png";
import { Link } from "react-router-dom";

const Hero = () => {
  let prevScrollPos = window.scrollY;

  // Function to handle scroll events
  function handleScroll() {
    // Get the current scroll position
    requestAnimationFrame(() => {
      const currentScrollPos = window.scrollY;

      // Compare current and previous scroll positions
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down, add class for down animation
        document
          .getElementById("hero-title")
          .classList.remove("hero-title-animation-backwards");
        document
          .getElementById("hero-title")
          .classList.add("hero-title-animation-forwards");
        document
          .getElementById("hero-title-2")
          .classList.remove("hero-title-2-animation-backwards");
        document
          .getElementById("hero-title-2")
          .classList.add("hero-title-2-animation-forwards");
        document
          .getElementById("hero-subtitle")
          .classList.remove("hero-subtitle-animation-backwards");
        document
          .getElementById("hero-subtitle")
          .classList.add("hero-subtitle-animation-forwards");
        document
          .getElementById("hero-btn")
          .classList.remove("hero-btn-animation-backwards");
        document
          .getElementById("hero-btn")
          .classList.add("hero-btn-animation-forwards");
        document
          .getElementById("hero-left-arrow")
          .classList.remove("hero-left-arrow-animation-backwards");
        document
          .getElementById("hero-left-arrow")
          .classList.add("hero-left-arrow-animation-forwards");
        document
          .getElementById("hero-right-arrow")
          .classList.remove("hero-right-arrow-animation-backwards");
        document
          .getElementById("hero-right-arrow")
          .classList.add("hero-right-arrow-animation-forwards");
        document
          .getElementById("hero-img")
          .classList.remove("hero-img-animation-backwards");
        document
          .getElementById("hero-img")
          .classList.add("hero-img-animation-forwards");
        document
          .getElementById("hero-decoration-left")
          .classList.remove("hero-decoration-left-animation-backwards");
        document
          .getElementById("hero-decoration-left")
          .classList.add("hero-decoration-left-animation-forwards");
        document
          .getElementById("hero-decoration-right")
          .classList.remove("hero-decoration-right-animation-backwards");
        document
          .getElementById("hero-decoration-right")
          .classList.add("hero-decoration-right-animation-forwards");
      } else {
        // Scrolling up, add class for up animation
        document
          .getElementById("hero-title")
          .classList.remove("hero-title-animation-forwards");
        document
          .getElementById("hero-title")
          .classList.add("hero-title-animation-backwards");
        document
          .getElementById("hero-title-2")
          .classList.remove("hero-title-2-animation-forwards");
        document
          .getElementById("hero-title-2")
          .classList.add("hero-title-2-animation-backwards");
        document
          .getElementById("hero-subtitle")
          .classList.remove("hero-subtitle-animation-forwards");
        document
          .getElementById("hero-subtitle")
          .classList.add("hero-subtitle-animation-backwards");
        document
          .getElementById("hero-btn")
          .classList.remove("hero-btn-animation-forwards");
        document
          .getElementById("hero-btn")
          .classList.add("hero-btn-animation-backwards");
        document
          .getElementById("hero-left-arrow")
          .classList.remove("hero-left-arrow-animation-forwards");
        document
          .getElementById("hero-left-arrow")
          .classList.add("hero-left-arrow-animation-backwards");
        document
          .getElementById("hero-right-arrow")
          .classList.remove("hero-right-arrow-animation-forwards");
        document
          .getElementById("hero-right-arrow")
          .classList.add("hero-right-arrow-animation-backwards");
        document
          .getElementById("hero-img")
          .classList.remove("hero-img-animation-forwards");
        document
          .getElementById("hero-img")
          .classList.add("hero-img-animation-backwards");
        document
          .getElementById("hero-decoration-left")
          .classList.remove("hero-decoration-left-animation-forwards");
        document
          .getElementById("hero-decoration-left")
          .classList.add("hero-decoration-left-animation-backwards");
        document
          .getElementById("hero-decoration-right")
          .classList.remove("hero-decoration-right-animation-forwards");
        document
          .getElementById("hero-decoration-right")
          .classList.add("hero-decoration-right-animation-backwards");
        // Update previous scroll position
        prevScrollPos = currentScrollPos;
      }
    });
  }

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("touchmove", handleScroll);

  return (
    <section id="hero-section">
      <div class="nimbus-container">
        <div class="hero-container">
          <h1 id="hero-title" class="hero-title">
            Digital Invites for all your events
          </h1>
          <h3 id="hero-subtitle" class="hero-subtitle">
            From weddings , birthdays to business events, we have all the
            designs you need to make the event special and memorable.
          </h3>
          <h2 id="hero-title-2" class="hero-title-2">
            MOBILE FRIENDLY
          </h2>
          <div class="hero-padding"></div>
          <a href="/temp" id="hero-btn" class="hero-btn">
            Explore Templates
          </a>
          <div id="hero-img" class="hero-img">
            <img src={HeroImg} alt="" />
          </div>
          <div class="hero-img-box">
            <div id="hero-left-arrow" class="hero-left-arrow">
              <img src={HeroLeftArrow} alt="" />
            </div>
            <div id="hero-right-arrow" class="hero-right-arrow">
              <img src={HeroRightArrow} alt="" />
            </div>
          </div>
          <div id="hero-decoration-left" class="hero-decoration-left">
            <img src={HeroDecorationLeft} alt="" />
          </div>
          <div id="hero-decoration-right" class="hero-decoration-right">
            <img src={HeroDecorationRight} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
