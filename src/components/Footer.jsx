// Import React and React Bootstrap
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from '../assets/logo1.png'


// Define the social media icons and links
const socialIcons = [

  {
    name: "Twitter",
    icon: <FaTwitter className="h-5 w-5 hover:text-yellow-400 cursor-pointer" />,
    link: "https://twitter.com/Shubhadeepmaha9",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="h-5 w-5 hover:text-yellow-400 cursor-pointer" />,
    link: "https://www.instagram.com/shubhadeep.mahato.146/",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="h-5 w-5 hover:text-yellow-400 cursor-pointer" />,
    link: "c",
  },
];

// Define the Footer component
function Footer() {
  const redirectToGmail = () => {
    const recipient = 'shubhadeepmahato123@gmail.com'; // Replace with the actual email address

    // Construct the Gmail compose URL
    const gmailComposeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}`;

    // Open Gmail in a new tab
    window.open(gmailComposeUrl, '_blank');
  }
  return (
    <footer className="bg-slate-600 text-white">
      <Container>
        <Row className="mb-4">
          <Col md={6} className="text-center">
            <div className="d-flex flex-column pt-4">
              <div className="flex m-auto justify-center">
                <img className="h-8 w-30 text-center" src={logo} />
              </div>
              <p>
                We are a team of passionate developers who love to create
                beautiful and functional websites and apps.
              </p>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-end text-center">
            <div className="flex align-items-center justify-center">
              {socialIcons.map((item) => (
                <a
                  href={item.link}
                  key={item.name}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white me-3"
                >

                  {item.icon}
                </a>
              ))}
              <FaEnvelope onClick={redirectToGmail} className="h-5 w-5 hover:text-yellow-400 cursor-pointer" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="text-center m-auto">
            <h5 className="mb-3">Services</h5>
            <div variant="flush" className="text-white justify-center font-bold  md:flex gap-2 text-center m-auto">
              <p>Website/App</p>
              <p>Google Ads</p>
              <p>FaceBook Ads</p>
              <p>SEO(Search Engine Optimization)</p>
            </div>
          </Col>

        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} TechStack. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
