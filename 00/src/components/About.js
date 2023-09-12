import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello! I'm [Your Name], a passionate web developer with a keen
            interest in creating user-friendly and visually appealing web
            applications.
          </p>
          <p>
            I have [X] years of experience in web development and have worked
            on a variety of projects ranging from [mention your specialties].
          </p>
          <p>
            When I'm not coding, you can find me [mention your hobbies or
            interests].
          </p>
          <p>
            Feel free to explore my portfolio to see some of the projects I've
            worked on. If you have any questions or would like to collaborate,
            please don't hesitate to <a href="#contact">get in touch</a>.
          </p>
        </div>
      </div>
    </section>
  );
};


export default About;