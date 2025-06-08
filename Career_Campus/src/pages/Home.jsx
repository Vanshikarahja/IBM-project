import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
];

const cardOptions = [
    {
        title: "Form",
        description: "Fill out our interactive form.",
        to: "/form",
        icon: "📝",
    },
    {
        title: "Chat",
        description: "Start a conversation with us.",
        to: "/chat",
        icon: "💬",
    },
    {
        title: "Game",
        description: "Play a fun game!",
        to: "/game",
        icon: "🎮",
    },
];

export default function Home() {
    return (
        <div className="home-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Navbar */}
            <nav style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 2rem",
                background: "#222",
                color: "#fff",
                flexShrink: 0
            }}>
                <div style={{ fontWeight: "bold", fontSize: "1.5rem", letterSpacing: "2px" }}>
                    <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>CareerCampus</Link>
                </div>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                    {navLinks.map(link => (
                        <Link key={link.name} to={link.to} style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Main Content */}
            <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem 1rem" }}>
                <h2 style={{ marginBottom: "2rem", fontWeight: 600, fontSize: "2rem", textAlign: "center" }}>
                    What would you like to do?
                </h2>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "2rem",
                        justifyContent: "center",
                        width: "100%",
                        maxWidth: "900px",
                        marginBottom: "2.5rem"
                    }}
                >
                    {cardOptions.map(option => (
                        <Link
                            to={option.to}
                            key={option.title}
                            style={{
                                flex: "1 1 220px",
                                maxWidth: "260px",
                                minWidth: "200px",
                                background: "#f5f5f5",
                                borderRadius: "12px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                                textDecoration: "none",
                                color: "#222",
                                padding: "2rem 1rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                transition: "transform 0.15s, box-shadow 0.15s",
                                fontSize: "1.1rem"
                            }}
                            tabIndex={0}
                            aria-label={option.title}
                            onMouseOver={e => e.currentTarget.style.transform = "translateY(-4px)"}
                            onMouseOut={e => e.currentTarget.style.transform = "none"}
                        >
                            <span style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{option.icon}</span>
                            <strong style={{ marginBottom: "0.5rem", fontSize: "1.2rem" }}>{option.title}</strong>
                            <span style={{ color: "#555", textAlign: "center" }}>{option.description}</span>
                        </Link>
                    ))}
                </div>
                <section style={{ maxWidth: "700px", textAlign: "center", marginBottom: "2rem", color: "#444" }}>
                    <p>
                        Welcome to CareerCampus! Choose an option above to get started. Whether you want to fill out a form, chat with us, or play a game, we have something for everyone. Our platform is designed to help you grow, connect, and have fun!
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer style={{
                background: "#222",
                color: "#fff",
                textAlign: "center",
                padding: "1rem 0",
                fontSize: "1rem",
                flexShrink: 0
            }}>
                &copy; {new Date().getFullYear()} CareerCampus. All rights reserved.
            </footer>
        </div>
    );
}