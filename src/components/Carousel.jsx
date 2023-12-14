import React from "react";

const Carousel = () => {
  function addAnimation() {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller-inner");
      const scrollerContent = Array.from(scrollerInner.children);
      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  addAnimation();

  return (
    <section id="logo-carousel-section">
      <div class="nimbus-container">
        <div class="logo-carousel-container">
          <div class="scroller" data-direction="left" data-speed="slow">
            <div class="scroller-inner">
              <span>Weddings</span>
              <span>Birthdays</span>
              <span>Business Events</span>
              <span>Parties</span>
              <span>House Warming</span>
              <span>Anniversary</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
