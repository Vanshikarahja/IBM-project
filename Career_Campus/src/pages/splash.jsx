import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import './splash.css';

const avatars = [
  { profession: "Doctor", img: "/avatars/doctor.png" },
  { profession: "Engineer", img: "/avatars/engineer.png" },
  { profession: "Police", img: "/avatars/police.png" },
  { profession: "NavyOfficer", img: "/avatars/navy.png" },
  { profession: "Pilot", img: "/avatars/pilot.png" },
];

const Splash = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % avatars.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handlePlay = () => {
    navigate("/UserForm");
  };

  return (
    <div className="splash-container">
      <h1 className="splash-text">Future Me</h1>

      <div className="avatar-container">
        <img
          src={avatars[currentIndex].img}
          alt={avatars[currentIndex].profession}
          className="avatar-image"
        />
        <h2 className="avatar-title">{avatars[currentIndex].profession}</h2>
      </div>

      <button className="play-button" onClick={handlePlay}>
        Play
      </button>
    </div>
  );
};

export default Splash;

