// Notification.js
import React, { useState } from "react";
import "./Notification.css";

function Notification() {
  const [showNotification, setShowNotification] = useState(true);

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    showNotification && (
      <div className="notification" onClick={closeNotification}>
        Something happened! Click to dismiss.
      </div>
    )
  );
}

export default Notification;
