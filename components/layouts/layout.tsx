import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return <div className="flex flex-col w-full h-ull">{children}</div>;
}

export default MainLayout;
