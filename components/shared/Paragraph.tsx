import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

function Paragraph({ children, className = "" }: ParagraphProps) {
  return (
    <p className={`text-heading-3 md:text-lg  ${className}`}>{children}</p>
  );
}

export default Paragraph;
