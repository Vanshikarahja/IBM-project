// import React from "react";

// const EngineerQuiz = () => {
//   return (
//     <div>
//       <h1>Engineer Quiz Page</h1>
//       <p>Yahan quiz questions add karenge.</p>
//     </div>
//   );
// };

// export default EngineerQuiz;
// import React, { useState } from "react";

// const careerPreviews = {
//   Engineer: {
//     title: "Chapter 1: Life as an Engineer",
//     content:  `Imagine  walking into a world of innovation, buzzing labs, glowing screens, and half-built robots. Welcome to the world of engineering — where curiosity meets creation.

// Engineers are the builders of the future. From designing satellites that orbit Earth, to writing the code behind your favorite apps, they solve real-world problems with logic, math, and technology.

// But it’s not all sitting behind a computer. Engineers brainstorm ideas on whiteboards, experiment with machines, and work with diverse teams. Whether it's constructing a bridge, developing AI, or creating electric vehicles — engineers leave their mark on the world.

// If you love breaking things down, solving puzzles, or wondering “how does this work?”, this path might just be your mission.

// Are you ready to explore what kind of engineer you could be? Let’s find out in the next chapter...`
//   }
// };

// const engineeringQuestions = [
//   {
//     question: "When faced with a broken gadget, what do you do?",
//     options: ["Try to fix it myself", "Search online", "Call someone", "Leave it"],
//     correct: 0
//   },
//   {
//     question: "Which of these sounds most exciting to you?",
//     options: [ "Designing a website", "Building a robot","Leading an event", "Performing on stage"],
//     correct: 1
//   },
//   {
//     question: "What’s your favorite school subject?",
//     options: ["Art", "Biology", "History", "Math or Physics"],
//     correct: 3
//   },
//   {
//     question: "You see a traffic problem in your city. What’s your reaction?",
//     options: ["Think of better road layouts", "Get frustrated", "Ignore it", "Call the mayor"],
//     correct: 0
//   },
//   {
//     question: "Which activity do you enjoy most?",
//     options: ["Solving puzzles", "Reading novels", "Singing songs", "Painting"],
//     correct: 0
//   },
//   {
//     question: "What kind of games do you prefer?",
//     options: ["None", "Word games", "Action", "Strategy or logic games"],
//     correct: 3
//   },
//   {
//     question: "How do you handle complex problems?",
//     options: ["Break into parts and solve", "Avoid them", "Ask someone", "Guess"],
//     correct: 0
//   },
//   {
//     question: "Which club would you join in school?",
//     options: ["Music Band", "Drama club", "Science or Robotics club", "Debate club"],
//     correct: 2
//   },
//   {
//     question: "What is most satisfying to you?",
//     options: ["Building something that works", "Helping people emotionally", "Entertaining others", "Sharing opinions"],
//     correct: 0
//   },
//   {
//     question: "You find a new app idea. What do you do?",
//     options: ["Sketch the logic behind it", "Share it with friends", "Ignore it", "Look for similar apps"],
//     correct: 0
//   },
//   {
//     question: "Which environment excites you most?",
//     options: ["A tech lab or workshop", "A hospital", "A theatre", "A newsroom"],
//     correct: 0
//   },
//   {
//     question: "What would you do in a group project?",
//     options: ["Plan the structure & logic", "Do the writing", "Do the talking", "Do the designing"],
//     correct: 0
//   },
//   {
//     question: "How do you feel about math?",
//     options: ["I love it!", "It’s okay", "Ugh, no thanks", "What’s the point?"],
//     correct: 0
//   },
//   {
//     question: "Do you like experimenting and testing things?",
//     options: ["Yes, always", "Sometimes", "Rarely", "Never"],
//     correct: 0
//   },
//   {
//     question: "Which tool would you be most excited to use?",
//     options: ["3D printer", "Paint brush", "Stethoscope", "Microphone"],
//     correct: 0
//   }
// ];

// const CareerPath = ({ careerType = "Engineer" }) => {
//   const [step, setStep] = useState("intro");
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);

//   const handleAnswer = (selectedIndex) => {
//     if (selectedIndex === engineeringQuestions[currentQuestion].correct) {
//       setScore(score + 1);
//     }
//     if (currentQuestion + 1 < engineeringQuestions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setStep("result");
//     }
//   };

