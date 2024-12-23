import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const ContainerWithVideo = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const navigate = useNavigate();

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Redirect to the register page
  };

  return (
    <div className="main-containerII">
      {/* Container for Row 1 */}
      <div className="rowI-container">
        <div className="rowI">
          <h1>
            Unlock <span> your future </span>with <span> us</span>
          </h1>
          <p>
            Join 100 Plus Academy’s versatile coaching programs, offering both
            offline and online batches to suit your schedule and learning style.
            Experience top-quality education from the comfort of your home or
            in-person.
          </p>
          <button className="register-button" onClick={handleRegisterClick}>
            Register Now
          </button>
        </div>
      </div>

      {/* Container for Row 2 */}
      <div className="rowII-container">
        <div className="video-container">
          {!playVideo ? (
            <div className="video-placeholder" onClick={handlePlayVideo}>
              <div className="play-button">▶</div>
            </div>
          ) : (
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/znFt1gO-ROE"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContainerWithVideo;
