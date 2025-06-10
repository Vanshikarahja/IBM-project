import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jpzbdlz", // replace with your EmailJS service ID
        "template_m4hj1gn", // replace with your EmailJS template ID
        form.current,
        "-p0Cg4LugnjRqWZc6" // replace with your EmailJS public key
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <footer
      style={{
        background: "rgba(0,0,0,0.7)",
        color: "#fff",
        padding: "2rem 0",
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo Section */}
        <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
          <img
            src="/logo192.png"
            alt="Career Campus Logo"
            style={{ width: "60px", marginBottom: "0.5rem" }}
          />
          <h2>Career Campus</h2>
          <p>Empowering your career journey.</p>
        </div>

        {/* Team Members Section */}
        <div style={{ flex: "1", minWidth: "200px", marginBottom: "1rem" }}>
          <h3
            style={{
              marginBottom: "0.7rem",
              fontWeight: "bold",
              fontSize: "1.2rem",
              letterSpacing: "1px",
            }}
          >
            Team Members
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>Aayushi Verma</li>
            <li>Vanshika Raheja</li>
            <li>Manya Bansal</li>
            <li>Yuvraj Sharma</li>
            <li>Lovely Chauhan</li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3
            style={{
              marginBottom: "0.7rem",
              fontWeight: "bold",
              fontSize: "1.2rem",
              letterSpacing: "1px",
            }}
          >
            Contact Us
          </h3>
          <form ref={form} onSubmit={sendEmail}>
            <div style={{ marginBottom: "0.5rem" }}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "none",
                }}
              />
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "none",
                }}
              />
            </div>
            <div style={{ marginBottom: "0.5rem" }}>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "none",
                }}
                rows={3}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                padding: "0.5rem 1.5rem",
                background: "linear-gradient(90deg, #232526 0%, #414345 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Send
            </button>
            {sent && (
              <div style={{ color: "#0f0", marginTop: "0.5rem" }}>
                Message sent!
              </div>
            )}
          </form>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "0.9rem",
          color: "#aaa",
        }}
      >
        &copy; {new Date().getFullYear()} Career Campus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
