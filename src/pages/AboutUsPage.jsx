import React from "react";
import "../App.css"; // Ensure the styles are saved in App.css

const AboutUsPage = () => {
  return (
    <div className="about-page">
      <h1>About IronPages App</h1>
      <section className="project-description">
        <p>
          IronPages App is a book library application designed to help users
          manage and explore their favorite books. This project was created as
          part of a collaborative effort to learn and apply modern web
          development practices using React, CSS, and a JSON server backend.
        </p>
      </section>
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="developer-profiles">
          <div className="developer">
            <h3>Jennifer</h3>
            <a
              href="https://github.com/refinejcode49"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="developer">
            <h3>Enrique</h3>
            <a
              href="https://github.com/ecastanedam"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
