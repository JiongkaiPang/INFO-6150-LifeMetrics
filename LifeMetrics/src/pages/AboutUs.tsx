import React from 'react';
import './InfoPage.css';

const AboutUs: React.FC = () => {
  return (
    <div className="info-page-container">
      <div className="info-header">
        <h1>About Us</h1>
      </div>
      <div className="info-content">
        <p>
          Founded with a mission to promote health and wellness, LifeMetrics empowers individuals
          to take control of their health data. Our team is dedicated to creating tools that make
          it easy to monitor, track, and understand personal health trends. Join us on our journey
          to make well-being accessible and achievable for everyone.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;