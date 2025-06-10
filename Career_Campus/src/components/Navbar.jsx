import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 2rem",
        background: "rgba(100, 100, 100, 0.3)", // transparent grey
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        backdropFilter: "blur(6px)", // optional: adds a glassy effect
      }}
    >
      <div
        className="navbar-logo"
        style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#fff" }}
      >
        Career_campus
      </div>
      <div className="navbar-links" style={{ display: "flex", gap: "1.5rem" }}>
        <button
          className="navbar-btn"
          style={{
            background: "none",
            border: "none",
            fontSize: "1rem",
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={() => navigate("/about")}
        >
          About
        </button>
        <button
          className="navbar-btn"
          style={{
            background: "none",
            border: "none",
            fontSize: "1rem",
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={() => navigate("/services")}
        >
          Services
        </button>
        <button
          className="navbar-btn"
          style={{
            background: "none",
            border: "none",
            fontSize: "1rem",
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
