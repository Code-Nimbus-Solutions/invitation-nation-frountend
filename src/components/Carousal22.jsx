import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import Templatedata from '../Data/explorecard.json';
import './crsl.css'

const CenterMode = () => {
  const sliderRef = useRef(null);
  const { id } = useParams(); // Extract the ID from URL parameter
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    const slickStylesheet1 = document.createElement("link");
    slickStylesheet1.rel = "stylesheet";
    slickStylesheet1.type = "text/css";
    slickStylesheet1.charset = "UTF-8";
    slickStylesheet1.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css";

    const slickStylesheet2 = document.createElement("link");
    slickStylesheet2.rel = "stylesheet";
    slickStylesheet2.type = "text/css";
    slickStylesheet2.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css";

    document.head.appendChild(slickStylesheet1);
    document.head.appendChild(slickStylesheet2);

    const style = document.createElement("style");
    style.appendChild(document.createTextNode(cssstyle));
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(slickStylesheet1);
      document.head.removeChild(slickStylesheet2);
      document.head.removeChild(style);
    };
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px", // Adjusted center padding
    slidesToShow: 2, // Display 2 slides at a time
    speed: 500,
    responsive: [
      {
        breakpoint: 768, // Apply settings for screens smaller than 768px
        settings: {
          slidesToShow: 3 // Display 3 slides on smaller screens
        }
      },
      {
        breakpoint: 480, // Apply settings for screens smaller than 480px
        settings: {
          slidesToShow: 1 // Display 1 slide on smaller screens
        }
      }
    ]
  };

  const handleCardClick = (index) => {
    sliderRef.current.slickGoTo(index); // Go to the clicked slide index
  };

  useEffect(() => {
    // Find the template with the matching ID
    const selectedTemplate = Templatedata.find(template => template.id === parseInt(id));
    setTemplate(selectedTemplate);
  }, [id]); // Re-run effect when ID changes

  if (!template) {
    return <div>Loading...</div>; // Placeholder for when template data is being fetched
  }

  return (
    <div className="container">
      <Slider ref={sliderRef} {...settings}>
        <div onClick={() => handleCardClick(0)}>
          <h3>
            <img src={template.image1} alt="Slide 1" className="slide" />
          </h3>
        </div>
        <div onClick={() => handleCardClick(1)}>
          <h3>
            <img src={template.image2} alt="Slide 2" className="slide" />
          </h3>
        </div>
        <div onClick={() => handleCardClick(2)}>
          <h3>
            <img src={template.image1} alt="Slide 3" className="slide" />
          </h3>
        </div>
        <div onClick={() => handleCardClick(3)}>
          <h3>
            <img src={template.image3} alt="Slide 4" className="slide" />
          </h3>
        </div>
        <div onClick={() => handleCardClick(4)}>
          <h3>
            <img src={template.image3} alt="Slide 5" className="slide" />
          </h3>
        </div>
        <div onClick={() => handleCardClick(5)}>
          <h3>
            <img src={template.image3} alt="Slide 6" className="slide" />
          </h3>
        </div>
      </Slider>
    </div>
  );
};

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 100px 40px 40px 40px;
  max-width: 100%;
  height: 55vh;
  position: relative;
  background-color: #DFD9E2;
}
h3{
  width:145%;
}
.slide {
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px 0px;
  border-radius:10px;
  z-index: 9999;
  transform: scale(0.95);
   /* Scale down the slides */
}

.center .slick-center h3 {
  color: #e67e22;
  opacity: 1;
  transform: scale(1.1);
}

.center h3 {
  transition: all .20s ease;
}

.slick-next {
  top: -30px;
  right: 20px;
  z-index: 9999;
}

.slick-prev {
  position: absolute;
  top: -30px;
  left: 94%;
  z-index: 9999;
}

.slick-next:before, .slick-prev:before {
  color: #000;
}

@media (max-width: 768px) {
  h3 {
    width:140%
  }
  .container{
    height:30vh;
    padding: 100px 16px 16px 16px;
    padding-right:0rem;
    padding-top:2rem;
    padding-left:2rem;
    padding-bottom:1rem;
  }
  .slick-next{
    position:absolute;
    top:0.3rem;
    left:10%;
  }
  .slick-prev{
    position:relative;
    top:0.3rem;
    left:0px;
  }
}
`;

export default CenterMode;