//   const renderIntro = () => (
//     <div>
//       <h2>{careerPreviews[careerType].title}</h2>
//       <p style={{ whiteSpace: "pre-line" }}>{careerPreviews[careerType].content}</p>
//       <button onClick={() => setStep("quiz")}>
//         Start some interesting questions related to your field
//       </button>
//     </div>
//   );

//   const renderQuiz = () => {
//     const q = engineeringQuestions[currentQuestion];
//     return (
//       <div>
//         <h3>Question {currentQuestion + 1}</h3>
//         <p>{q.question}</p>
//         {q.options.map((opt, idx) => (
//           <button key={idx} onClick={() => handleAnswer(idx)} style={{ display: "block", margin: "8px 0" }}>
//             {opt}
//           </button>
//         ))}
//       </div>
//     );
//   };

//   const renderResult = () => {
//     let message = "";
//     if (score >= 12) message = "You're a great fit for Engineering!";
//     else if (score >= 10) message = "You might enjoy Engineering with support.";
//     else message = "Try exploring other fields. Engineering may not suit you.";

//     return (
//       <div>
//         <h2>Quiz Complete!</h2>
//         <p>Your Score: {score} / {engineeringQuestions.length}</p>
//         <p>{message}</p>
//       </div>
//     );
//   };

//   return (
//     <div style={{ padding: "30px", fontFamily: "sans-serif" }}>
//       {step === "intro" && renderIntro()}
//       {step === "quiz" && renderQuiz()}
//       {step === "result" && renderResult()}
//     </div>
//   );
// };

// export default CareerPath;




// import React, { useState } from "react";

// const careerPreviews = {
//   Engineer: {
//     title: "Chapter 1: Life as an Engineer",
//     content: `Imagine  walking into a world of innovation, buzzing labs, glowing screens, and half-built robots. Welcome to the world of engineering — where curiosity meets creation.

// Engineers are the builders of the future. From designing satellites that orbit Earth, to writing the code behind your favorite apps, they solve real-world problems with logic, math, and technology.

// But it’s not all sitting behind a computer. Engineers brainstorm ideas on whiteboards, experiment with machines, and work with diverse teams. Whether it's constructing a bridge, developing AI, or creating electric vehicles — engineers leave their mark on the world.

// If you love breaking things down, solving puzzles, or wondering “how does this work?”, this path might just be your mission.

// Are you ready to explore what kind of engineer you could be? Let’s find out in the next chapter...`
//   }
// };

// const engineeringQuestions = [
//   {
//     question: "When faced with a broken gadget, what do you do?",
//     options: ["Try to fix it myself", "Search online", "Call someone", "Leave it"],
//     correct: 0
//   },
//   {
//     question: "Which of these sounds most exciting to you?",
//     options: ["Designing a website", "Building a robot", "Leading an event", "Performing on stage"],
//     correct: 1
//   },
//   {
//     question: "What’s your favorite school subject?",
//     options: ["Art", "Biology", "History", "Math or Physics"],
//     correct: 3
//   },
//   {
//     question: "You see a traffic problem in your city. What’s your reaction?",
//     options: ["Think of better road layouts", "Get frustrated", "Ignore it", "Call the mayor"],
//     correct: 0
//   },
//   {
//     question: "Which activity do you enjoy most?",
//     options: ["Solving puzzles", "Reading novels", "Singing songs", "Painting"],
//     correct: 0
//   },
//   {
//     question: "What kind of games do you prefer?",
//     options: ["None", "Word games", "Action", "Strategy or logic games"],
//     correct: 3
//   },
//   {
//     question: "How do you handle complex problems?",
//     options: ["Break into parts and solve", "Avoid them", "Ask someone", "Guess"],
//     correct: 0
//   },
//   {
//     question: "Which club would you join in school?",
//     options: ["Music Band", "Drama club", "Science or Robotics club", "Debate club"],
//     correct: 2
//   },
//   {
//     question: "What is most satisfying to you?",
//     options: ["Building something that works", "Helping people emotionally", "Entertaining others", "Sharing opinions"],
//     correct: 0
//   },
//   {
//     question: "You find a new app idea. What do you do?",
//     options: ["Sketch the logic behind it", "Share it with friends", "Ignore it", "Look for similar apps"],
//     correct: 0
//   },
//   {
//     question: "Which environment excites you most?",
//     options: ["A tech lab or workshop", "A hospital", "A theatre", "A newsroom"],
//     correct: 0
//   },
//   {
//     question: "What would you do in a group project?",
//     options: ["Plan the structure & logic", "Do the writing", "Do the talking", "Do the designing"],
//     correct: 0
//   },
//   {
//     question: "How do you feel about math?",
//     options: ["I love it!", "It’s okay", "Ugh, no thanks", "What’s the point?"],
//     correct: 0
//   },
//   {
//     question: "Do you like experimenting and testing things?",
//     options: ["Yes, always", "Sometimes", "Rarely", "Never"],
//     correct: 0
//   },
//   {
//     question: "Which tool would you be most excited to use?",
//     options: ["3D printer", "Paint brush", "Stethoscope", "Microphone"],
//     correct: 0
//   }
// ];

