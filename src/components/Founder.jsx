// Import React and other libraries
import React from "react";
import { FaInstagram, FaLinkedinIn,FaTwitter } from "react-icons/fa";

// Define the founder data
const founder = {
  name: "Shubhadeep Mahato",
  image: "https://scontent.fccu9-3.fna.fbcdn.net/v/t39.30808-6/326110770_694534842140821_5042788323370012458_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vkJdsv9tB9AAX_T_ULi&_nc_ht=scontent.fccu9-3.fna&oh=00_AfAGrGgZPTdG80em1yfFwWAWmv3J_LZcpWCEuzfSST30Og&oe=655D341A",
  bio: "Hi I am Shubhadeep Mahato The Founder And CEO Of DropNotch.",
  socials: [
    {
      name: "Instagram",
      icon: <FaInstagram className="h-6 w-6 hover:text-black cursor-pointer"/>,
      link: "https://www.instagram.com/shubhadeep.mahato.146/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="h-6 w-6 hover:text-black cursor-pointer"/>,
      link: "https://www.linkedin.com/in/shubhadeep-mahato-24136621b/",
    },
    {
      name: "Email",
      icon: <FaTwitter className="h-6 w-6 hover:text-black cursor-pointer"/>,
      link: "https://twitter.com/Shubhadeepmaha9",
    },
  ],
};

// Define the Founder component
function Founder() {
  return (
    <div className="flex  flex-col items-center bg-white p-4 rounded-xl shadow-lg">
      {/* Use a rounded image with a border */}
      <img
        src={founder.image}
        alt={founder.name}
        className="h-48 w-48 object-cover rounded-full border-4 border-purple-600"
      />
      {/* Use a heading for the name */}
      <h1 className="text-4xl text-center font-bold text-purple-800 mt-4">{founder.name}</h1>
      {/* Use a paragraph for the bio */}
      <p className="text-md  font-bold text-gray-600 text-center mt-2">{founder.bio}</p>
      {/* Use a flex container for the social icons */}
      <div className="flex items-center justify-center mt-4">
        {founder.socials.map((item) => (
          <a
            href={item.link}
            key={item.name}
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 mx-2"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Founder;
