import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Popup = ({ show, onClose, children}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const popupContent = show ? (
    <>
      <div className="popup-overlay" onClick={handleCloseClick}></div>
      <div className="popup">
        <div className="popup-body">
          {
            children
          }
        </div>
      </div>
    </>
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