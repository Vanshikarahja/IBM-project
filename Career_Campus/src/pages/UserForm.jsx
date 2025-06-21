



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './form.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    interest: '',
    personality: '',
    goal: '',
    hobbies: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Yahan aap form data ko send kar sakte ho ya save kar sakte ho

    // Ab navigate karte hain agle page par
  navigate("/explore-future");
   
  };

  return (
    <div className="form-container">
      <h1 className="game-intro"> 🚀Your Journey Begins Here!</h1>
      <h2 className="form-heading"> 📝 Tell us about yourself</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="interest"
          placeholder="Your Interests"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="personality"
          placeholder="Your Personality"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="goal"
          placeholder="What do you want to become?"
          onChange={handleChange}
          required
        />
        <textarea
          name="hobbies"
          placeholder="Your Hobbies"
          onChange={handleChange}
          required
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default UserForm;



