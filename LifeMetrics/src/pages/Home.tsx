import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="background-video">
        {/* Background video or GIF */}
        <video autoPlay loop muted>
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="home-content">
        <h1>Welcome to LifeMetrics</h1>
        <p>Your Personal Health Status Tracker</p>
        <button className="start-tracking-button">Start Tracking!</button>
      </div>
    </div>
  );
};

export default Home;