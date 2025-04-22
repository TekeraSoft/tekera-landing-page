"use client";

import { usePathname } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // locale lang changes
  const supportedLocales = ["tr", "en"];

  const changeLanguage = (lang: string) => {
    router.push(pathname, { locale: lang });
    setIsLangDropdownOpen(false);
  };

  return <div>Navbar</div>;
}

export default Navbar;

{
  /* ul className="hidden lg:flex items-center justify-center gap-x-6">
           <li
             className="relative z-50"
             onMouseLeave={() => setIsLangDropdownOpen(false)}
           >
             <button
               className="w-10 h-8 flex items-center justify-center border border-slate-300  rounded-md text-secondary text-xs font-semibold uppercase transition duration-500 hover:bg-secondary hover:text-white"
               onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
               onMouseLeave={() => setIsLangDropdownOpen(false)}
               onMouseEnter={() => setIsLangDropdownOpen(true)}
             >
               {locale}
             </button>
             {isLangDropdownOpen && (
               <ul
                 className=" absolute  top-8 w-10  bg-white border rounded shadow-md text-sm"
                 onMouseEnter={() => setIsLangDropdownOpen(true)}
               >
                 {supportedLocales.map((lang) => (
                   <li key={lang}>
                     <button
                       onClick={() => changeLanguage(lang)}
                       className="block w-full  py-1 text-center rounded text-secondary  hover:bg-secondary hover:text-white  transition-all duration-300"
                     >
                       {lang === "tr" ? "TR" : "EN"}
                     </button>
                   </li>
                 ))}
               </ul>
             )}
           </li>*/
}
