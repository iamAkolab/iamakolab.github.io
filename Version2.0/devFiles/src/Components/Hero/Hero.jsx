import React, { useState, useEffect } from 'react';
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_pic from '../../assets/profile_pic.png'

const Hero = () => {
  const roles = ["Software Engineer", "Machine Learning Engineer", "Cloud Engineer", "DevSecOps Engineer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let charIndex = 0;
    const currentRole = roles[currentRoleIndex];
    
    const typeWriter = setInterval(() => {
      setDisplayedText(currentRole.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === currentRole.length) clearInterval(typeWriter);
    }, 100); // adjust typing speed here (100ms per character)

    // Change role every 5 seconds
    const roleInterval = setTimeout(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 5000);

    return () => {
      clearInterval(typeWriter);
      clearTimeout(roleInterval);
    };
  }, [currentRoleIndex]);

  return (
    <div id='home' className='hero'>
        <img src={profile_pic} alt="" />
        <h1>
         <span>Hi, I'm Akolab</span>{" "} <br />
         <span className="role-text">{displayedText}</span>{" "}
        </h1>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
          <a
            href="https://drive.google.com/file/d/1de9Z7fy30h4B269xT2omp9PO2BBIj88T/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-resume"
          >
            My Resume
          </a>
        </div>
    </div>
  )
}

export default Hero