// const CareerPath = ({ careerType = "Engineer" }) => {
//   const [step, setStep] = useState("intro");
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);

//   const handleAnswer = (selectedIndex) => {
//     if (selectedIndex === engineeringQuestions[currentQuestion].correct) {
//       setScore(score + 1);
//     }
//     if (currentQuestion + 1 < engineeringQuestions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setStep("result");
//     }
//   };

//   const renderIntro = () => (
//     <div style={{ textAlign: "center", padding: "2rem" }}>
//       <h2>{careerPreviews[careerType].title}</h2>
//       <p style={{ whiteSpace: "pre-line", marginBottom: "2rem" }}>{careerPreviews[careerType].content}</p>
//       <button
//         onClick={() => setStep("quiz")}
//         style={{
//           backgroundColor: "#764ba2",
//           color: "white",
//           padding: "12px 24px",
//           fontSize: "1rem",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer"
//         }}
//       >
//         Let's begin your engineering journey quiz!
//       </button>
//     </div>
//   );

//   const renderQuiz = () => {
//     const q = engineeringQuestions[currentQuestion];
//     return (
//       <div
//         style={{
//           background: `url("/avatars/career2.png")`,
//           maxWidth: "800px",
//           margin: "2rem auto",
//           padding: "2rem",
//           borderRadius: "16px",
//           boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
//           textAlign: "center"
//         }}
//       >
//         <h3>Question {currentQuestion + 1}</h3>
//         <p style={{ fontSize: "1.2rem", margin: "1rem 0 2rem" }}>{q.question}</p>
//         <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
//           {q.options.map((opt, idx) => (
//             <button
//               key={idx}
//               onClick={() => handleAnswer(idx)}
//               style={{
//                 flex: "1 1 45%",
//                 padding: "1rem",
//                 border: "2px solid #764ba2",
//                 borderRadius: "10px",
//                 backgroundColor: "white",
//                 fontWeight: "bold",
//                 cursor: "pointer",
//                 transition: "0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.backgroundColor = "#764ba2";
//                 e.target.style.color = "white";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.backgroundColor = "white";
//                 e.target.style.color = "black";
//               }}
//             >
//               {opt}
//             </button>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderResult = () => {
//     let message = "";
//     if (score >= 12) message = "You're a great fit for Engineering!";
//     else if (score >= 10) message = "You might enjoy Engineering with support.";
//     else message = "Try exploring other fields. Engineering may not suit you.";

//     return (
//       <div style={{ textAlign: "center", padding: "2rem" }}>
//         <h2>Quiz Complete!</h2>
//         <p>Your Score: {score} / {engineeringQuestions.length}</p>
//         <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>{message}</p>
//       </div>
//     );
//   };

//   return (
//     <div style={{ padding: "30px", fontFamily: "'Segoe UI', sans-serif", background: `url("/avatars/background.gif")`, minHeight: "100vh" }}>
//       {step === "intro" && renderIntro()}
//       {step === "quiz" && renderQuiz()}
//       {step === "result" && renderResult()}
//     </div>
//   );
// };

// export default CareerPath;






// import React, { useState } from "react";

// const careerPreviews = {
//   Engineer: {
//     title: "Chapter 1: Life as an Engineer",
//     content: `Imagine  walking into a world of innovation, buzzing labs, glowing screens, and half-built robots. Welcome to the world of engineering — where curiosity meets creation.

