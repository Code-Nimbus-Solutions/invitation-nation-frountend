import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us-section">
      <div className="nimbus-container">
        <div className="contact-us-container">
          <div className="contact-us-title-box">
            <h2 className="contact-us-title">Need help with anything?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
          <div className="contact-us-form-box">
            <form action="" className="contact-us-form">
              <input
                type="text"
                name=""
                id=""
                className="form-name"
                placeholder="Full Name"
              />
              <input
                type="tel"
                name=""
                id=""
                className="form-number"
                placeholder="Phone Number"
              />
              <input
                type="text"
                name=""
                id=""
                className="form-text"
                placeholder="Message [Optional]"
              />
              <button type="submit" className="form-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactUs;
