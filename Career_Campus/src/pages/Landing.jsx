import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <img
                src="/logo.png"
                alt="Logo"
                style={styles.logo}
            />
            <div style={styles.buttonContainer}>
                <button
                    style={styles.button}
                    onClick={() => navigate("/signup")}
                >
                    Sign Up
                </button>
                <button
                    style={styles.button}
                    onClick={() => navigate("/signin")}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f6fa",
    },
    logo: {
        width: 120,
        marginBottom: 40,
    },
    buttonContainer: {
        display: "flex",
        gap: 20,
    },
    button: {
        padding: "12px 32px",
        fontSize: "1rem",
        borderRadius: 8,
        border: "none",
        background: "#1976d2",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "background 0.2s",
    },
};

export default Landing;