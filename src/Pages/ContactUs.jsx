// Import React and Tailwind CSS
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import BusinessImage from '../assets/img.png'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import emailjs from '@emailjs/browser';
// Define the Contact component
function Contact() {
  // Use state hooks to store the input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Define a function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent the default browser behavior
    let content={
      message,email,name
    }
    console.log("Hi");
    e.preventDefault();
    // Sending The Email
    emailjs.send('service_kb3spli', 'template_6cnbccc',content,'t6PN1HARmKE1tjvUM')
    .then(function(response) {
    setSubmitted(true);
    setName('')
    setEmail('')
    setMessage('')
    setSubmitted(false);
    
    }, function(error) {
         alert('FAILED...', error)
    });

    // Set the submitted state to true
    
  };

  return (
    <div className="">
    <NavBar/>
    <div className="h-[85%] bg-gradient-to-r from-black to-gray-600">
      {/* Use a container to center the content */}
      <div className="container mx-auto px-4 py-8">
        {/* Use a heading for the page title */}
        <h1 className="text-4xl font-bold text-center text-white">
          Contact Us
        </h1>
        {/* Use a paragraph for the page introduction */}
        <p style={{fontFamily:'monospace'}} className="text-xl font-bold text-center text-white mt-4">
          We Would Love To Hear From You. Please Fill Out The Form Below And We
          Will Get Back To You As Soon As Possible.
        </p>
        {/* Use a grid to display the form and the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* Use a form for the input sections */}
          <form onSubmit={handleSubmit} className="p-4 rounded-xl shadow-lg">
            {/* Use a label and an input for the name */}
            <label htmlFor="name" className="text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              style={{fontFamily:'sans-serif'}}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block font-bold  w-full mt-2 mb-4 p-2 border-2 border-purple-600 rounded-md"
            />
            {/* Use a label and an input for the email */}
            <label htmlFor="email" className="text-white">Email</label>
            <input
              type="email"
              style={{fontFamily:'sans-serif'}}
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block font-bold  w-full mt-2 mb-4 p-2 border-2 border-purple-600 rounded-md"
            />
            {/* Use a label and a textarea for the message */}
            <label htmlFor="message" className="text-white">Message</label>
            <textarea
              id="message"
              style={{fontFamily:'sans-serif'}}
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="block w-full font-bold  mt-2 mb-4 p-2 border-2 border-purple-600 rounded-md"
              rows="5"
            ></textarea>
            {/* Use a button for the send message */}
            <button
              type="submit"
              className="block w-full active:bg-green-300 font-bold mt-4 p-2 bg-gradient-to-r from-white to-black text-white rounded-md"
              // Use inline style to create a simple animation effect on the button
              style={{
                transition: "transform 0.3s",
                transform: submitted ? "scale(1.2)" : "scale(1)",
              }}
            >
              Send Message
            </button>
          </form>
          {/* Use an image for the illustration */}
          <img
            src={BusinessImage}
            alt="Contact illustration"
            className="h-[80%] w-full p-7  mb-[3rem] rounded-xl "
          />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Contact;
