import React from 'react';
import './about.css';
import Me from '../../images/photo-of-me.jpg'

function About () {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
        <h2>About Me</h2>
        <img src={Me} alt="A picture of Ollie wearing a blue sweater, on a beige backdrop"></img>
          <p> Hello! My name is Ollie! I am a queer, (trans)genderfluid (they/them), afro-latinx 22 year old student.
                I am a budding Full Stack Software Developer, who specializes in front-end development and UI/UX design!
                I am proficient in several different coding languages and frameworks such as HTML, CSS, JavaScript,
                Node.js, React.js, Express.js, Tailwind CSS and Bootstrap.
                I am also proficient in many graphic design softwares including, Adobe Illustrator, Adobe Photoshop and
                Canva.
                On this webpage, you will find images and links to webpages and applications that I have
                created or collaborated on.
                As I grow more and more competent, I hope to add many more completed works to this online portfolio.
          </p>
          <p> If you have any questions or would like to collaborate, please don't hesitate to get in touch.</p>
        </div>
      </div>
    </section>
  );
};


export default About;