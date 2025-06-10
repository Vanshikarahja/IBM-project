import React, { useState } from "react";

const careerPreviews = {
  Teacher: {
    title: "Chapter: Life as a Teacher",
    content: `Imagine standing in front of a classroom, helping students learn new things, and making a difference every day. Welcome to the world of teachers — where knowledge meets inspiration.

Teachers guide, motivate, and support students. They use creativity, patience, and communication to make learning fun and meaningful.

It's not just about giving homework; teachers listen, solve problems, and help students grow. If you love sharing knowledge, helping others, and making an impact, this path could be for you.

Ready to see if you have the heart and mind of a teacher? Let's find out in the next chapter...`
  }
};

const teacherQuestions = [
  {
    question: "Which quality is most important for a teacher?",
    options: [
      "Strictness",
      "Patience",
      "Creativity",
      "Punctuality"
    ],
    correct: 1
  },
  {
    question: "If a student keeps asking questions, what should a good teacher do?",
    options: [
      "Ignore the student",
      "Encourage curiosity",
      "Ask them to stop",
      "Change the topic"
    ],
    correct: 1
  },
  {
    question: "Which tool is most useful for a teacher in class?",
    options: [
      "Whiteboard",
      "Calculator",
      "Microscope",
      "Paint brush"
    ],
    correct: 0
  },
  {
    question: "If two students are fighting, what should a teacher do first?",
    options: [
      "Punish both",
      "Call their parents",
      "Calm them and listen to both sides",
      "Ignore them"
    ],
    correct: 2
  },
  {
    question: "Which subject helps most in developing logical thinking?",
    options: [
      "Art",
      "Mathematics",
      "History",
      "Physical Education"
    ],
    correct: 1
  },
  {
    question: "What is the best way to make a boring topic interesting?",
    options: [
      "Give more homework",
      "Tell stories or use activities",
      "Skip the topic",
      "Read from the book only"
    ],
    correct: 1
  },
  {
    question: "How should a teacher handle mistakes made by students?",
    options: [
      "Scold them in front of class",
      "Help them learn from mistakes",
      "Ignore the mistakes",
      "Give extra homework"
    ],
    correct: 1
  },
  {
    question: "Which place excites most teachers?",
    options: [
      "Classroom",
      "Hospital",
      "Airport",
      "Restaurant"
    ],
    correct: 0
  },
  {
    question: "If a student is shy, what should a teacher do?",
    options: [
      "Force them to speak",
      "Give them time and encouragement",
      "Ignore them",
      "Ask them to leave class"
    ],
    correct: 1
  },
  {
    question: "What is the main goal of a teacher?",
    options: [
      "To finish the syllabus",
      "To help students grow and learn",
      "To give exams",
      "To be strict"
    ],
    correct: 1
  },
  {
    question: "Which game is best for building vocabulary?",
    options: [
      "Word puzzles",
      "Cricket",
      "Chess",
      "Hide and seek"
    ],
    correct: 0
  },
  {
    question: "How should a teacher react to a difficult question?",
    options: [
      "Say 'I don't know'",
      "Get angry",
      "Appreciate and try to answer or research",
      "Ignore the question"
    ],
    correct: 2
  },
  {
    question: "What is most important for a teacher?",
    options: [
      "Helping students grow",
      "Being famous",
      "Having fun",
      "Making money"
    ],
    correct: 0
  },
  {
    question: "How do you handle pressure in class?",
    options: [
      "Stay calm and manage the situation",
      "Get nervous",
      "Ask students for help",
      "Leave the class"
    ],
    correct: 0
  },
  {
    question: "If a student gives a wrong answer, what should a teacher do?",
    options: [
      "Laugh at them",
      "Correct gently and explain",
      "Ignore the answer",
      "Punish them"
    ],
    correct: 1
  }
];

const CareerPath = ({ careerType = "Teacher" }) => {
  const [step, setStep] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === teacherQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < teacherQuestions.length) {
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
          Let's begin your teacher journey quiz!
        </button>
      </div>
    </div>
  );

  const renderQuiz = () => {
    const q = teacherQuestions[currentQuestion];
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
            Question {currentQuestion + 1} of {teacherQuestions.length}
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
    if (score >= 12) message = "You're a great fit for Teaching!";
    else if (score >= 10) message = "You might enjoy Teaching with support.";
    else message = "Try exploring other fields. Teaching may not suit you.";

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
            Your Score: <strong>{score} / {teacherQuestions.length}</strong>
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