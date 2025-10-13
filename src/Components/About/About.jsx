import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_dev from '../../assets/profile_dev.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_dev} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p> I am an Experienced Software Engineer with a demonstrated history of working in the Financial Services Industry. 
                        I hold a BSc in Systems Engineering and an MSc in Computer Science, I continuously seek opportunities to learn, adapt, and contribute.
                    </p>
                    <p>
                        My expertise lies in designing and developing scalable, cloud-based applications and integrating AI technologies using modern stacks such as Java, Python, and React.js.
                        I’m passionate about transforming complex problems into elegant, data-driven solutions that deliver real value to users.
                        
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p> Java </p> <hr style={{width:"75%"}} /></div>
                    <div className="about-skill"><p> Python </p> <hr style={{width:"95%"}} /></div>
                    <div className="about-skill"><p> React JS </p> <hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p> HTML & CSS </p> <hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About