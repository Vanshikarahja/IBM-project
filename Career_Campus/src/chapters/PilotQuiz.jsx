import React, { useState } from "react";

const careerPreviews = {
  Pilot: {
    title: "Chapter: Life as a Pilot",
    content: `Imagine soaring high above the clouds, guiding an airplane through the sky, and seeing the world from above. Welcome to the world of pilots — where adventure meets responsibility.

Pilots fly airplanes and helicopters, transport people and goods, and make sure everyone reaches safely. They use their knowledge of weather, navigation, and machines to control powerful aircraft.

It's not just about flying; pilots need quick thinking, teamwork, and a calm mind in every situation. If you love adventure, technology, and dream of flying, this path could be for you.

Ready to see if you have what it takes to be a pilot? Let's find out in the next chapter...`
  }
};

const pilotQuestions = [
  {
    question: "Which instrument is used to measure an aircraft's altitude?",
    options: [
      "Airspeed Indicator",
      "Compass",
      "Altimeter",
      "Gyroscope"
    ],
    correct: 2
  },
  {
    question: "What is the main responsibility of a pilot during takeoff?",
    options: [
      "Check weather",
      "Serve snacks",
      "Monitor engine sounds",
      "Ensure safe lift-off"
    ],
    correct: 3
  },
  {
    question: "Which subject is most useful for pilots?",
    options: [
      "Art",
      "Math & Physics",
      "History",
      "Music"
    ],
    correct: 1
  },
  {
    question: "If you see another aircraft on your path, what should you do?",
    options: [
      "Speed up",
      "Ignore it",
      "Follow Air Traffic Control instructions",
      "Turn off the radio"
    ],
    correct: 2
  },
  {
    question: "What is a black box in an airplane?",
    options: [
      "A lunch box",
      "A toolbox",
      "A flight data recorder",
      "A suitcase"
    ],
    correct: 2
  },
  {
    question: "Which of these is a type of aircraft?",
    options: [
      "Submarine",
      "Ship",
      "Glider",
      "Train"
    ],
    correct: 2
  },
  {
    question: "How should a pilot react to sudden turbulence?",
    options: [
      "Panic",
      "Ask passengers for help",
      "Calmly follow procedures",
      "Ignore it"
    ],
    correct: 2
  },
  {
    question: "What is the first thing to do before takeoff?",
    options: [
      "Open windows",
      "Eat food",
      "Check weather and instruments",
      "Talk to passengers"
    ],
    correct: 2
  },
  {
    question: "Which tool is essential in a cockpit?",
    options: [
      "Paint brush",
      "Hammer",
      "Altimeter",
      "Stethoscope"
    ],
    correct: 2
  },
  {
    question: "How do you handle pressure during emergencies?",
    options: [
      "Stay calm and follow training",
      "Get nervous",
      "Ask passengers for advice",
      "Give up"
    ],
    correct: 0
  },
  {
    question: "Which is most important for a pilot?",
    options: [
      "Having fun",
      "Making money",
      "Safety and responsibility",
      "Being on TV"
    ],
    correct: 2
  },
  {
    question: "What would you do if you get lost while flying?",
    options: [
      "Guess the direction",
      "Land immediately",
      "Use navigation systems or ask Air Traffic Control",
      "Ignore and keep flying"
    ],
    correct: 2
  },
  {
    question: "Which place excites most future pilots?",
    options: [
      "Museum",
      "Library",
      "Airport",
      "Hospital"
    ],
    correct: 2
  },
  {
    question: "What is the main reason pilots use checklists?",
    options: [
      "To avoid mistakes",
      "To impress passengers",
      "To save time",
      "To decorate cockpit"
    ],
    correct: 0
  },
  {
    question: "Which quality is most important for a pilot?",
    options: [
      "Drawing skills",
      "Being famous",
      "Quick decision making",
      "Liking heights"
    ],
    correct: 2
  }
];

const CareerPath = ({ careerType = "Pilot" }) => {
  const [step, setStep] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === pilotQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < pilotQuestions.length) {
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
          Let's begin your pilot journey quiz!
        </button>
      </div>
    </div>
  );

  const renderQuiz = () => {
    const q = pilotQuestions[currentQuestion];
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
            Question {currentQuestion + 1} of {pilotQuestions.length}
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
    if (score >= 12) message = "You're a great fit for Aviation!";
    else if (score >= 10) message = "You might enjoy being a Pilot with support.";
    else message = "Try exploring other fields. Aviation may not suit you.";

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
            Your Score: <strong>{score} / {pilotQuestions.length}</strong>
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