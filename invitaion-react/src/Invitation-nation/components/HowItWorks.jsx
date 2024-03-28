import React from "react";
import Select from "../assets1/how-it-works-imgs/Select-amico.svg";
import Design from "../assets1/how-it-works-imgs/Design team-amico 1.svg";
import Contact from "../assets1/how-it-works-imgs/Contact us-amico.svg";
import Lady from "../assets1/how-it-works-imgs/how-it-works-img.png";

const HowItWorks = () => {
  return (
    <section id="how-it-works-section">
      <div className="nimbus-container">
        <div className="how-it-works-container">
          <h2 className="how-it-works-title">How it works</h2>

          <div className="how-it-works-box">
            <div className="how-it-works-column">
              <div className="how-it-works-img">
                <img src={Select} alt="" />
              </div>
              <div className="how-it-works-text">
                <span className="how-it-works-number">2</span>
                <h3>Submit Details</h3>
                <p>
                  Submit your name and contact number , through which we can get
                  in touch with you to understand your event and requirements.
                </p>
              </div>
              <div className="how-it-works-img">
                <img src={Design} alt="" />
              </div>
            </div>
            <div className="how-it-works-column-line">
              <span className="hw-circle-1"></span>
              <span className="hw-circle-2"></span>
              <span className="hw-circle-3"></span>
            </div>
            <div className="how-it-works-column">
              <div className="how-it-works-text">
                <span className="how-it-works-number">1</span>
                <h3>Explore Templates</h3>
                <p>
                  Choose from our creatively crafted templated for all events,
                  or choose to create a custom template for your unique event.
                </p>
              </div>
              <div className="how-it-works-img">
                <img src={Contact} alt="" />
              </div>
              <div className="how-it-works-text">
                <span className="how-it-works-number">3</span>
                <h3>We design it for you!</h3>
                <p>
                  After understanding your event and theme of celebration we
                  provide fully personalized invite websites ready to send to
                  guests.
                </p>
              </div>
            </div>
          </div>

          <div className="how-it-work-links-box">
            <h3 className="how-it-works-subtitle">Get full assistance from us!</h3>
            <a href="" className="how-it-works-link">
              Explore Templates &rarr;
            </a>
            <a href="" className="how-it-works-btn">
              Get Free Demo
            </a>
            <div className="how-it-works-img">
              <img src={Lady} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default HowItWorks;
