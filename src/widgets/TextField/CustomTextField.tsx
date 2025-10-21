import React from "react";
import "./CustomTextField.scss";

interface CustomTextFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  inputMode,
  maxLength,
  className,
  startIcon,
  endIcon,
}) => {
  return (
    <div className={`custom-text-field ${className || ""}`}>
      <label className="custom-text-label">{label}</label>
      <div className="custom-text-input-container">
        {startIcon && <span className="custom-text-icon start-icon">{startIcon}</span>}
        <input
          className="custom-text-input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          inputMode={inputMode}
          maxLength={maxLength}
          spellCheck={false}
          autoComplete="off"
        />
        {endIcon && <span className="custom-text-icon end-icon">{endIcon}</span>}
      </div>
    </div>
  );
};

export default CustomTextField;