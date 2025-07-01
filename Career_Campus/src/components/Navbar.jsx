
import React from "react";
import { useNavigate } from "react-router-dom";
import { SignedIn, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          .navbar-btn {
            background: none;
            border: none;
            font-size: 1rem;
            cursor: pointer;
            color: #fff;
            position: relative;
            padding: 0.5rem 1.2rem;
            border-radius: 6px;
            transition: 
              color 0.25s,
              background 0.25s,
              transform 0.18s;
          }
          .navbar-btn:hover {
            color: #111;
            background: #fff;
            transform: scale(1.08);
          }
        `}
      </style>
      <nav
        className="navbar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 2rem",
          background: "rgba(100, 100, 100, 0.3)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="navbar-logo" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo_campus.svg"
            alt="Career_Campus Logo"
            style={{ height: "50px", width: "auto" }}
          />
        </div>
        <div className="navbar-links" style={{ display: "flex", gap: "1.5rem" }}>
          <button className="navbar-btn" onClick={() => navigate("/about")}>
            About
          </button>
          <button className="navbar-btn" onClick={() => navigate("/services")}>
            Services
          </button>
          <button className="navbar-btn" onClick={() => navigate("/Footer")}>
            Contact
          </button>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </>
  );
};

export default Navbar;