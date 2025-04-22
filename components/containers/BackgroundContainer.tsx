import React from "react";

interface BackgroundContainerProps {
  children: React.ReactNode;
}

function BackgroundContainer({ children }: BackgroundContainerProps) {
  return (
    <div className="min-h-screen w-full bg-linear-to-t from-primary to-black">
      {children}
    </div>
  );
}

export default BackgroundContainer;
