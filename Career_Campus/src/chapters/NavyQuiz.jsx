import React, { useState } from "react";

const careerPreviews = {
  "Navy Officer": {
    title: "Chapter: Life as a Navy Officer",
    content: `Imagine sailing on the vast ocean, protecting your country, and exploring new places. Welcome to the world of Navy Officers — where discipline meets adventure.

Navy Officers command ships, lead teams, and use technology to keep the seas safe. They need courage, teamwork, and quick decision-making.

It's not just about ships; Navy Officers help in rescue missions, disaster relief, and scientific research too. If you love the sea, teamwork, and want to serve your nation, this path could be for you.

Ready to see if you have what it takes to be a Navy Officer? Let's find out in the next chapter...`
  }
};

const navyQuestions = [
  {
    question: "Which skill is most important for a Navy Officer?",
    options: [
      "Swimming fast",
      "Leadership",
      "Drawing maps",
      "Cooking for crew"
    ],
    correct: 1
  },
  {
    question: "What is the primary purpose of the Navy?",
    options: [
      "Protecting the country's waters",
      "Teaching discipline",
      "Exploring new lands",
      "Delivering goods"
    ],
    correct: 0
  },
  {
    question: "Which instrument is essential for navigation at sea?",
    options: [
      "Compass",
      "Barometer",
      "Altimeter",
      "Speedometer"
    ],
    correct: 0
  },
  {
    question: "If you see smoke on the ship, what should you do first?",
    options: [
      "Look for the source quietly",
      "Raise an alarm and follow safety steps",
      "Open all windows",
      "Call your friend"
    ],
    correct: 1
  },
  {
    question: "During a storm, what should a Navy Officer do?",
    options: [
      "Go to sleep",
      "Panic and shout",
      "Stay calm and follow protocol",
      "Watch the waves"
    ],
    correct: 2
  },
  {
    question: "What is a destroyer?",
    options: [
      "A type of warship",
      "A rescue boat",
      "A submarine",
      "A cargo ship"
    ],
    correct: 0
  },
  {
    question: "Why is teamwork important in the Navy?",
    options: [
      "To finish tasks faster",
      "To win competitions",
      "To complete missions safely",
      "To impress seniors"
    ],
    correct: 2
  },
  {
    question: "What is the 'bridge' on a ship?",
    options: [
      "A place to sleep",
      "The area where the ship is controlled",
      "A walkway between decks",
      "A storage room"
    ],
    correct: 1
  },
  {
    question: "Which subject helps most in understanding navigation?",
    options: [
      "Geography",
      "Physics",
      "History",
      "Chemistry"
    ],
    correct: 0
  },
  {
    question: "A periscope is mainly used for:",
    options: [
      "Measuring wind speed",
      "Looking above water from a submarine",
      "Communicating with other ships",
      "Cooking food"
    ],
    correct: 1
  },
  {
    question: "Which is a Navy rank?",
    options: [
      "Commander",
      "Professor",
      "Manager",
      "Director"
    ],
    correct: 0
  },
  {
    question: "If someone falls overboard, what is the first action?",
    options: [
      "Jump in after them",
      "Throw a lifebuoy and raise alarm",
      "Wait for orders",
      "Ignore and continue"
    ],
    correct: 1
  },
  {
    question: "Why is physical fitness important for Navy Officers?",
    options: [
      "To look good in uniform",
      "To handle tough situations at sea",
      "To win sports events",
      "To impress others"
    ],
    correct: 1
  },
  {
    question: "A naval convoy is:",
    options: [
      "A group of ships traveling together",
      "A single ship on a mission",
      "A rescue helicopter",
      "A type of submarine"
    ],
    correct: 0
  },
  {
    question: "Which of these is most important in a rescue mission?",
    options: [
      "Speed",
      "Teamwork",
      "Luck",
      "Silence"
    ],
    correct: 1
  }
];

const CareerPath = ({ careerType = "Navy Officer" }) => {
  const [step, setStep] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === navyQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < navyQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStep("result");
    }
  };

  const renderIntro = () => (
    <div
      style={{
        backgroundImage: `url("/avatars/nice2.gif")`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem"
      }}
    >
      <div
        style={{
          backgroundImage: `url("/avatars/nice.gif")`,
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          padding: "3rem",
          maxWidth: "800px",
          textAlign: "center"
        }}
      >
        <h2 style={{ color: "#6a1b9a" }}>{careerPreviews[careerType].title}</h2>
        <p style={{ whiteSpace: "pre-line", marginBottom: "2rem", fontSize: "1.1rem", color: "white" }}>
          {careerPreviews[careerType].content}
        </p>
        <button
          onClick={() => setStep("quiz")}
          style={{
            backgroundColor: "#6a1b9a",
            color: "white",
            padding: "12px 24px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Let's begin your navy journey quiz!
        </button>
      </div>
    </div>
  );

  const renderQuiz = () => {
    const q = navyQuestions[currentQuestion];
    return (
      <div
        style={{
          backgroundImage: `url("/avatars/background.gif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem"
        }}
      >
        <div
          style={{
            backgroundImage: `url("/avatars/career2.png")`,
            borderRadius: "20px",
            padding: "2.5rem",
            maxWidth: "800px",
            width: "100%",
            textAlign: "center",
            boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
          }}
        >
          <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
            Question {currentQuestion + 1} of {navyQuestions.length}
          </h3>
          <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>{q.question}</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                style={{
                  flex: "1 1 40%",
                  padding: "1rem",
                  border: "2px solid #6a1b9a",
                  borderRadius: "12px",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#6a1b9a";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "black";
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    let message = "";
    if (score >= 12) message = "You're a great fit for the Navy!";
    else if (score >= 10) message = "You might enjoy the Navy with support.";
    else message = "Try exploring other fields. Navy may not suit you.";

    const handleRetry = () => {
      window.location.href = "/explore-future";
    };
       const handleExit = () => {
    window.location.href = "/";
  };

    return (
      <div
        style={{
          backgroundImage: `url("/avatars/nice2.gif")`,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem"
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            color: "#6a1b9a",
            borderRadius: "16px",
            padding: "3rem",
            textAlign: "center",
            maxWidth: "500px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ color: "#6a1b9a", marginBottom: "1rem" }}>🎉 Quiz Complete!</h2>
          <p style={{ fontSize: "1.2rem" }}>
            Your Score: <strong>{score} / {navyQuestions.length}</strong>
          </p>
          <p style={{ fontSize: "1.1rem", marginTop: "1rem", marginBottom: "2rem" }}>{message}</p>
          <button
            onClick={handleRetry}
            style={{
              backgroundColor: "#6a1b9a",
              color: "white",
              padding: "12px 24px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "1rem"
            }}
          >
            🔁 Retry & Explore More Careers
          </button>
          <br />
           <button
          onClick={handleExit}
          style={{
            backgroundColor: "#6a1b9a",
            color: "white",
            padding: "10px 24px",
            fontSize: "1rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "0"
          }}
        >

          🚪 Exit
        </button>
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {step === "intro" && renderIntro()}
      {step === "quiz" && renderQuiz()}
      {step === "result" && renderResult()}
    </div>
  );
};

export default CareerPath;