// Engineers are the builders of the future. From designing satellites that orbit Earth, to writing the code behind your favorite apps, they solve real-world problems with logic, math, and technology.

// But it’s not all sitting behind a computer. Engineers brainstorm ideas on whiteboards, experiment with machines, and work with diverse teams. Whether it's constructing a bridge, developing AI, or creating electric vehicles — engineers leave their mark on the world.

// If you love breaking things down, solving puzzles, or wondering “how does this work?”, this path might just be your mission.

// Are you ready to explore what kind of engineer you could be? Let’s find out in the next chapter...`
//   }
// };

// const engineeringQuestions = [
//   // ... your 15 questions remain unchanged ...
//   {
//     question: "When faced with a broken gadget, what do you do?",
//     options: ["Try to fix it myself", "Search online", "Call someone", "Leave it"],
//     correct: 0
//   },
//   {
//     question: "Which of these sounds most exciting to you?",
//     options: ["Designing a website", "Building a robot", "Leading an event", "Performing on stage"],
//     correct: 1
//   },
//   {
//     question: "What’s your favorite school subject?",
//     options: ["Art", "Biology", "History", "Math or Physics"],
//     correct: 3
//   },
//   {
//     question: "You see a traffic problem in your city. What’s your reaction?",
//     options: ["Think of better road layouts", "Get frustrated", "Ignore it", "Call the mayor"],
//     correct: 0
//   },
//   {
//     question: "Which activity do you enjoy most?",
//     options: ["Solving puzzles", "Reading novels", "Singing songs", "Painting"],
//     correct: 0
//   },
//   {
//     question: "What kind of games do you prefer?",
//     options: ["None", "Word games", "Action", "Strategy or logic games"],
//     correct: 3
//   },
//   {
//     question: "How do you handle complex problems?",
//     options: ["Break into parts and solve", "Avoid them", "Ask someone", "Guess"],
//     correct: 0
//   },
//   {
//     question: "Which club would you join in school?",
//     options: ["Music Band", "Drama club", "Science or Robotics club", "Debate club"],
//     correct: 2
//   },
//   {
//     question: "What is most satisfying to you?",
//     options: ["Building something that works", "Helping people emotionally", "Entertaining others", "Sharing opinions"],
//     correct: 0
//   },
//   {
//     question: "You find a new app idea. What do you do?",
//     options: ["Sketch the logic behind it", "Share it with friends", "Ignore it", "Look for similar apps"],
//     correct: 0
//   },
//   {
//     question: "Which environment excites you most?",
//     options: ["A tech lab or workshop", "A hospital", "A theatre", "A newsroom"],
//     correct: 0
//   },
//   {
//     question: "What would you do in a group project?",
//     options: ["Plan the structure & logic", "Do the writing", "Do the talking", "Do the designing"],
//     correct: 0
//   },
//   {
//     question: "How do you feel about math?",
//     options: ["I love it!", "It’s okay", "Ugh, no thanks", "What’s the point?"],
//     correct: 0
//   },
//   {
//     question: "Do you like experimenting and testing things?",
//     options: ["Yes, always", "Sometimes", "Rarely", "Never"],
//     correct: 0
//   },
//   {
//     question: "Which tool would you be most excited to use?",
//     options: ["3D printer", "Paint brush", "Stethoscope", "Microphone"],
//     correct: 0
//   }
// ];

// const CareerPath = ({ careerType = "Engineer" }) => {
//   const [step, setStep] = useState("intro");
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);

//   const handleAnswer = (selectedIndex) => {
//     if (selectedIndex === engineeringQuestions[currentQuestion].correct) {
//       setScore(score + 1);
//     }
//     if (currentQuestion + 1 < engineeringQuestions.length) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setStep("result");
//     }
//   };

//   const renderIntro = () => (
//     <div
//       style={{
//         // backgroundColor: "#f3e5f5",
//         backgroundImage: `url("/avatars/nice2.gif")`,

//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "2rem"
//       }}
//     >
//       <div
//         style={{
//         //   backgroundColor: "white",
//         backgroundImage: `url("/avatars/nice.gif")`,

