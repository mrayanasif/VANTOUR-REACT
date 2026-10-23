
import React, { useState } from "react";
import "./Slider.css";

// Import images from assets
import watch01 from "../../assets/watch-01.jxl";
import watch02 from "../../assets/watch-02.jxl";
import perfume01 from "../../assets/perfume-01.webp";
import shoes01 from "../../assets/shoes01.jpg";
import shoes02 from "../../assets/shoes-02.jpg";
import explorer from "../../assets/explorer.webp";

const items = [
  {
    title: "Timeless Precision",
    category: "WATCHES",
    desc: "Make every second count.",
    img: watch01,
    link: "/shop",
  },
  {
    title: "Signature Scents",
    category: "PERFUMES",
    desc: "A fragrance that defines you.",
    img: perfume01,
    link: "/shop",
  },
  {
    title: "Step Into Style",
    category: "SHOES",
    desc: "Own every step you take.",
    img: shoes01,
    link: "/shop",
  },
  {
    title: "Everyday Luxury",
    category: "WATCHES",
    desc: "Elevate your everyday look.",
    img: watch02,
    link: "/shop",
  },
  {
    title: "The Art of Fragrance",
    category: "PERFUMES",
    desc: "Leave a lasting impression.",
    img: explorer,
    link: "/shop",
  },
  {
    title: "Designed to Move",
    category: "SHOES",
    desc: "Comfort meets confidence.",
    img: shoes02,
    link: "/shop",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const goToSlide = (index) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;

    if (Math.abs(difference) > 45) {
      difference > 0 ? nextSlide() : prevSlide();
    }

    setTouchStart(null);
  };

  return (
    <section className="vantour-slider">
      <div className="slider-heading">
        <span className="slider-eyebrow">THE VANTOUR COLLECTION</span>

        <h2>
          DISCOVER YOUR <span>STYLE.</span>
        </h2>

        <p>Time. Scent. Style. Everything that defines you.</p>
      </div>

      <div
        className="skewed-carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="carousel-arrow carousel-prev"
          onClick={prevSlide}
          aria-label="Previous product"
          type="button"
        >
          &#8592;
        </button>

        <div className="carousel-track">
          {items.map((item, index) => {
            let offset = index - activeIndex;

            if (offset > items.length / 2) {
              offset -= items.length;
            }

            if (offset < -items.length / 2) {
              offset += items.length;
            }

            const isActive = offset === 0;

            return (
              <article
                key={item.title}
                className={`skewed-card ${
                  isActive ? "skewed-card-active" : ""
                }`}
                style={{
                  "--offset": offset,
                  "--tilt": `${offset * -9}deg`,
                  "--depth": Math.abs(offset) * 65,
                  "--direction": direction,
                }}
                onClick={() => goToSlide(index)}
                aria-current={isActive ? "true" : undefined}
              >
                <img
                  className="skewed-card-image"
                  src={item.img}
                  alt={item.title}
                  draggable="false"
                />

                <div className="skewed-card-overlay">
                  <span className="skewed-card-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <a
                    href={item.link}
                    className="skewed-card-link"
                    onClick={(event) => event.stopPropagation()}
                  >
                    EXPLORE COLLECTION <span>&#8599;</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <button
          className="carousel-arrow carousel-next"
          onClick={nextSlide}
          aria-label="Next product"
          type="button"
        >
          &#8594;
        </button>
      </div>

      <div className="carousel-footer">
        <div className="carousel-dots">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`carousel-dot ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <span className="carousel-counter">
          {String(activeIndex + 1).padStart(2, "0")}
          <span className="counter-divider"> / </span>
          {String(items.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};

export default Slider;
