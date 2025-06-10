import React, { useState, useRef, useEffect } from 'react';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    ageOrDob: '',
    educationLevel: '',
    stream: '',
    academicScore: '',
    favoriteSubjects: [],
    hobbies: '',
    skills: '',
    dreamCareer: '',
    openToSuggestions: 'true',
  });

  const [careerReport, setCareerReport] = useState(null);
  const reportRef = useRef(null);

  const educationLevels = [
    'Class 10',
    'Class 11',
    'Class 12',
    'Undergraduate',
    'Graduate',
    'Other',
  ];
  const streams = ['Science', 'Commerce', 'Arts', 'Other'];
  const favoriteSubjectsOptions = [
    'Math',
    'Science',
    'English',
    'History',
    'Computer Science',
    'Art',
    'Economics',
  ];
  const dreamCareersOptions = [
    'Engineer',
    'Doctor',
    'IAS Officer',
    'Data Scientist',
    'Not Sure',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'favoriteSubjects') {
      setFormData((prev) => ({
        ...prev,
        favoriteSubjects: Array.from(
          e.target.selectedOptions,
          (option) => option.value
        ),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const generateCareerReport = (data) => {
    const dreamCareerLower = data.dreamCareer.toLowerCase();
    const primaryCareers = [];
    const alternativeCareers = [];
    let whyCareer = '';
    switch (dreamCareerLower) {
      case 'engineer':
        primaryCareers.push('Software Engineer', 'Civil Engineer');
        alternativeCareers.push('Data Scientist', 'Systems Analyst');
        whyCareer = 'Strong analytical and technical skills, interest in Math and Science.';
        break;
      case 'doctor':
        primaryCareers.push('Doctor', 'Surgeon');
        alternativeCareers.push('Nurse', 'Medical Researcher');
        whyCareer = 'Passion for biology, caring for others, and science knowledge.';
        break;
      case 'ias officer':
        primaryCareers.push('IAS Officer', 'Civil Services');
        alternativeCareers.push('Policy Analyst', 'Public Administrator');
        whyCareer = 'Strong leadership, decision making and societal impact interests.';
        break;
      default:
        primaryCareers.push('Software Engineer', 'Data Scientist');
        alternativeCareers.push('UX Designer', 'Digital Marketer');
        whyCareer = 'Versatile skills and growing technology industry.';
    }

    return {
      careerOptions: {
        primary: primaryCareers,
        alternative: alternativeCareers,
        why: whyCareer,
      },
      educationPath: {
        courses: ['B.Tech in Computer Science', 'B.Sc in related fields'],
        exams: ['JEE Main', 'JEE Advanced'],
        institutes: ['NITs', 'IIITs', 'IITs'],
        certifications: ['Python Certification', 'AWS Certification'],
      },
      careerDescription: {
        overview:
          'Software engineers design, develop and maintain software systems using programming languages.',
        responsibilities: [
          'Write code',
          'Test software',
          'Collaborate with teams',
          'Debug and improve software',
        ],
        environment: 'Office or remote, collaborative team environment',
      },
      salaryInsights: {
        entryLevelIndia: '₹3-6 LPA',
        entryLevelGlobal: '$50,000–$80,000',
        midLevel: '₹8-15 LPA / $90,000',
        highEnd: '₹20+ LPA / $120,000+',
      },
      requiredSkills: {
        hardSkills: ['Programming', 'Algorithms', 'Data Structures'],
        softSkills: ['Communication', 'Problem Solving', 'Teamwork'],
        development: 'Online courses, coding bootcamps, internships, projects',
      },
      benefits: {
        jobSecurity: 'High',
        growth: 'Fast',
        workLifeBalance: 'Good',
        impact: 'Moderate to High',
      },
      futureScope: {
        demand: 'Growing',
        technologies: ['AI', 'Cloud Computing', 'Blockchain'],
        opportunities: 'Remote jobs and global opportunities',
      },
      backupOptions:
        'Consider Data Analyst or QA Tester roles for less pressure or simpler paths.',
      actionPlan: {
        shortTerm: [
          'Learn programming basics',
          'Prepare for entrance exams',
          'Join relevant courses',
        ],
        midTerm: ['Internship', 'Build portfolio', 'Advanced courses'],
        longTerm: ['Master’s degree', 'Switch role if desired'],
      },
      inspirationalQuote:
        '"Choose a job you love, and you will never have to work a day in your life." – Confucius',
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      alert('Please enter your full name.');
      return;
    }
    if (!formData.educationLevel) {
      alert('Please select your current education level.');
      return;
    }
    if (
      (formData.educationLevel === 'Class 11' || formData.educationLevel === 'Class 12') &&
      !formData.stream
    ) {
      alert('Please select your stream/subjects.');
      return;
    }

    const generatedReport = generateCareerReport(formData);
    setCareerReport(generatedReport);
  };

  useEffect(() => {
    if (careerReport && reportRef.current) {
      reportRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [careerReport]);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background:rgb(84, 79, 79); /* white background as per guidelines */
          color:rgb(82, 87, 99);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          line-height: 1.6;
        }
        header {
          position: sticky;
          top: 0;
          background: #fff;
          box-shadow: 0 2px 6px rgba(41, 30, 30, 0.06);
          display: flex;
          align-items: center;
          padding: 1rem 2rem;
          z-index: 1000;
          gap: 1rem;
        }
        header img {
          height: 48px;
          width: auto;
          user-select: none;
        }
        header h1 {
          font-weight: 800;
          font-size: 48px;
          color:rgb(32, 37, 48);
          margin: 0;
          user-select: none;
          white-space: nowrap;
        }
        .page-container {
          max-width: 1200px;
          margin: 3rem auto 6rem;
          display: flex;
          flex-direction: column;
          align-items: center; /* center form horizontally */
          gap: 2.5rem;
          padding: 0 1rem;
        }
        .form-description {
          background:rgb(236, 238, 243);
          border-radius: 0.75rem;
          padding: 2rem 3rem;
          color:rgb(64, 67, 79);
          font-weight: 600;
          font-size: 1.5rem;
          box-shadow: 0 4px 12px rgb(30 58 138 / 0.1);
          max-width: 780px;
          width: 100%;
        }
        .form-description p {
          font-weight: 400;
          font-size: 1.125rem;
          margin-top: 0.5rem;
          color:rgb(44, 45, 48);
          line-height: 1.5;
        }
        form {
          background: #ffff
          ;
          border-radius: 0.75rem;
          padding: 2rem 3rem;
          box-shadow: 0 8px 24px rgb(0 0 0 / 0.05);
          max-width: 780px;
          width: 100%;
          user-select: none;
        }
        h2.section-title {
          font-size: 1.875rem;
          font-weight: 700;
          color:rgb(72, 92, 128);
          margin-bottom: 1.25rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solidrgb(142, 153, 189);
          user-select: none;
        }
        label {
          display: block;
          font-weight: 600;
          color:rgb(93, 103, 118);
          margin-bottom: 0.375rem;
          margin-top: 1rem;
          user-select: none;
        }
        input[type="text"],
        input[type="number"],
        input[type="date"],
        select,
        textarea {
          width: 100%;
          padding: 0.625rem 0.75rem;
          font-size: 1rem;
          border-radius: 0.75rem;
          border: 1px solidrgb(57, 58, 60);
          background: #f9fafb;
          transition: border-color 0.2s ease;
          color:rgb(29, 36, 49);
          user-select: text;
          font-weight: 500;
        }
        input[type="text"]:focus,
        input[type="number"]:focus,
        input[type="date"]:focus,
        select:focus,
        textarea:focus {
          outline: none;
          border-color:rgb(112, 108, 179);
          box-shadow: 0 0 0 3px rgb(79 70 229 / 0.25);
          background: white;
        }
        textarea {
          resize: vertical;
          min-height: 72px;
        }
        select[multiple] {
          height: auto;
          min-height: 110px;
          cursor: pointer;
          padding: 0.375rem 0.75rem;
        }
        select[multiple] option {
          padding: 0.35rem 0.5rem;
        }
        button.submit-btn {
          background: linear-gradient(90deg,rgb(111, 109, 155) 0%, #4338ca 100%);
          color: white;
          border: none;
          padding: 1rem 1.5rem;
          font-size: 1.125rem;
          font-weight: 700;
          border-radius: 0.75rem;
          cursor: pointer;
          margin-top: 2.5rem;
          width: 100%;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
          box-shadow: 0 4px 14px rgb(79 70 229 / 0.4);
        }
        button.submit-btn:hover,
        button.submit-btn:focus {
          background: linear-gradient(90deg,rgb(138, 132, 205) 0%,rgb(144, 178, 232) 100%);
          box-shadow: 0 6px 18px rgb(59 130 246 / 0.6);
          outline: none;
        }
        .career-report {
          background: #fff;
          border-radius: 0.75rem;
          padding: 2rem 3rem;
          box-shadow: 0 10px 30px rgb(0 0 0 / 0.06);
          max-width: 780px;
          width: 100%;
          color: #374151;
          text-align: left;
          user-select: text;
          font-weight: 500;
        }
        .career-report h2 {
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 1.25rem;
          color: #334155;
          user-select: text;
          border-bottom: 2px solid #e0e7ff;
          padding-bottom: 0.5rem;
        }
        .career-report section {
          margin-bottom: 1.25rem;
          user-select: text;
        }
        .career-report h3 {
          font-weight: 600;
          font-size: 1.125rem;
          color: #1e40af;
          margin-bottom: 0.375rem;
          user-select: text;
        }
        .career-report p,
        .career-report ul,
        .career-report li {
          font-size: 1rem;
          line-height: 1.6;
          user-select: text;
          color: #475569;
        }
        .career-report ul {
          padding-left: 1.25rem;
          margin: 0.25rem 0;
          list-style-type: disc;
        }
        .inspirational-quote {
          font-style: italic;
          margin-top: 2rem;
          color: #64748b;
          text-align: center;
          user-select: text;
        }
        @media (min-width: 640px) {
          label {
            margin-top: 0.85rem;
            margin-bottom: 0.5rem;
          }
          textarea {
            min-height: 80px;
          }
        }
      `}</style>

      <header>
        <img
          src="/logo.jpg"
          alt="Company Logo"
          aria-hidden="true"
          draggable="false"
        />
        <h1>Career Campus</h1>
      </header>
      <main className="page-container" role="main">
        <section className="form-description" aria-label="About this career guidance form">
          <h2>Career Guidance Form</h2>
          <p>
            Fill out this form to get personalized career recommendations based on your academic background,
            interests, and goals. Discover career options, education paths, and more!
          </p>
        </section>
        <form onSubmit={handleSubmit} noValidate>
          {/* Personal Info */}
          <section>
            <h2 className="section-title">1. Personal Information</h2>
            <label htmlFor="fullName">
              Full Name <sup aria-label="required">*</sup>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              autoComplete="name"
              aria-required="true"
              placeholder="Your full name"
              spellCheck="false"
            />
            <label htmlFor="ageOrDob" style={{ marginTop: '0.75rem' }}>
              Age or Date of Birth
            </label>
            <input
              type="date"
              id="ageOrDob"
              name="ageOrDob"
              value={formData.ageOrDob}
              onChange={handleChange}
              aria-describedby="ageDobHelp"
              placeholder="YYYY-MM-DD"
            />
          </section>

          {/* Academic Background */}
          <section>
            <h2 className="section-title">2. Academic Background</h2>
            <label htmlFor="educationLevel">
              Current Education Level <sup aria-label="required">*</sup>
            </label>
            <select
              id="educationLevel"
              name="educationLevel"
              value={formData.educationLevel}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  educationLevel: e.target.value,
                  stream:
                    e.target.value === 'Class 11' || e.target.value === 'Class 12'
                      ? prev.stream
                      : '',
                }));
              }}
              required
              aria-required="true"
            >
              <option value="">Select...</option>
              {educationLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>

            {(formData.educationLevel === 'Class 11' ||
              formData.educationLevel === 'Class 12') && (
              <>
                <label htmlFor="stream" style={{ marginTop: '0.75rem' }}>
                  Stream/Subjects <sup aria-label="required">*</sup>
                </label>
                <select
                  id="stream"
                  name="stream"
                  value={formData.stream}
                  onChange={handleChange}
                  required
                  aria-required="true"
                >
                  <option value="">Select...</option>
                  {streams.map((stream) => (
                    <option key={stream} value={stream}>
                      {stream}
                    </option>
                  ))}
                </select>
              </>
            )}

            <label htmlFor="academicScore" style={{ marginTop: '0.75rem' }}>
              Recent Academic Score (%)
            </label>
            <input
              type="number"
              id="academicScore"
              name="academicScore"
              value={formData.academicScore}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.01"
              placeholder="e.g. 85.5"
              aria-describedby="academicScoreHelp"
            />
          </section>

          {/* Interests & Strengths */}
          <section>
            <h2 className="section-title">3. Interests &amp; Strengths</h2>
            <label htmlFor="favoriteSubjects">
              Favorite Subjects (Ctrl/Cmd + Click to select multiple)
            </label>
            <select
              multiple
              id="favoriteSubjects"
              name="favoriteSubjects"
              value={formData.favoriteSubjects}
              onChange={handleChange}
              size={6}
              aria-multiselectable="true"
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              {favoriteSubjectsOptions.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>

            <label htmlFor="hobbies" style={{ marginTop: '0.75rem' }}>
              Top 3 Hobbies or Interests
            </label>
            <textarea
              id="hobbies"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
              rows="3"
              placeholder="List your hobbies or interests, separated by commas"
              spellCheck="true"
            />

            <label htmlFor="skills" style={{ marginTop: '0.75rem' }}>
              Technical or Creative Skills (Optional)
            </label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              rows="3"
              placeholder="e.g., Coding, Drawing, Writing"
              spellCheck="true"
            />
          </section>

          {/* Career Goals */}
          <section>
            <h2 className="section-title">4. Career Goals</h2>
            <label htmlFor="dreamCareer">Dream Career (if known)</label>
            <select
              id="dreamCareer"
              name="dreamCareer"
              value={formData.dreamCareer}
              onChange={handleChange}
              aria-describedby="dreamCareerHelp"
            >
              <option value="">Select...</option>
              {dreamCareersOptions.map((career) => (
                <option key={career} value={career}>
                  {career}
                </option>
              ))}
            </select>

            <fieldset
              className="radio-group"
              aria-label="Are you open to career suggestions?"
              style={{ marginTop: '0.75rem' }}
            >
              <legend style={{ fontWeight: 600, marginBottom: '0.25rem', color: '#374151' }}>
                Are you open to career suggestions?
              </legend>
              <label>
                <input
                  type="radio"
                  name="openToSuggestions"
                  value="true"
                  checked={formData.openToSuggestions === 'true'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="openToSuggestions"
                  value="false"
                  checked={formData.openToSuggestions === 'false'}
                  onChange={handleChange}
                />
                No
              </label>
            </fieldset>
          </section>

          <button type="submit" className="submit-btn" aria-label="Generate Career Report">
            Generate Career Report
          </button>
        </form>

        {careerReport && (
          <article
            className="career-report"
            role="region"
            aria-live="polite"
            tabIndex={-1}
            ref={reportRef}
          >
            <h2>Career Options</h2>
            <section>
              <h3>Primary Recommended Careers</h3>
              <p>{careerReport.careerOptions.primary.join(', ')}</p>
            </section>
            <section>
              <h3>Alternative Career Paths</h3>
              <p>{careerReport.careerOptions.alternative.join(', ')}</p>
            </section>
            <section>
              <h3>Why This Career?</h3>
              <p>{careerReport.careerOptions.why}</p>
            </section>

            <h2>📚 Future Education Path</h2>
            <section>
              <h3>Relevant Courses or Degrees</h3>
              <p>{careerReport.educationPath.courses.join(', ')}</p>
            </section>
            <section>
              <h3>Required Entrance Exams</h3>
              <p>{careerReport.educationPath.exams.join(', ')}</p>
            </section>
            <section>
              <h3>Top Institutes or Colleges</h3>
              <p>{careerReport.educationPath.institutes.join(', ')}</p>
            </section>
            <section>
              <h3>Recommended Certifications</h3>
              <p>{careerReport.educationPath.certifications.join(', ')}</p>
            </section>

            <h2>💼 Career Description</h2>
            <section>
              <h3>Overview of Job Role</h3>
              <p>{careerReport.careerDescription.overview}</p>
            </section>
            <section>
              <h3>Key Responsibilities</h3>
              <ul>
                {careerReport.careerDescription.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Work Environment</h3>
              <p>{careerReport.careerDescription.environment}</p>
            </section>

            <h2>💰 Salary Insights</h2>
            <section>
              <h3>Entry-Level Salary (India)</h3>
              <p>{careerReport.salaryInsights.entryLevelIndia}</p>
            </section>
            <section>
              <h3>Entry-Level Salary (Global)</h3>
              <p>{careerReport.salaryInsights.entryLevelGlobal}</p>
            </section>
            <section>
              <h3>Average Mid-Level Salary</h3>
              <p>{careerReport.salaryInsights.midLevel}</p>
            </section>
            <section>
              <h3>Potential High-End Salary</h3>
              <p>{careerReport.salaryInsights.highEnd}</p>
            </section>

            <h2>🧠 Required Skills</h2>
            <section>
              <h3>Hard Skills</h3>
              <p>{careerReport.requiredSkills.hardSkills.join(', ')}</p>
            </section>
            <section>
              <h3>Soft Skills</h3>
              <p>{careerReport.requiredSkills.softSkills.join(', ')}</p>
            </section>
            <section>
              <h3>How to Develop Them</h3>
              <p>{careerReport.requiredSkills.development}</p>
            </section>

            <h2>🌟 Benefits of This Career</h2>
            <section>
              <h3>Job Security</h3>
              <p>{careerReport.benefits.jobSecurity}</p>
            </section>
            <section>
              <h3>Growth Opportunities</h3>
              <p>{careerReport.benefits.growth}</p>
            </section>
            <section>
              <h3>Work-Life Balance</h3>
              <p>{careerReport.benefits.workLifeBalance}</p>
            </section>
            <section>
              <h3>Impact on Society</h3>
              <p>{careerReport.benefits.impact}</p>
            </section>

            <h2>📈 Future Scope</h2>
            <section>
              <h3>Industry Demand Trend</h3>
              <p>{careerReport.futureScope.demand}</p>
            </section>
            <section>
              <h3>Emerging Technologies</h3>
              <p>{careerReport.futureScope.technologies.join(', ')}</p>
            </section>
            <section>
              <h3>Global Opportunities</h3>
              <p>{careerReport.futureScope.opportunities}</p>
            </section>

            <h2>🔄 Backup Options (Plan B)</h2>
            <section>
              <p>{careerReport.backupOptions}</p>
            </section>

            <h2>📌 Next Steps / Action Plan</h2>
            <section>
              <h3>Short-Term Goals</h3>
              <ul>
                {careerReport.actionPlan.shortTerm.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Mid-Term Goals</h3>
              <ul>
                {careerReport.actionPlan.midTerm.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Long-Term Goals</h3>
              <ul>
                {careerReport.actionPlan.longTerm.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="inspirational-quote" aria-label="Inspirational Quote">
              {careerReport.inspirationalQuote}
            </section>
          </article>
        )}
      </main>
    </>
  );
};

export default CareerForm;
