import { ButtonProps } from "@/interface";
import React from "react";

interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: "blue" | "green" | "orange";
}

const Button: React.FC<ButtonProps> = ({
  action,
  buttonLabel,
  buttonBackgroundColor,
}) => {
  const bgColor = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    orange: "bg-orange-500 hover:bg-orange-600",
  };

  return (
    <button
      onClick={action}
      className={`text-white px-6 py-3 rounded-md font-semibold transition duration-300 ${bgColor[buttonBackgroundColor]}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
