import React, { useState } from "react";

// Dummy AI logic for demonstration
const aiQuestions = [
    "Hi! What is your favorite subject?",
    "What do you enjoy doing in your free time?",
    "Do you prefer working with people or with technology?",
    "Are you interested in further studies or starting a job soon?",
];

const careerSuggestions = [
    {
        keywords: ["math", "science", "technology"],
        path: "Engineering or Data Science",
        analysis: "You seem to enjoy analytical and technical subjects.",
    },
    {
        keywords: ["art", "design", "creative"],
        path: "Graphic Design or Fine Arts",
        analysis: "Your creative interests could lead to a career in arts.",
    },
    {
        keywords: ["people", "help", "teach"],
        path: "Teaching or Social Work",
        analysis: "You enjoy working with people and helping others.",
    },
    {
        keywords: ["business", "management", "lead"],
        path: "Business Management or Entrepreneurship",
        analysis: "You have an inclination towards leadership and business.",
    },
];

function analyzeResponses(responses) {
    const allAnswers = responses.join(" ").toLowerCase();
    for (let suggestion of careerSuggestions) {
        if (suggestion.keywords.some((kw) => allAnswers.includes(kw))) {
            return suggestion;
        }
    }
    return {
        path: "General Studies",
        analysis: "Based on your responses, a general career path is suggested.",
    };
}

const Chat = () => {
    const [messages, setMessages] = useState([
        { from: "ai", text: aiQuestions[0] },
    ]);
    const [userInput, setUserInput] = useState("");
    const [aiStep, setAiStep] = useState(0);
    const [userResponses, setUserResponses] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState(null);

    const handleSend = () => {
        if (!userInput.trim()) return;

        // Add user message
        setMessages((msgs) => [...msgs, { from: "user", text: userInput }]);
        setUserResponses((res) => [...res, userInput]);

        // AI responds with next question or analysis
        setTimeout(() => {
            if (aiStep < aiQuestions.length - 1) {
                setMessages((msgs) => [
                    ...msgs,
                    { from: "ai", text: aiQuestions[aiStep + 1] },
                ]);
                setAiStep(aiStep + 1);
            } else {
                // Analysis and career suggestion
                const analysis = analyzeResponses([...userResponses, userInput]);
                setMessages((msgs) => [
                    ...msgs,
                    {
                        from: "ai",
                        text: `Thank you for your answers! Here's our analysis: ${analysis.analysis} Recommended career path: ${analysis.path}`,
                    },
                ]);
                setResult(analysis);
                setShowResult(true);
            }
        }, 800);

        setUserInput("");
    };

    return (
        <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
            <h2>Career Campus AI Chat</h2>
            <div
                style={{
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    padding: 16,
                    minHeight: 300,
                    background: "#fafafa",
                    marginBottom: 16,
                    overflowY: "auto",
                    height: 350,
                }}
            >
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        style={{
                            textAlign: msg.from === "user" ? "right" : "left",
                            margin: "8px 0",
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                padding: "8px 12px",
                                borderRadius: 16,
                                background: msg.from === "user" ? "#007bff" : "#e9ecef",
                                color: msg.from === "user" ? "#fff" : "#333",
                                maxWidth: "80%",
                                wordBreak: "break-word",
                            }}
                        >
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>
            {!showResult && (
                <div style={{ display: "flex" }}>
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Type your answer..."
                        style={{
                            flex: 1,
                            padding: 10,
                            borderRadius: 8,
                            border: "1px solid #ccc",
                            marginRight: 8,
                        }}
                        disabled={showResult}
                    />
                    <button
                        onClick={handleSend}
                        style={{
                            padding: "10px 20px",
                            borderRadius: 8,
                            border: "none",
                            background: "#007bff",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                        disabled={showResult}
                    >
                        Send
                    </button>
                </div>
            )}
            {showResult && result && (
                <div
                    style={{
                        marginTop: 24,
                        padding: 16,
                        background: "#e6ffe6",
                        borderRadius: 8,
                        border: "1px solid #b2ffb2",
                    }}
                >
                    <h3>Career Path Recommendation</h3>
                    <p>
                        <strong>Analysis:</strong> {result.analysis}
                    </p>
                    <p>
                        <strong>Suggested Path:</strong> {result.path}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Chat;