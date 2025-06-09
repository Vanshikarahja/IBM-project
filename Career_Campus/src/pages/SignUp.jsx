

import React, { useState, useRef } from 'react';
import './signin.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    age: '',                        
    gender: '',
    qualification: '',
    city: '',
    country: '',
  });

  const [errors, setErrors] = useState({});

  const refs = {
    firstName: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
    mobile: useRef(null),
    age: useRef(null),
    gender: useRef(null),
    qualification: useRef(null),
    city: useRef(null),
    country: useRef(null),
  };

  const handleKeyDown = (e, nextRefName) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      refs[nextRefName]?.current?.focus();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (formData.password.length < 6) newErrors.password = 'Password too short';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile must be 10 digits';
    const age = parseInt(formData.age);
    if (!age || age < 1 || age > 120) newErrors.age = 'Enter valid age';
    if (!formData.gender) newErrors.gender = 'Select a gender';
    if (!formData.qualification) newErrors.qualification = 'Select qualification';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="firstName"
            placeholder="First Name"
            ref={refs.firstName}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'lastName')}
          />
          <span className="error">{errors.firstName}</span>

          <input
            name="lastName"
            placeholder="Last Name"
            ref={refs.lastName}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'email')}
          />
          <span className="error">{errors.lastName}</span>

          <input
            name="email"
            placeholder="Email"
            ref={refs.email}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'password')}
          />
          <span className="error">{errors.email}</span>

          <input
            name="password"
            type="password"
            placeholder="Password"
            ref={refs.password}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'confirmPassword')}
          />
          <span className="error">{errors.password}</span>

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            ref={refs.confirmPassword}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'mobile')}
          />
          <span className="error">{errors.confirmPassword}</span>

          <input
            name="mobile"
            placeholder="Mobile Number"
            ref={refs.mobile}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'age')}
          />
          <span className="error">{errors.mobile}</span>

          <input
            name="age"
            placeholder="Age"
            ref={refs.age}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'gender')}
          />
          <span className="error">{errors.age}</span>

          <select
            name="gender"
            ref={refs.gender}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'qualification')}
            defaultValue=""
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <span className="error">{errors.gender}</span>

          <select
            name="qualification"
            ref={refs.qualification}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'city')}
            defaultValue=""
          >
            <option value="" disabled>Select Qualification</option>
            <option value="highschool">High School</option>
            <option value="bachelor">Bachelor's</option>
            <option value="master">Master's</option>
            <option value="phd">PhD</option>
            <option value="other">Other</option>
          </select>
          <span className="error">{errors.qualification}</span>

          <input
            name="city"
            placeholder="City"
            ref={refs.city}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, 'country')}
          />
          <span className="error">{errors.city}</span>

          <input
            name="country"
            placeholder="Country"
            ref={refs.country}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit(e);
            }}
          />
          <span className="error">{errors.country}</span>

          <button type="submit" className="signin-btn">Sign Up </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;

