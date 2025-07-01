# Career Campus

Career Campus is a modern, interactive web platform designed to guide users in their career journey. It features a visually engaging landing page, interactive games, AI-powered chat, personalized career suggestions, and a contact form that sends messages directly to the team.

---
## Preview
![Screenshot 2025-07-02 003011](https://github.com/user-attachments/assets/157f692a-7506-4c78-9191-7f4f3119553b)

![Screenshot 2025-07-02 003108](https://github.com/user-attachments/assets/810899a0-0cda-4866-ad8c-4ef3b90f892a)



## Features

- **Landing Page with Video Background:**  
  Eye-catching landing page with a looping video and call-to-action buttons.

- **Navbar & Footer:**  
  Transparent, modern navigation bar and a footer with team info and a contact form (integrated with EmailJS).

- **Interactive 3D Canvas:**  
  Uses [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) and postprocessing effects for a dynamic 3D experience.

- **Scrolling Text:**  
  Animated, GSAP-powered scrolling text for announcements or highlights.

- **Slider Component:**  
  Carousel with video and content slides, allowing navigation to Chat, Game, and Form pages.

- **Games & Quizzes:**  
  Multiple quizzes and interactive forms to help users explore career options.

- **AI Chat:**  
  Chatbot for instant career guidance.

- **Contact Form:**  
  Users can send messages directly to the team via EmailJS.

---

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Vanshikarahja/IBM-project.git
   cd IBM-project/Career_Campus
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up EmailJS (for contact form):**
   - Create an account at [EmailJS](https://www.emailjs.com/).
   - Create a service and a "Contact Us" template.
   - Get your Service ID, Template ID, and Public Key.
   - Replace the placeholders in `Footer.jsx` with your actual EmailJS credentials.

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Open in your browser:**
   ```
   http://localhost:5173/
   ```

---

## Usage

- **Landing Page:**  
  Visit `/` to see the landing page with video background and navigation.

- **Home Page:**  
  `/home` renders the main interactive experience with 3D canvas, slider, and more.

- **Games & Quizzes:**  
  Access via the slider or directly at `/game`.

- **Chat:**  
  Access via the slider or directly at `/chat`.

- **Contact:**  
  Use the form in the footer to send a message to the team.

---

## Technologies Used

- React
- React Router
- GSAP (GreenSock Animation Platform)
- React Three Fiber
- EmailJS
- CSS3

---

## Team Members

- Aayushi Verma
- Vanshika Raheja
- Manya Bansal
- Yuvraj Sharma
- Lovely Chauhan

---

## License

This project is for educational purposes.
