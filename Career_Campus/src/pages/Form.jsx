import React, { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        about: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you can send form data to a backend if needed
    };

    if (submitted) {
        return (
            <div className="max-w-md mx-auto mt-10 p-6 bg-green-100 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Thank you for your response!</h2>
                <p>We have received your information.</p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow"
        >
            <h2 className="text-2xl font-bold mb-4">Tell us about yourself</h2>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Name</label>
                <input
                    className="w-full border px-3 py-2 rounded"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Email</label>
                <input
                    className="w-full border px-3 py-2 rounded"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">About Yourself</label>
                <textarea
                    className="w-full border px-3 py-2 rounded"
                    name="about"
                    value={form.about}
                    onChange={handleChange}
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;