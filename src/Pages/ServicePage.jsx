// Import React and Tailwind CSS
import React from "react";
import "tailwindcss/tailwind.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Define the services data
const services = [
  {
    name: "Website/App Development",
    description:
      "Transform Your Ideas Into Stunning, Functional, And User-Friendly Websites And Mobile Applications. Our Expert Development Team Ensures Seamless Navigation And A Visually Appealing Design, Creating An Immersive Experience For Your Audience.",
  },
  {
    name: "Google Ads",
    description:
      "Maximize Your Online Visibility And Target Potential Customers Effectively With Our Google Ads Services. From Strategic Keyword Targeting To Compelling Ad Creatives, We Optimize Your Campaigns To Deliver Measurable Results And Enhance Your ROI.",
  },
  {
    name: "Facebook Ads",
    description:
      "Leverage The Power Of Social Media With Our Facebook Ads Expertise. We Craft Engaging And Shareable Content, Precisely Target Your Audience, And Analyze Campaign Performance To Ensure Your Brand Stands Out In The Crowded Digital landscape.",
  },
  {
    name: "Digital Marketing",
    description:
      "Our Digital Marketing Strategies Are Tailored To Align With Our Business Goals. We Employ A Holistic Approach That Encompasses Social Media Management, Email Marketing, Content Creation, And More, Ensuring A Cohesive And Impactful Online Presence.",
  },
  {
    name: "SEO (Search Engine Optimization)",
    description:
      "Improve Your Website's Visibility On Search Engines And Drive Organic Traffic With Our SEO Services. We Implement Proven Optimization Techniques, Conduct Thorough Keyword Research, And Monitor Search Engine Algorithms To Keep Your Business Ahead In The Digital Race.",
  },
];

// Define the Page component
function Page() {
  return (
    <div>
    <NavBar/>
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-400">
      {/* Use a container to center the content */}
      <div className="container mx-auto px-4 py-8">
        {/* Use a heading for the page title */}
        <h1 style={{fontFamily:'serif'}} className="text-4xl font-bold text-center text-white">
          Our Services
        </h1>
        {/* Use a paragraph for the page introduction */}
        <p style={{fontFamily:"sans-serif"}} className="text-lg text-center font-bold text-white mt-4">
          At <span className="text-2xl text-blue-700" style={{fontFamily:'serif'}}>TechStack</span>, We Specialize In Providing A Comprehensive
          Suite Of Digital Solutions To Elevate Your Online Presence <span style={{fontFamily:'serif'}} className="font-bold text-black text-2xl">At Lowest Price</span> And Drive
          Business Growth. Our Range Of Services Is Designed To Empower
          Businesses Of All Sizes, From Startups To Established Enterprises.
          Here's How We Can Help You:
        </p>
        {/* Use a grid to display the services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Map over the services data and render each service as a card */}
          {services.map((service) => (
            <div
              key={service.name}
              className="p-4 rounded-xl shadow-lg"
              // Use inline style to create a water bubble type gradient
              style={{
                background: `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), ${service.name ===
                  "Website/App Development"
                  ? "rgba(2, 0, 36, 1)"
                  : service.name === "Google Ads"
                  ? "rgba(9, 9, 121, 1)"
                  : service.name === "Facebook Ads"
                  ? "rgba(0, 212, 255, 1)"
                  : service.name === "Digital Marketing"
                  ? "rgba(7, 0, 6, 1)"
                  : "rgba(255, 2, 325, 1)"})`,
              }}
            >
              {/* Use a heading for the service name */}
              <h2 className="text-2xl font-bold text-white">{service.name}</h2>
              {/* Use a paragraph for the service description */}
              <p style={{fontFamily:'sans-serif'}} className='text-lg text-white mt-2'>{service.description}</p>
            </div>
          ))}
        </div>
        {/* Use a paragraph for the page conclusion */}
        <p className="text-lg text-center text-white mt-8">
          Whether You're Looking To Establish A Robust Online Presence, Increase
          Brand Awareness, Or Drive Sales, <span className="text-2xl text-black" style={{fontFamily:'serif'}}>TechStack</span> Is Committed To
          Delivering Tailored Solutions That Align With Your Unique Objectives.
          Join Hands With Us, And Let's Embark On A Journey To Digital Success
          Together!
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Page;
