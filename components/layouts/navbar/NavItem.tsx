import React from "react";

interface NavItemsProps {
  href: string;
  text: string;
}

function NavItems({ href, text }: NavItemsProps) {
  return (
    <li>
      <a
        className="duration-300 font-medium ease-linear hover:text-primary py-3"
        href={href}
      >
        {text}
      </a>
    </li>
  );
}

export default NavItems;
