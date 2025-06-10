import React, { useState } from "react";

const careerPreviews = {
  Doctor: {
    title: "Chapter: Life as a Doctor",
    content: `Imagine walking into a hospital, wearing a white coat, and helping people feel better every day. Welcome to the world of doctors — where care meets science.

Doctors diagnose illnesses, treat injuries, and comfort patients. They use their knowledge of the human body, medicines, and technology to save lives and make a difference.

It's not just about studying books; doctors listen to patients, work in teams, and sometimes make quick decisions in emergencies. If you love helping others, are curious about how the body works, and want to make the world healthier, this path could be for you.

Ready to see if you have the heart and mind of a doctor? Let's find out in the next chapter...`
  }
};
const doctorQuestions = [
  {
    question: "Which skill is most important for a doctor?",
    options: [
      "Empathy",
      "Drawing blood",
      "Speed reading",
      "Public speaking"
    ],
    correct: 0
  },
  {
    question: "Which subject helps most in diagnosing diseases?",
    options: [
      "Mathematics",
      "Biology",
      "Geography",
      "History"
    ],
    correct: 1
  },
  {
    question: "What should a doctor do first in an emergency?",
    options: [
      "Call for help",
      "Check the patient's airway and breathing",
      "Give water",
      "Ask about family"
    ],
    correct: 1
  },
  {
    question: "Which tool is used to listen to a patient’s heartbeat?",
    options: [
      "Thermometer",
      "Stethoscope",
      "Syringe",
      "X-ray"
    ],
    correct: 1
  },
  {
    question: "If a patient is scared, what should a doctor do?",
    options: [
      "Explain calmly and reassure",
      "Ignore the fear",
      "Call another doctor",
      "Give medicine immediately"
    ],
    correct: 0
  },
  {
    question: "Which place excites most doctors?",
    options: [
      "Classroom",
      "Hospital",
      "Courtroom",
      "Airport"
    ],
    correct: 1
  },
  {
    question: "What is the main job of a doctor?",
    options: [
      "Invent new medicines",
      "Treat and care for patients",
      "Build hospitals",
      "Teach students"
    ],
    correct: 1
  },
  {
    question: "How should a doctor handle a difficult diagnosis?",
    options: [
      "Guess the illness",
      "Refer to a specialist or do more tests",
      "Ignore the symptoms",
      "Ask the patient to come later"
    ],
    correct: 1
  },
  {
    question: "Which quality is most important during surgery?",
    options: [
      "Patience",
      "Creativity",
      "Steady hands",
      "Speed"
    ],
    correct: 2
  },
  {
    question: "What should a doctor do if a treatment isn’t working?",
    options: [
      "Change the treatment plan",
      "Continue the same",
      "Blame the patient",
      "Stop all medicines"
    ],
    correct: 0
  },
  {
    question: "Which of these is a sign of infection?",
    options: [
      "High fever",
      "Good appetite",
      "Clear skin",
      "Calmness"
    ],
    correct: 0
  },
  {
    question: "How should a doctor react to a patient’s questions?",
    options: [
      "Answer patiently and clearly",
      "Get annoyed",
      "Ignore them",
      "Ask them to leave"
    ],
    correct: 0
  },
  {
    question: "What is most important for a doctor?",
    options: [
      "Making money",
      "Helping people get healthy",
      "Becoming famous",
      "Winning awards"
    ],
    correct: 1
  },
  {
    question: "Which game is best for future doctors?",
    options: [
      "Operation (board game)",
      "Football",
      "Hide and seek",
      "Chess"
    ],
    correct: 0
  },
  {
    question: "If a patient doesn’t follow advice, what should a doctor do?",
    options: [
      "Scold the patient",
      "Explain the importance again",
      "Ignore the patient",
      "Stop treatment"
    ],
    correct: 1
  }
];



const CareerPath = ({ careerType = "Doctor" }) => {
  const [step, setStep] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === doctorQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < doctorQuestions.length) {
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
          Let's begin your doctor journey quiz!
        </button>
      </div>
    </div>
  );

  const renderQuiz = () => {
    const q = doctorQuestions[currentQuestion];
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
            Question {currentQuestion + 1} of {doctorQuestions.length}
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
    if (score >= 8) message = "You're a great fit for Medicine!";
    else if (score >= 6) message = "You might enjoy Medicine with support.";
    else message = "Try exploring other fields. Medicine may not suit you.";

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
            Your Score: <strong>{score} / {doctorQuestions.length}</strong>
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
              marginBottom: "1rem",

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

