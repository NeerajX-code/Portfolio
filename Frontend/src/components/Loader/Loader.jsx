import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        {/* Animated logo/brand initial */}
        <div className="loader-logo">
          <span className="logo-text">N</span>
          <div className="logo-ring"></div>
          <div className="logo-ring delay-1"></div>
          <div className="logo-ring delay-2"></div>
        </div>
        
        {/* Loading text with dots animation */}
        <div className="loader-text">
          <span>Loading</span>
          <span className="dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="loader-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
