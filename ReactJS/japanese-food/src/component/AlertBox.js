import React, { useState } from "react";

function AlertBox() {
  const [message, setMessage] = useState("Alert message!");
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        width: "200px",
      }}
    >
      {message}
    </div>
  );
}

export default AlertBox;
