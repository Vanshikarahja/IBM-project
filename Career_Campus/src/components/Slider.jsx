import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Slider.css"; // Import your CSS file for styling

const slides = [
  {
    type: "video",
    heading: "Career Suggestion",
    description:
      "Discover the best career paths tailored for you. Get personalized suggestions and insights to help you make informed decisions about your future.",
    video: "/assets/intro.mp4", // Use string path
  },
  {
    type: "content",
    heading: "Chat Bot",
    description:
      "Interact with our AI-powered chat to get instant answers and guidance for your career queries.",
    image: "/assets/Chat.jpg", // Use string path
    buttonText: "Go to Chat",
    route: "/chat",
  },
  {
    type: "content",
    heading: "Game",
    description:
      "Play engaging games designed to assess your skills and interests, helping you find the right career fit.",
    image: "/assets/Game.jpg",
    buttonText: "Go to Game",
    route: "/game",
  },
  {
    type: "content",
    heading: "Form",
    description:
      "Fill out our comprehensive form to receive detailed career suggestions based on your profile.",
    image: "/assets/Form.jpg",
    buttonText: "Go to Form",
    route: "/form",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const slideRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <button
        className="slider-arrow left"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <div className="slider-wrapper" ref={slideRef}>
        {slides.map((slide, idx) => (
          <div
            className={`slide ${idx === current ? "active" : ""}`}
            key={idx}
            style={{
              transform: `translateX(${100 * (idx - current)}%)`,
              transition: "transform 0.6s cubic-bezier(0.77,0,0.18,1)",
            }}
          >
            {slide.type === "video" ? (
              <div
                className="slide-video"
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <video
                  src={slide.video}
                  autoPlay
                  loop
                  muted
                  className="background-video"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "1rem",
                    opacity: 0.7,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    color: "#fff",
                    background: "rgba(0,0,0,0.3)",
                    borderRadius: "1rem",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      textShadow: "0 2px 8px #000",
                    }}
                  >
                    {slide.heading}
                  </h1>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      maxWidth: "700px",
                      textAlign: "center",
                      textShadow: "0 2px 8px #000",
                    }}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="slide-box"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "90%",
                  height: "80%",
                  background: "#fff",
                  borderRadius: "1.5rem",
                  boxShadow: "0 8px 32px 0 rgba(60,60,60,0.18)",
                  padding: "3rem",
                  margin: "auto",
                }}
              >
                <div
                  className="slide-content"
                  style={{
                    flex: 1,
                    paddingRight: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                      color: "#222",
                    }}
                  >
                    {slide.heading}
                  </h2>
                  <p
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "2rem",
                      color: "#444",
                    }}
                  >
                    {slide.description}
                  </p>
                  <button
                    className="slide-btn"
                    style={{
                      padding: "1rem 2.5rem",
                      fontSize: "1.1rem",
                      borderRadius: "2rem",
                      background:
                        "linear-gradient(90deg, #232526 0%, #414345 100%)",
                      color: "#fff",
                      fontWeight: "bold",
                      border: "none",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                      cursor: "pointer",
                      transition: "background 0.3s, transform 0.2s",
                    }}
                    onClick={() => navigate(slide.route)}
                  >
                    {slide.buttonText}
                  </button>
                </div>
                <div
                  className="slide-image"
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.heading}
                    style={{
                      width: "100%",
                      maxWidth: "420px",
                      height: "auto",
                      borderRadius: "1.5rem",
                      boxShadow: "0 8px 32px 0 rgba(60,60,60,0.12)",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="slider-arrow right"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#8594;
      </button>
      <div className="slider-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;