//           borderRadius: "20px",
//           boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//           padding: "3rem",
//           maxWidth: "800px",
//           textAlign: "center"
//         }}
//       >
//         <h2 style={{ color: "#6a1b9a" }}>{careerPreviews[careerType].title}</h2>
//         <p style={{ whiteSpace: "pre-line", marginBottom: "2rem", fontSize: "1.1rem", color: "white" }}>
//           {careerPreviews[careerType].content}
//         </p>
//         <button
//           onClick={() => setStep("quiz")}
//           style={{
//             backgroundColor: "#6a1b9a",
            
            

//             color: "white",
//             padding: "12px 24px",
//             fontSize: "1rem",
//             border: "none",
//             borderRadius: "8px",
//             cursor: "pointer"
//           }}
//         >
//           Let's begin your engineering journey quiz!
//         </button>
//       </div>
//     </div>
//   );

//   const renderQuiz = () => {
//     const q = engineeringQuestions[currentQuestion];
//     return (
//       <div
//         style={{
//           backgroundImage: `url("/avatars/background.gif")`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "2rem"
//         }}
//       >
//         <div
//           style={{
//             // backgroundColor: "rgba(255, 255, 255, 0.95)",
//             backgroundImage: `url("/avatars/career2.png")`,
//             borderRadius: "20px",
//             padding: "2.5rem",
//             maxWidth: "800px",
//             width: "100%",
//             textAlign: "center",
//             boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
//           }}
//         >
//           <h3 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Question {currentQuestion + 1}</h3>
//           <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>{q.question}</p>
//           <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
//             {q.options.map((opt, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => handleAnswer(idx)}
//                 style={{
//                   flex: "1 1 40%",
//                   padding: "1rem",
//                   border: "2px solid #6a1b9a",
//                   borderRadius: "12px",
//                   backgroundColor: "white",
//                   fontWeight: "bold",
//                   cursor: "pointer",
//                   transition: "0.3s ease"
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.backgroundColor = "#6a1b9a";
//                   e.target.style.color = "white";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.backgroundColor = "white";
//                   e.target.style.color = "black";
//                 }}
//               >
//                 {opt}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderResult = () => {
//     let message = "";
//     if (score >= 12) message = "You're a great fit for Engineering!";
//     else if (score >= 10) message = "You might enjoy Engineering with support.";
//     else message = "Try exploring other fields. Engineering may not suit you.";
//      const handleRetry = () => {
//     window.location.href = "/explore-future"; 
//     // Adjust if your route is different
//   };

//     return (
//       <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#e1bee7", minHeight: "100vh" }}>
//         <h2>Quiz Complete!</h2>
//         <p>Your Score: {score} / {engineeringQuestions.length}</p>
//         <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>{message}</p>
//       </div>
//     );
//   };

//   return (
//     <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>
//       {step === "intro" && renderIntro()}
//       {step === "quiz" && renderQuiz()}
//       {step === "result" && renderResult()}
//     </div>
//   );
//  return (
//     <div
//       style={{
//         backgroundImage: `url("/avatars/nice2.gif")`,
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "2rem"
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           borderRadius: "16px",
//           padding: "3rem",
//           textAlign: "center",
//           maxWidth: "500px",
//           boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
//         }}
//       >
//         <h2 style={{ color: "#6a1b9a", marginBottom: "1rem" }}>🎉 Quiz Complete!</h2>
//         <p style={{ fontSize: "1.2rem" }}>
//           Your Score: <strong>{score} / {engineeringQuestions.length}</strong>
//         </p>
//         <p style={{ fontSize: "1.1rem", marginTop: "1rem", marginBottom: "2rem" }}>{message}</p>

//         <button
//           onClick={handleRetry}
//           style={{
//             backgroundColor: "#6a1b9a",
//             color: "white",
//             padding: "12px 24px",
//             fontSize: "1rem",
//             border: "none",
//             borderRadius: "8px",
//             cursor: "pointer"
//           }}
//         >
//           🔁 Retry & Explore More Careers
//         </button>
//       </div>
//     </div>
//   );};





// export default CareerPath;







import React, { useState } from "react";

