// Import React and other libraries
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Define the pages data
const pages = [
    {
        name: "Services",
        image: "^1^",
        description:
            "We Offer A Range Of Services To Elevate Your Brand With our Experts:  Website/App Development, Google Ads, Facebook Ads, Digital Marketing, and SEO. Unlock your digital potential today!",
    },
    {
        name: "About",
        image: "^2^",
        description:
            "We Are A Team Of Passionate Developers Who Love To Create Beautiful And Functional Websites And Apps.",
    },
    {
        name: "Contact Us",
        image: "^3^",
        description:
            "If You Have Any Questions Or Inquiries, Please Feel Free To Contact Us Via Email Or Phone.",
    },
];

// Define the Pages component
function Pages() {
    // Use state to store the current page index
    const [index, setIndex] = useState(0);

    // Use effect to change the page index
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % pages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    // Use media query to determine the screen size
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div className="flex md:h-[20rem]"
            style={{
                // Use a perspective and transform to create a 3D effect
                perspective: "1000px",
                transform: `rotateY(${index * 10}deg)`,
                transition: "transform 1s ease-in-out",
            }}>
            {/* Use a gradient background for the pages */}
            <div
                className="h-full w-full bg-gradient-to-t from-purple-600 to-white"

            >
                {/* Use a flex container to display the pages as a slider card */}
                <div
                    className="md:flex h-full w-full"
                    style={{
                        // Use a transform to adjust the position of the pages
                        // transform: "translateX(-33.33%)",
                    }}
                >
                    {/* Map over the pages data and render each page as a card */}
                    {pages.map((page, i) => (
                        <div
                            key={page.name}
                            className="md:flex p-4"
                            style={{
                                // Use a transform to rotate each page around the Y axis

                            }}
                        >
                            {/* Use a card component to display the page image and description */}

                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                <div className="p-8">
                                    <div className="uppercase text-center tracking-wide text-xl text-purple-500 font-semibold">
                                        {page.name}
                                    </div>
                                    <p className="mt-2 text-lg text-gray-700">{page.description}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pages;
