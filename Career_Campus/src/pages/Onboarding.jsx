// src/pages/Onboarding.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Onboarding = ({ onStart }) => {
  const [name, setName] = useState('');
  const [personality, setPersonality] = useState('');
  const [career, setCareer] = useState('');

  const handleStart = () => {
    if (name && personality && career) {
      onStart({ name, personality, career });
    } else {
      alert('Please fill all fields!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-500 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white text-gray-800 shadow-2xl rounded-3xl p-10 w-full max-w-lg space-y-6"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          🌟 Future Me: Choose Your Adventure
        </h1>

        <div className="space-y-4">
          <label className="block text-sm font-semibold">Your Name:</label>
          <input
            type="text"
            placeholder="e.g., Vanshika"
            className="w-full p-3 rounded-xl border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block text-sm font-semibold">Select Personality Type:</label>
          <select
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
            className="w-full p-3 rounded-xl border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Choose one</option>
            <option value="Introvert">🧘 Introvert</option>
            <option value="Leader">🧠 Leader</option>
            <option value="Creative Thinker">🎨 Creative Thinker</option>
            <option value="Risk-taker">🚀 Risk-taker</option>
          </select>

          <label className="block text-sm font-semibold">Your Dream Career:</label>
          <input
            type="text"
            placeholder="e.g., Scientist, Artist, CEO"
            className="w-full p-3 rounded-xl border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
          />
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition transform duration-300"
        >
          🚀 Start My Journey
        </button>
      </motion.div>
    </div>
  );
};

export default Onboarding;
