import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="bg-video"
          src="/assets/landing-bg.mp4"
        />
        <div className="video-overlay" />
      </div>
      <Navbar />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Career Campus</h1>
          <p>
            Career Campus is your one-stop platform for career guidance, job
            opportunities, and skill development. Join us to connect with
            mentors, explore job listings, and unlock your professional
            potential.
          </p>
          <div className="hero-buttons">
            <Link to="/signin" className="hero-btn signin-btn">
              Sign In
            </Link>
            <Link to="/signup" className="hero-btn signup-btn">
              Sign Up
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
