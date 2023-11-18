

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import HomeMain from "../components/HomeMain"
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Founder from "../components/Founder";

// Define the Navbar component


// Define the Carousel component
function HomeCarousel() {
    // Define the carousel images and captions
    const carouselItems = [
        {
            image: "https://images.pexels.com/photos/7688335/pexels-photo-7688335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            caption: "Website/App Development",
        },
        {
            image: "https://images.pexels.com/photos/2182981/pexels-photo-2182981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            caption: "Facebook Ads",
        },
        {
            image: "https://images.pexels.com/photos/7681092/pexels-photo-7681092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            caption: "Google Ads",
        },
    ];

    return (
        <div className="h-[20rem] md:h-[35rem] w-full flex items-center justify-center">
            <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={200}
                className="h-[20rem] md:h-[35rem] w-[50rem]"
            >
                {carouselItems.map((item) => (
                    <div key={item.caption} className="flex items-center justify-center">
                        <img src={item.image} alt={item.caption} className="w-full md:h-[33rem] rounded-md" />
                        <p className="legend">{item.caption}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

// Define the Quote component
function Quote() {
    // Define the quote and author
    const quote =
        "The journey of a thousand miles begins with a single step.";
    const author = "Lao Tzu";

    return (
        <div className="bg-white p-4 text-center">
            <p className="text-2xl italic text-gray-600">"{quote}"</p>
        </div>
    );
}

// Define the Customers component
function Customers() {
    // Define the number of customers and the animation effect
    const customers = 240;
    const duration = 3;

    // Use state to store the current count
    const [count, setCount] = useState(0);

    // Use effect to increment the count
    React.useEffect(() => {
        if (count < customers) {
            const timeout = setTimeout(() => {
                setCount(count + 1);
            }, (duration * 1000) / customers);
            return () => clearTimeout(timeout);
        }
    }, [count, customers, duration]);

    return (
        <div className="bg-purple-600 p-4 text-center">
            <p className="text-4xl font-bold text-white">{count}+</p>
            <p style={{fontFamily:'revert'}} className="text-2xl text-white">HAPPY CUSTOMERS</p>
        </div>
    );
}

// Define the Footer component

// Define the App component
function Home() {
    return (

        <div className="flex flex-col h-[35rem] md:h-[32rem] width-full">
            <NavBar />
            <div>
                <div>
                    <div>
                    <div className="md:flex gap-[-3rem]">
                    <h2 style={{fontFamily:'monospace'}} className="md:text-lg mt-7 font-extrabold text-xl text-justify p-6">Elevate your online presence with our expert Website and App development services. Unleash the power of innovation and drive growth for your business in the digital landscape!</h2>
                    <HomeCarousel />
                    <h2 style={{fontFamily:'monospace'}} className=" text-xl md:text-lg font-extrabold mt-7 text-justify p-6">
                    Supercharge your business visibility! Harness the potential of Google and Facebook ads with our tailored strategies. Let us amplify your brand and connect with your target audience for unparalleled business growth."
                    </h2>
                    </div>
                        
                        <Quote />
                        <div className="bg-gray-400 h-[30rem] md:h-[26rem]">
                            <Founder/>
                        </div>
                        <Customers />
                    </div>
                </div>

                <HomeMain />

            </div>
            <Footer />
        </div>
    );
}

export default Home;

