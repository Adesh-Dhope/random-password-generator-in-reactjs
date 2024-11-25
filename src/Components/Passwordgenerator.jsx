import React, { useState } from "react";
import "./Passwordgenerator.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div className="password-generator-container">
      <h1>Random Password Generator</h1>
      <div className="password-display">
        <input
          type="text"
          value={password}
          readOnly
          className="password-input"
        />
        <button onClick={generatePassword} className="generate-btn">
          Generate Password
        </button>
      </div>
      <div className="length-controls">
        <label>Length: {length}</label>
        <input
          type="range"
          min="8"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="length-slider"
        />
      </div>
    </div>
  );
};

export default PasswordGenerator;
