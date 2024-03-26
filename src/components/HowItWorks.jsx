import React from "react";
import Select from "../assets/how-it-works-imgs/Select-amico.svg";
import Design from "../assets/how-it-works-imgs/Design team-amico 1.svg";
import Contact from "../assets/how-it-works-imgs/Contact us-amico.svg";
import Lady from "../assets/how-it-works-imgs/how-it-works-img.png";

const HowItWorks = () => {
  return (
    <section id="how-it-works-section">
      <div class="nimbus-container">
        <div class="how-it-works-container">
          <h2 class="how-it-works-title">How it works</h2>

          <div class="how-it-works-box">
            <div class="how-it-works-column">
              <div class="how-it-works-img">
                <img src={Select} alt="" />
              </div>
              <div class="how-it-works-text">
                <span class="how-it-works-number">2</span>
                <h3>Submit Details</h3>
                <p>
                  Submit your name and contact number , through which we can get
                  in touch with you to understand your event and requirements.
                </p>
              </div>
              <div class="how-it-works-img">
                <img src={Design} alt="" />
              </div>
            </div>
            <div class="how-it-works-column-line">
              <span class="hw-circle-1"></span>
              <span class="hw-circle-2"></span>
              <span class="hw-circle-3"></span>
            </div>
            <div class="how-it-works-column">
              <div class="how-it-works-text">
                <span class="how-it-works-number">1</span>
                <h3>Explore Templates</h3>
                <p>
                  Choose from our creatively crafted templated for all events,
                  or choose to create a custom template for your unique event.
                </p>
              </div>
              <div class="how-it-works-img">
                <img src={Contact} alt="" />
              </div>
              <div class="how-it-works-text">
                <span class="how-it-works-number">3</span>
                <h3>We design it for you!</h3>
                <p>
                  After understanding your event and theme of celebration we
                  provide fully personalized invite websites ready to send to
                  guests.
                </p>
              </div>
            </div>
          </div>

          <div class="how-it-work-links-box">
            <h3 class="how-it-works-subtitle">Get full assistance from us!</h3>
            <a href="" class="how-it-works-link">
              Explore Templates &rarr;
            </a>
            <a href="" class="how-it-works-btn">
              Get Free Demo
            </a>
            <div class="how-it-works-img">
              <img src={Lady} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
