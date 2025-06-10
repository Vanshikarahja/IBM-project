// import React from "react";

// const ExploreFuture = () => {
//   return (
//     <div style={{ backgroundColor: "#764ba2", height: "100vh", padding: "20px" }}>
//       <h1>Welcome to the Explore Future Page!</h1>
//       <p>This page appears after you click Continue.</p>
//     </div>
//   );
// };

// export default ExploreFuture;


// import React, { useState } from "react";
// import "./ExploreFuture.css";

// const careerOptions = [
//   "Engineer",
//   "Doctor",
//   "Pilot",
//   "Teacher",
//   "Navy Officer",
//   "Nurse",
//   // aur bhi add kar sakte ho
// ];

// const ExploreFuture = () => {
//   const [showOptions, setShowOptions] = useState(false);

//   return (
//     <div className="explore-future-container" style={{ backgroundColor: '#764ba2', height: '100vh' }}>
//       <div 
//         className="child-avatar"
//         onClick={() => setShowOptions(!showOptions)}
//         style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1.5rem' }}
//       >
//         <img 
//           src="/avatars/navy.png" 
//           alt="Child Avatar" 
//           className="avatar-image"
//         />
//         <div className="explore-block">
//           <h2>Explore Your Future</h2>
//         </div>
//       </div>

//       {showOptions && (
//         <div className="career-options">
//           {careerOptions.map((career, index) => (
//             <button key={index} className="career-btn">
//               {career}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExploreFuture;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExploreFuture.css";

const careerOptions = [
  "Engineer",
  "Doctor",
  "Pilot",
  "Teacher",
  "NavyOfficer",
  "Lawyer",
  // aur bhi add kar sakte ho
];

const ExploreFuture = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  // const handleCareerClick = (career) => {
  //   if (career === "Engineer") {
  //     navigate("/engineer-quiz"); // Engineer quiz page pe jao
  //   } else {
  //     alert(`Quiz for ${career} is coming soon!`);
  //   }
   
  // };
   const handleCareerClick = (career) => {
    switch (career) {
      case "Engineer":
        navigate("/engineer-quiz");
        break;
      case "Doctor":
        navigate("/doctor-quiz");
        break;
      case "Pilot":
        navigate("/pilot-quiz");
        break;
      case "Teacher":
        navigate("/teacher-quiz");
        break;
      case "Navy Officer":
        navigate("/navy-quiz");
        break;
      case "Lawyer":
        navigate("/lawyer-quiz");
        break;
      default:
        alert(`Quiz for ${career} is coming soon!`);
    }
  };


  return (
    <div
      className="explore-future-container"
      style={{ backgroundColor: "#764ba2", height: "100vh" }}
    >
      <div
        className="child-avatar"
        onClick={() => setShowOptions(!showOptions)}
        style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "1.5rem" }}
      >
        <img src="/avatars/navy.png" alt="Child Avatar" className="avatar-image" />
        <div className="explore-block">
          <h2>Explore Your Future</h2>
        </div>
      </div>

      {showOptions && (
        <div className="career-options">
          {careerOptions.map((career, index) => (
            <button
              key={index}
              className="career-btn"
              onClick={() => handleCareerClick(career)}
            >
              {career}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreFuture;




