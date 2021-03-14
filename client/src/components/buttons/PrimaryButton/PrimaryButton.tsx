import React from "react";
import "../Button.styles.scss";

interface ButtonProps {
  text: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text }: ButtonProps) => {
  const onTest = (): void => {
    console.log("TEST");
  };
  return (
    <button className="button-primary" onClick={onTest}>
      <div className="left-right"></div>
      <span>{text}</span>
    </button>
  );
};

export default PrimaryButton;
