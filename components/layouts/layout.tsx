import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col w-full h-ull">
      <Navbar />
      <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
