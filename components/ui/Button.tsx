import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  claassName?: string;
  onClick?: () => void;
}

function Button({ children, onClick, claassName }: ButtonProps) {
  return (
    <button
      className={`${claassName}  px-5 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent dark:bg-teal-600`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
