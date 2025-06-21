
import React, { useRef, useEffect, useState } from "react";

export default function About() {
    const aboutRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );
        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={aboutRef}
            style={{
                width: "100%",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #000 60%, #222 100%)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Segoe UI, sans-serif",
                padding: "0",
            }}
        >
            <div
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(60px)",
                    transition: "all 1s cubic-bezier(.68,-0.55,.27,1.55)",
                    // maxWidth: "700px",
                    // width: "90%",
                     maxWidth: "100%",
                    width: "100%",
                    background: "rgba(20,20,20,0.95)",
                    borderRadius: "24px",
                    padding: "2.5rem",
                    boxShadow: visible
                        ? "0 8px 40px 0 rgba(0,0,0,0.7)"
                        : "none",
                }}
            >
                <h1 style={{ fontWeight: 700, fontSize: "2.2rem", marginBottom: "1rem" }}>
                    About Career Campus
                </h1>
                <p style={{ fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    Career Campus is a modern, interactive web platform designed to guide users in their career journey. It features a visually engaging landing page, interactive games, AI-powered chat, personalized career suggestions, and a contact form that sends messages directly to the team.
                </p>
                <h2 style={{ fontSize: "1.3rem", margin: "1.2rem 0 0.7rem" }}>Features</h2>
                <ul style={{ marginLeft: "1.2rem", marginBottom: "1.5rem", fontSize: "1rem" }}>
                    <li>Landing Page with looping video and call-to-action buttons</li>
                    <li>Modern Navbar & Footer with team info and contact form (EmailJS)</li>
                    <li>Interactive 3D Canvas using react-three-fiber</li>
                    <li>Animated, GSAP-powered scrolling text</li>
                    <li>Slider with video/content slides for Chat, Game, and Form pages</li>
                    <li>Games & Quizzes for career exploration</li>
                    <li>AI Chatbot for instant career guidance</li>
                    <li>Contact Form to reach the team directly</li>
                </ul>
            </div>
        </div>
    );
}