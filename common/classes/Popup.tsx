import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Popup = ({ show, onClose}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const popupContent = show ? (
    <div className="popup-overlay" onClick={handleCloseClick}>
      <div className="popup" onClick={(e)=> {e.stopPropagation()}}>
        <div className="popup-header">
        </div>
        <div className="popup-body"></div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    const popupRoot = document.getElementById("popup-root");

    if(!popupRoot) return <></>;

    return ReactDOM.createPortal(
      popupContent,
      popupRoot
    );
  } else {
    return null;
  }
};

export default Popup;