const careerPreviews = {
  Engineer: {
    title: "Chapter: Life as an Engineer",
    content: `Imagine walking into a world of innovation, buzzing labs, glowing screens, and half-built robots. Welcome to the world of engineering — where curiosity meets creation.

Engineers are the builders of the future. From designing satellites that orbit Earth, to writing the code behind your favorite apps, they solve real-world problems with logic, math, and technology.

But it’s not all sitting behind a computer. Engineers brainstorm ideas on whiteboards, experiment with machines, and work with diverse teams. Whether it's constructing a bridge, developing AI, or creating electric vehicles — engineers leave their mark on the world.

If you love breaking things down, solving puzzles, or wondering “how does this work?”, this path might just be your mission.

Are you ready to explore what kind of engineer you could be? Let’s find out in the next chapter...`
  }
};

const engineeringQuestions = [
  {
    question: "When faced with a broken gadget, what do you do?",
    options: ["Try to fix it myself", "Search online", "Call someone", "Leave it"],
    correct: 0
  },
  {
    question: "Which of these sounds most exciting to you?",
    options: ["Designing a website", "Building a robot", "Leading an event", "Performing on stage"],
    correct: 1
  },
  {
    question: "What’s your favorite school subject?",
    options: ["Art", "Biology", "History", "Math or Physics"],
    correct: 3
  },
  {
    question: "You see a traffic problem in your city. What’s your reaction?",
    options: ["Think of better road layouts", "Get frustrated", "Ignore it", "Call the mayor"],
    correct: 0
  },
  {
    question: "Which activity do you enjoy most?",
    options: ["Solving puzzles", "Reading novels", "Singing songs", "Painting"],
    correct: 0
  },
  {
    question: "What kind of games do you prefer?",
    options: ["None", "Word games", "Action", "Strategy or logic games"],
    correct: 3
  },
  {
    question: "How do you handle complex problems?",
    options: ["Break into parts and solve", "Avoid them", "Ask someone", "Guess"],
    correct: 0
  },
  {
    question: "Which club would you join in school?",
    options: ["Music Band", "Drama club", "Science or Robotics club", "Debate club"],
    correct: 2
  },
  {
    question: "What is most satisfying to you?",
    options: ["Building something that works", "Helping people emotionally", "Entertaining others", "Sharing opinions"],
    correct: 0
  },
  {
    question: "You find a new app idea. What do you do?",
    options: ["Sketch the logic behind it", "Share it with friends", "Ignore it", "Look for similar apps"],
    correct: 0
  },
  {
    question: "Which environment excites you most?",
    options: ["A tech lab or workshop", "A hospital", "A theatre", "A newsroom"],
    correct: 0
  },
  {
    question: "What would you do in a group project?",
    options: ["Plan the structure & logic", "Do the writing", "Do the talking", "Do the designing"],
    correct: 0
  },
  {
    question: "How do you feel about math?",
    options: ["I love it!", "It’s okay", "Ugh, no thanks", "What’s the point?"],
    correct: 0
  },
  {
    question: "Do you like experimenting and testing things?",
    options: ["Yes, always", "Sometimes", "Rarely", "Never"],
    correct: 0
  },
  {
    question: "Which tool would you be most excited to use?",
    options: ["3D printer", "Paint brush", "Stethoscope", "Microphone"],
    correct: 0
  }
];

const CareerPath = ({ careerType = "Engineer" }) => {
  const [step, setStep] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedIndex) => {
    if (selectedIndex === engineeringQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < engineeringQuestions.length) {
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
          Let's begin your engineering journey quiz!
        </button>
      </div>
    </div>
  );

  const renderQuiz = () => {
    const q = engineeringQuestions[currentQuestion];
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
            Question {currentQuestion + 1} of {engineeringQuestions.length}
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
    if (score >= 12) message = "You're a great fit for Engineering!";
    else if (score >= 10) message = "You might enjoy Engineering with support.";
    else message = "Try exploring other fields. Engineering may not suit you.";

    const handleRetry = () => {
      window.location.href = "/explore-future"; // adjust route if needed
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
            Your Score: <strong>{score} / {engineeringQuestions.length}</strong>
          </p>
          <p style={{ fontSize: "1.1rem", marginTop: "1rem", marginBottom: "2rem" }}>{message}</p>
          <button
            onClick={handleRetry}
            style={{
              backgroundColor: "#6a1b9a",
              color: "white",
              padding: "10px 24px",
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





