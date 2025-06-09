import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = () => {
  const needleRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    let direction = 1;

    const animate = () => {
      if (needleRef.current) {
        angle += direction * 0.2;
        if (angle >= 5 || angle <= -5) direction *= -1;

        needleRef.current.style.transform = `rotate(${angle}deg)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">MyApp</div>
        <div className="nav-links">
          <Link to="/signup">Signup</Link>
          <Link to="/signin">Signin</Link>
        </div>
      </nav>

      <div className="compass-wrapper">
        <svg width="320" height="320" viewBox="0 0 320 320">
          <defs>
            <radialGradient id="brass" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f5deb3" />
              <stop offset="100%" stopColor="#a67c52" />
            </radialGradient>
            <radialGradient id="dust" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff8dc" />
              <stop offset="100%" stopColor="#d2b48c" />
            </radialGradient>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Outer Frame */}
          <circle cx="160" cy="160" r="150" fill="url(#brass)" stroke="#5c4428" strokeWidth="6" />

          {/* Compass Face */}
          <circle cx="160" cy="160" r="135" fill="url(#dust)" stroke="#aa8a5b" strokeWidth="2" />

          {/* Ticks */}
          {[...Array(360)].map((_, i) => {
            const angle = (i - 90) * Math.PI / 180;
            const len = i % 30 === 0 ? 10 : i % 10 === 0 ? 6 : 2;
            const x1 = 160 + Math.cos(angle) * 120;
            const y1 = 160 + Math.sin(angle) * 120;
            const x2 = 160 + Math.cos(angle) * (120 - len);
            const y2 = 160 + Math.sin(angle) * (120 - len);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#5c4428"
                strokeWidth={i % 10 === 0 ? 1.5 : 0.5}
              />
            );
          })}

          {/* Direction Labels */}
          <text x="160" y="40" fill="#5c4428" fontSize="18" fontWeight="bold" textAnchor="middle">N</text>
          <text x="160" y="305" fill="#5c4428" fontSize="18" fontWeight="bold" textAnchor="middle">S</text>
          <text x="300" y="165" fill="#5c4428" fontSize="18" fontWeight="bold" textAnchor="middle">E</text>
          <text x="20" y="165" fill="#5c4428" fontSize="18" fontWeight="bold" textAnchor="middle">W</text>

          {/* Needle with Ref and Style-Based Rotation */}
          <g
            ref={needleRef}
            style={{
              transformOrigin: '160px 160px',
              transition: 'transform 0.01s linear',
            }}
            filter="url(#shadow)"
          >
            <polygon points="160,60 152,160 168,160" fill="#b22222" />
            <polygon points="160,260 152,160 168,160" fill="#4b3621" />
            <circle cx="160" cy="160" r="6" fill="#fff" stroke="#222" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Landing;

