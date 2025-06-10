import React, { useState } from "react";

const careerPreviews = {
  Lawyer: {
    title: "Chapter: Life as a Lawyer",
    content: `Imagine standing in a courtroom, defending justice, and helping people solve their problems. Welcome to the world of lawyers — where logic meets fairness.

Lawyers help people understand the law, solve disputes, and make sure everyone gets a fair chance. They use their skills in speaking, writing, and thinking to argue cases and give advice.

It's not just about arguing; lawyers listen, research, and work hard to find the truth. If you love solving puzzles, helping others, and standing up for what's right, this path could be for you.

Ready to see if you have the mind and heart of a lawyer? Let's find out in the next chapter...`
  }
};
const lawyerQuestions = [
  {
    question: "Which skill is most important for a successful lawyer?",
    options: [
      "Negotiation",
      "Persuasion",
      "Drawing conclusions",
      "Cooking"
    ],
    correct: 1
  },
  {
    question: "Which subject helps most in understanding the law?",
    options: [
      "Economics",
      "Social Studies",
      "Mathematics",
      "Physics"
    ],
    correct: 1
  },
  {
    question: "What is the main job of a lawyer in court?",
    options: [
      "To entertain the judge",
      "To present evidence and argue cases",
      "To punish the guilty",
      "To write new laws"
    ],
    correct: 1
  },
  {
    question: "If two people have a dispute, what should a lawyer do first?",
    options: [
      "Take sides",
      "Listen to both and find facts",
      "Ignore the issue",
      "Give a quick judgment"
    ],
    correct: 1
  },
  {
    question: "Which tool is most used by lawyers?",
    options: [
      "Law books",
      "Hammer",
      "Calculator",
      "Paint brush"
    ],
    correct: 0
  },
  {
    question: "How should a lawyer solve a complex problem?",
    options: [
      "Guess the answer",
      "Think logically and research",
      "Ask a friend",
      "Ignore it"
    ],
    correct: 1
  },
  {
    question: "What should a lawyer do if someone is treated unfairly?",
    options: [
      "Stand up for them",
      "Walk away",
      "Make fun of them",
      "Stay silent"
    ],
    correct: 0
  },
  {
    question: "Which place excites most lawyers?",
    options: [
      "Courtroom",
      "Airport",
      "Library",
      "Restaurant"
    ],
    correct: 0
  },
  {
    question: "How do you feel about teamwork in legal cases?",
    options: [
      "Sometimes useful",
      "Very important",
      "Not needed",
      "Distracting"
    ],
    correct: 1
  },
  {
    question: "If you see someone breaking rules, what should you do?",
    options: [
      "Tell them the right thing",
      "Join them",
      "Laugh",
      "Ignore"
    ],
    correct: 0
  },
  {
    question: "Which game is best for a future lawyer?",
    options: [
      "Debate",
      "Chess",
      "Hide and seek",
      "Football"
    ],
    correct: 0
  },
  {
    question: "How should a lawyer handle pressure during a tough case?",
    options: [
      "Get nervous",
      "Stay calm and explain",
      "Ask for help",
      "Give up"
    ],
    correct: 1
  },
  {
    question: "What is most important for a lawyer?",
    options: [
      "Making money",
      "Being famous",
      "Helping people and finding justice",
      "Having fun"
    ],
    correct: 2
  },
  {
    question: "Do you like learning new things about society and rules?",
    options: [
      "Rarely",
      "Yes, always",
      "Sometimes",
      "Never"
    ],
    correct: 1
  },
  {
    question: "How do you feel about explaining difficult topics?",
    options: [
      "I avoid it",
      "It's okay",
      "I enjoy it",
      "Not really"
    ],
    correct: 2
  }
];

const CareerPath = ({ careerType = "Lawyer" }) => {
  const [step, setStep] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === lawyerQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < lawyerQuestions.length) {
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
          Let's begin your lawyer journey quiz!
        </button>
      </div>
    </div>
  );

  const renderQuiz = () => {
    const q = lawyerQuestions[currentQuestion];
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
            Question {currentQuestion + 1} of {lawyerQuestions.length}
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
    if (score >= 12) message = "You're a great fit for Law!";
    else if (score >= 10) message = "You might enjoy Law with support.";
    else message = "Try exploring other fields. Law may not suit you.";

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
            Your Score: <strong>{score} / {lawyerQuestions.length}</strong>
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