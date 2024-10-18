import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ isVisible, onClose }) => {
  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2>Payment Method added Successfully!</h2>
          <div className="popup-animation">
           
            <img src="/popup.png" alt="Celebration" />
          </div>
          <button className="popup-button" onClick={onClose}>
            Okay
          </button>
        </div>
      </div>
    )
  );
};

const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000); 
  };

  return (
    <div className="App">
      <button className="show-popup-button" onClick={showPopup}>
        Add Payment Method
      </button>

      <Popup isVisible={isPopupVisible} onClose={() => setPopupVisible(false)} />
    </div>
  );
};

export default App;
