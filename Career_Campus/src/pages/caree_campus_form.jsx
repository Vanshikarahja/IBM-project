import React, { useState } from "react";

const LOGO_SRC = "/logo.jpg"; // Corrected logo path

const Header = () => {
  return (
    <header
      role="banner"
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        
        backgroundColor: "rgb(20,7,7)",
        boxShadow: "0 1px 4px rgba(20, 7, 7, 0.1)",
        zIndex: 1000,
      }}
    >
      <nav
        aria-label="Primary navigation"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0.75rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <img
            src={LOGO_SRC}
            alt="Company Logo"
            style={{
              height: 70 ,
              width: "auto",
              userSelect: "none",
              transition: "transform 0.25s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            draggable={false}
          />
          <span
            style={{
              marginLeft: 12,
              fontWeight: 700,
              fontSize: "1.75rem",
              color: "#ffffff",
              userSelect: "none",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            CAREER CAMPUS
          </span>
        </div>
      </nav>
    </header>
  );
};

const CareerGuidanceForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    currentClass: "",
    schoolName: "",
    subjectsStudied: [],
    preferredStream: "",
    hobbies: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [hoverSubmit, setHoverSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  // Constants for options
  const SUBJECT_OPTIONS = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Economics",
    "History",
    "Geography",
    "Literature",
    "Political Science",
  ];

  const STREAM_OPTIONS = [
    { value: "", label: "-- Select Stream --" },
    { value: "science", label: "Science" },
    { value: "commerce", label: "Commerce" },
    { value: "arts", label: "Arts" },
    { value: "vocational", label: "Vocational" },
  ];

  const GENDER_OPTIONS = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  // Career data for recommendations
  const CAREER_DATA = {
    science: {
      career: "Engineer, Scientist, Doctor, Data Analyst",
      benefits:
        "High demand, strong salary potential, and opportunities for innovation and impact.",
      salary: "Average starting salary $60,000 - $90,000 per year.",
      education:
        "Bachelor's degree in engineering, medicine, computer science or related fields.",
    },
    commerce: {
      career:
        "Accountant, Financial Analyst, Marketing Manager, Entrepreneur",
      benefits:
        "Diverse career paths, strong business networks, and growth potential in corporate sectors.",
      salary: "Average starting salary $50,000 - $80,000 per year.",
      education:
        "Degrees or diplomas in commerce, business administration, finance, or marketing.",
    },
    arts: {
      career: "Graphic Designer, Writer, Teacher, Social Worker",
      benefits:
        "Creative freedom, community impact, and flexible career options.",
      salary: "Average starting salary $35,000 - $60,000 per year.",
      education:
        "Courses in fine arts, humanities, social sciences, education, or communication.",
    },
    vocational: {
      career: "Electrician, Mechanic, Chef, Healthcare Assistant",
      benefits:
        "Hands-on skills, short training periods, and steady job demand.",
      salary: "Average starting salary $30,000 - $50,000 per year.",
      education:
        "Vocational training, apprenticeships, or certificate courses relevant to the field.",
    },
    default: {
      career:
        "Various career options depending on your interests and skills.",
      benefits:
        "Explore widely to find the best fit for your unique talents and passions.",
      salary: "Varies widely based on career path.",
      education:
        "Consider broadly relevant courses or certifications to enhance employability.",
    },
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "subjectsStudied") {
      let newSubjects = [...formData.subjectsStudied];
      if (checked) {
        if (!newSubjects.includes(value)) newSubjects.push(value);
      } else {
        newSubjects = newSubjects.filter((subj) => subj !== value);
      }
      setFormData((prev) => ({ ...prev, subjectsStudied: newSubjects }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const generateRecommendations = (data) => {
    const streamKey = data.preferredStream || "default";
    const baseCareer = CAREER_DATA[streamKey] || CAREER_DATA.default;

    let hobbyMsg = "";
    if (
      data.hobbies.toLowerCase().includes("tech") ||
      data.hobbies.toLowerCase().includes("coding")
    ) {
      hobbyMsg =
        "Your interest in technology is a strong asset, consider adding coding and data analysis skills.";
    } else if (
      data.hobbies.toLowerCase().includes("art") ||
      data.hobbies.toLowerCase().includes("design")
    ) {
      hobbyMsg =
        "Creative hobbies can flourish in design, media, or advertising careers.";
    }

    let subjectsMsg = "";
    if (
      data.subjectsStudied.includes("Mathematics") &&
      data.subjectsStudied.includes("Physics")
    ) {
      subjectsMsg =
        "Strong math and physics background is great for engineering, data science, or finance.";
    } else if (
      data.subjectsStudied.includes("Economics") ||
      data.subjectsStudied.includes("Commerce")
    ) {
      subjectsMsg =
        "Commerce subjects open doors to finance, business, and management fields.";
    }

    return {
      careerPaths: baseCareer.career,
      benefits: baseCareer.benefits,
      salary: baseCareer.salary,
      education: baseCareer.education,
      additionalNotes: [hobbyMsg, subjectsMsg].filter(Boolean),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recs = generateRecommendations(formData);
    setRecommendations(recs);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Styles adhering to Default Design Guidelines
  const styles = {
    container: {
      backgroundColor: "#ffffff",
      maxWidth: 900,
      margin: "48px auto 80px",
      padding: "48px 56px 64px",
      borderRadius: "0.75rem",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "'Inter', sans-serif",
      color: "#374151",
      lineHeight: 1.6,
      boxSizing: "border-box",
    },
    welcomeMessage: {
      fontWeight: 600,
      fontSize: 28,
      marginBottom: 12,
      color: "#6B7280",
      textAlign: "center",
      letterSpacing: "1.5px",
      userSelect: "none",
    },
    heading: {
      fontWeight: 800,
      fontSize: 48,
      marginBottom: 36,
      color: "#111827",
      textAlign: "center",
      userSelect: "none",
    },
    label: {
      display: "block",
      fontWeight: 600,
      fontSize: 16,
      marginBottom: 8,
      marginTop: 24,
      color: "#6B7280",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      fontSize: 16,
      borderRadius: 8,
      border: "1px solid #D1D5DB",
      boxSizing: "border-box",
      transition: "border-color 0.3s ease",
      fontFamily: "'Inter', sans-serif",
      color: "#374151",
    },
    inputFocus: {
      borderColor: "#2563EB",
      outline: "none",
      boxShadow: "0 0 0 3px rgba(59,130,246,0.4)",
    },
    textarea: {
      width: "100%",
      minHeight: 96,
      padding: "12px 16px",
      fontSize: 16,
      borderRadius: 8,
      border: "1px solid #D1D5DB",
      resize: "vertical",
      fontFamily: "'Inter', sans-serif",
      color: "#374151",
      transition: "border-color 0.3s ease",
      boxSizing: "border-box",
    },
    fieldset: {
      border: "none",
      padding: 0,
      marginTop: 20,
      marginBottom: 0,
    },
    checkboxLabel: {
      display: "inline-flex",
      alignItems: "center",
      marginRight: 18,
      fontSize: 16,
      color: "#4B5563",
      cursor: "pointer",
      userSelect: "none",
    },
    checkboxInput: {
      marginRight: 6,
      cursor: "pointer",
      width: 18,
      height: 18,
    },
    radioLabel: {
      display: "inline-flex",
      alignItems: "center",
      marginRight: 24,
      fontSize: 16,
      color: "#4B5563",
      cursor: "pointer",
      userSelect: "none",
    },
    radioInput: {
      marginRight: 6,
      cursor: "pointer",
      width: 18,
      height: 18,
    },
    select: {
      width: "100%",
      padding: "12px 16px",
      fontSize: 16,
      borderRadius: 8,
      border: "1px solid #D1D5DB",
      fontFamily: "'Inter', sans-serif",
      color: "#374151",
      transition: "border-color 0.3s ease",
      boxSizing: "border-box",
    },
    button: {
      marginTop: 40,
      padding: "14px 0",
      backgroundColor: "#111827",
      color: "#FFFFFF",
      fontSize: 18,
      fontWeight: 700,
      border: "none",
      borderRadius: 12,
      cursor: "pointer",
      width: "100%",
      transition: "background-color 0.3s ease",
      userSelect: "none",
      boxShadow: "0 4px 12px rgba(17,24,39,0.3)",
    },
    buttonHover: {
      backgroundColor: "#2563EB",
      boxShadow: "0 6px 16px rgba(37,99,235,0.6)",
    },
    recommendationsSection: {
      marginTop: 64,
      paddingTop: 32,
      borderTop: "1px solid #E5E7EB",
      backgroundColor: "#f9fafb",
      borderRadius: 12,
      padding: 32,
      fontFamily: "'Inter', sans-serif",
      color: "#374151",
      lineHeight: 1.6,
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    },
    recHeading: {
      fontWeight: 700,
      fontSize: 28,
      marginBottom: 16,
      color: "#111827",
      textAlign: "center",
      userSelect: "none",
    },
    recItem: {
      marginBottom: 24,
    },
    recTitle: {
      fontWeight: 600,
      fontSize: 20,
      marginBottom: 6,
      color: "#2563EB",
      userSelect: "none",
    },
    recText: {
      fontSize: 16,
      color: "#374151",
      lineHeight: 1.5,
      userSelect: "text",
    },
    recList: {
      listStyleType: "disc",
      marginLeft: 20,
      color: "#374151",
    },
  };

  const renderTextInput = (label, name, type = "text", placeholder = "") => (
    <>
      <label htmlFor={name} style={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleChange}
        required
        aria-required="true"
        style={{
          ...styles.input,
          ...(focusedField === name ? styles.inputFocus : {}),
        }}
        onFocus={() => setFocusedField(name)}
        onBlur={() => setFocusedField(null)}
        autoComplete="off"
      />
    </>
  );

  return (
    <main
      id="form-container"
      style={styles.container}
      role="main"
      aria-label="Career Guidance Registration Form"
    >
      <p style={styles.welcomeMessage}>WELCOME TO CAREER CAMPUS</p>
      <h1 style={styles.heading}>Career Guidance Registration</h1>
      <form onSubmit={handleSubmit} noValidate>
        {renderTextInput("Full Name", "fullName", "text", "Enter your full name")}
        {renderTextInput("Date of Birth", "dob", "date")}
        {/* Gender Radios */}
        <fieldset
          style={styles.fieldset}
          aria-describedby="gender-desc"
          aria-required="true"
        >
          <legend style={{ ...styles.label, marginTop: 24 }}>Gender</legend>
          <p
            id="gender-desc"
            style={{
              marginTop: 0,
              marginBottom: 8,
              fontSize: 14,
              color: "#6B7280",
            }}
          >
            Select your gender
          </p>
          {GENDER_OPTIONS.map(({ value, label }) => (
            <label
              key={value}
              htmlFor={`gender-${value}`}
              style={styles.radioLabel}
            >
              <input
                id={`gender-${value}`}
                type="radio"
                name="gender"
                value={value}
                checked={formData.gender === value}
                onChange={handleChange}
                style={styles.radioInput}
                required
              />
              {label}
            </label>
          ))}
        </fieldset>
        {renderTextInput("Email", "email", "email", "Enter your email")}
        {renderTextInput("Phone Number", "phone", "tel", "Enter your phone number")}
        {renderTextInput(
          "Current Class",
          "currentClass",
          "text",
          "Enter your current class or grade"
        )}
        {renderTextInput("School Name", "schoolName", "text", "Enter your school name")}
        {/* Subjects Studied Checkboxes */}
        <fieldset
          style={styles.fieldset}
          aria-describedby="subjects-desc"
          aria-required="true"
        >
          <legend style={{ ...styles.label, marginTop: 24 }}>Subjects Studied</legend>
          <p
            id="subjects-desc"
            style={{
              marginTop: 0,
              marginBottom: 8,
              fontSize: 14,
              color: "#6B7280",
            }}
          >
            Select all subjects you study
          </p>
          {SUBJECT_OPTIONS.map((subject) => (
            <label
              key={subject}
              htmlFor={`subject-${subject}`}
              style={styles.checkboxLabel}
            >
              <input
                id={`subject-${subject}`}
                type="checkbox"
                name="subjectsStudied"
                value={subject}
                checked={formData.subjectsStudied.includes(subject)}
                onChange={handleChange}
                style={styles.checkboxInput}
              />
              {subject}
            </label>
          ))}
        </fieldset>
        {/* Preferred Stream Dropdown */}
        <label htmlFor="preferredStream" style={styles.label}>
          Preferred Stream
        </label>
        <select
          id="preferredStream"
          name="preferredStream"
          value={formData.preferredStream}
          onChange={handleChange}
          required
          aria-required="true"
          style={{
            ...styles.select,
            ...(focusedField === "preferredStream" ? styles.inputFocus : {}),
          }}
          onFocus={() => setFocusedField("preferredStream")}
          onBlur={() => setFocusedField(null)}
        >
          {STREAM_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {/* Hobbies Textarea */}
        <label htmlFor="hobbies" style={styles.label}>
          Hobbies and Passions
        </label>
        <textarea
          id="hobbies"
          name="hobbies"
          placeholder="Describe your hobbies, activities, or passions"
          value={formData.hobbies}
          onChange={handleChange}
          required
          aria-required="true"
          rows={4}
          style={{
            ...styles.textarea,
            ...(focusedField === "hobbies" ? styles.inputFocus : {}),
          }}
          onFocus={() => setFocusedField("hobbies")}
          onBlur={() => setFocusedField(null)}
        />
        <button
          type="submit"
          style={hoverSubmit ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setHoverSubmit(true)}
          onMouseLeave={() => setHoverSubmit(false)}
          aria-label="Submit Career Guidance Registration Form"
        >
          Submit
        </button>
      </form>

      {submitted && recommendations && (
        <section
          style={styles.recommendationsSection}
          aria-live="polite"
          aria-labelledby="recommendations-heading"
        >
          <h2 id="recommendations-heading" style={styles.recHeading}>
            Career Guidance Recommendations
          </h2>

          <div style={styles.recItem}>
            <h3 style={styles.recTitle}>Recommended Careers</h3>
            <p style={styles.recText}>{recommendations.careerPaths}</p>
          </div>
          <div style={styles.recItem}>
            <h3 style={styles.recTitle}>Benefits</h3>
            <p style={styles.recText}>{recommendations.benefits}</p>
          </div>
          <div style={styles.recItem}>
            <h3 style={styles.recTitle}>Expected Salary</h3>
            <p style={styles.recText}>{recommendations.salary}</p>
          </div>
          <div style={styles.recItem}>
            <h3 style={styles.recTitle}>Future Education</h3>
            <p style={styles.recText}>{recommendations.education}</p>
          </div>
          {recommendations.additionalNotes.length > 0 && (
            <div style={styles.recItem}>
              <h3 style={styles.recTitle}>Additional Notes</h3>
              <ul style={styles.recList}>
                {recommendations.additionalNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </main>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <CareerGuidanceForm />
    </>
  );
};

export default App;

