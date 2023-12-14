import React from "react";
import Wedding from "../assets/popular-events/wedding.svg";
import Business from "../assets/popular-events/business.svg";
import Birthday from "../assets/popular-events/birthday.svg";
import MusicFestival from "../assets/popular-events/music-festival.svg";

const PopularEvents = () => {
  return (
    <section id="popular-events-section">
      <div class="nimbus-container">
        <div class="popular-events-container">
          <div class="popular-events-title-box">
            <h2>Popular events</h2>
            <a href="#" class="popular-event-btn">
              View all
            </a>
          </div>
          <div class="popular-events-img-box">
            <div class="popular-event-card">
              <a href="" class="popular-event-sub-card">
                <div class="popular-events-img">
                  <img src={Wedding} alt="" />
                </div>
                <span>Wedding</span>
              </a>
            </div>
            <div class="popular-event-card">
              <a href="" class="popular-event-sub-card">
                <div class="popular-events-img">
                  <img src={Business} alt="" />
                </div>
                <span>Business Events</span>
              </a>
            </div>
            <div class="popular-event-card">
              <a href="" class="popular-event-sub-card">
                <div class="popular-events-img">
                  <img src={Birthday} alt="" />
                </div>
                <span>Birthday</span>
              </a>
            </div>
            <div class="popular-event-card">
              <a href="" class="popular-event-sub-card">
                <div class="popular-events-img">
                  <img src={MusicFestival} alt="" />
                </div>
                <span>Parties</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularEvents;
