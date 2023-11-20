import React from 'react';
import 'tailwindcss/tailwind.css';

// Import the video file
import aboutImage from '../assets/AboutImage.jpg'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

// Define the About us component
function AboutUs() {
    // Define the animation style for the button
    const animationStyle = {
        animation: "pulse 2s infinite",
    };
    let navigate = useNavigate()

    // Define the click handler for the button
    const handleClick = () => {
        navigate('/contact')
    };

    // Define the background video style
    const videoStyle = {
        position: "fixed",
        zIndex: -1,
        width: "100%",
        height: "60%",
    };

    // Return the JSX element
    return (
        <div>
            <NavBar />
            <div className="flex flex-col items-center justify-center h-screen">
                {/* Background video */}
                <img style={videoStyle} src={aboutImage} alt="" />
                {/* Title */}
                <div className="w-full h-1/6 flex items-center justify-center">
                    <h1 style={{ color: 'rgb(255, 204, 153)', }} className="md:text-6xl text-3xl font-bold">About DropNotch.</h1>
                </div>
                {/* Description */}
                <div className="md:w-4/5 w-full mb-[8rem] md:mb-0 h-1/3 flex items-center justify-center bg-black bg-opacity-40 m-5 rounded-md">
                    <p style={{ fontFamily:'serif',fontWeight: 'bolder', color: 'rgb(255, 204, 153)' }} className=" md:text-2xl text-base text-center">
                        DropNotch. Is A Company That Provides Services Like Web/App Development, Google Ads, Facebook Ads, SEO And Digital Marketing. We Help Our Clients To Grow Their Online Presence And Reach Their Target Audience. We Have A Team Of Experts Who Are Passionate About Technology And Innovation. We Deliver High-Quality Products And Services That Meet The Needs And Expectations Of Our Clients.
                    </p>
                </div>
                {/* Button */}
                <div className="w-full h-1/6 flex items-center justify-center">
                    <button
                        className="w-40 h-16 rounded-full bg-black text-white text-2xl font-bold"
                        style={animationStyle}
                        onClick={handleClick}
                    >
                        Contact
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

// Export the component
export default AboutUs;