import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Popup = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-header">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        {title && <div className="popup-title">{title}</div>}
        <div className="popup-body">
            {
                children
            }
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    const popupRoot = document.getElementById("popup-root");

    if(!popupRoot) return <></>;

    return ReactDOM.createPortal(
      modalContent,
      popupRoot
    );
  } else {
    return null;
  }
};

export default Popup;