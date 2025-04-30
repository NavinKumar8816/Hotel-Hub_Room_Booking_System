import { useState } from "react";

// eslint-disable-next-line react/prop-types
function EyeTogglePassword({ name, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-container" style={{ position: "relative" }}>
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          paddingRight: "30px", // Space for the eye icon
        }}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default EyeTogglePassword;
