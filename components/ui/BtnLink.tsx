import React from "react";

interface BtnLinkProps {
  href: string;
  text: string;
  claassName?: string;
  blank?: boolean;
}

function BtnLink({ href, text, claassName, blank }: BtnLinkProps) {
  return (
    <a
      target={blank ? "_blank" : undefined}
      href={href}
      className={`px-6 py-2 bg-primary rounded-full outline-none relative overflow-hidden dark:bg-teal-600 cursor-pointer hover:scale-105 transform transition duration-300   ${claassName}`}
    >
      <span className="relative z-10 text-white"> {text}</span>
    </a>
  );
}

export default BtnLink;
