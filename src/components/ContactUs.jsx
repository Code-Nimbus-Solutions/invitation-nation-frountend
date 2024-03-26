import React from "react";

const ContactUs = () => {
  return (
    <section id="contact-us-section">
      <div class="nimbus-container">
        <div class="contact-us-container">
          <div class="contact-us-title-box">
            <h2 class="contact-us-title">Need help with anything?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
          <div class="contact-us-form-box">
            <form action="" class="contact-us-form">
              <input
                type="text"
                name=""
                id=""
                class="form-name"
                placeholder="Full Name"
              />
              <input
                type="tel"
                name=""
                id=""
                class="form-number"
                placeholder="Phone Number"
              />
              <input
                type="text"
                name=""
                id=""
                class="form-text"
                placeholder="Message [Optional]"
              />
              <button type="submit" class="form-submit">
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
