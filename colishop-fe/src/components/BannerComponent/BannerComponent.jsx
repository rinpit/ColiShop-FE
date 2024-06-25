import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    imgSrc: "assets/images/banners/slide1.png",
    imgAlt: "Discover our Arrivals!",
    heading: "Discover our Arrivals!",
    link: "demo23-shop.html",
    linkText: "View our Dresses",
  },

  {
    id: 2,
    imgSrc: "assets/images/banners/slide4.png",
    imgAlt: "Trendy Collections!",
    heading: "Trendy Collections!",
    link: "demo23-shop.html",
    linkText: "View our Specials",
  },

  {
    id: 3,
    imgSrc: "assets/images/banners/slide5.png",
    imgAlt: "Trendy Collections!",
    heading: "Trendy Collections!",
    link: "demo23-shop.html",
    linkText: "View our Specials",
  },

  {
    id: 4,
    imgSrc: "assets/images/banners/slide6.png",
    imgAlt: "Trendy Collections!",
    heading: "Trendy Collections!",
    link: "demo23-shop.html",
    linkText: "View our Specials",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 8 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="banner-container">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="banner">
            <img
              className="slide-bg"
              src={slide.imgSrc}
              alt={slide.imgAlt}
              width={1200}
              height={400}
            />
            <div
              className={`banner-layer banner-layer-${
                index % 2 === 0 ? "right" : "left"
              }`}
            >
              <div className="container-fluid">
                <div
                  className="appear-animate"
                  data-animation-name={`fadeIn${
                    index % 2 === 0 ? "Right" : "Left"
                  }Shorter`}
                >
                  <h2
                    className="font-weight-light ls-10"
                    style={{ color: "#392216", marginBottom: "20px" }}
                  >
                    {slide.heading}
                  </h2>
                  <a href={slide.link} className="btn btn-link">
                    <i>{slide.linkText}</i>
                    <i className="icon-right-open-big" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
