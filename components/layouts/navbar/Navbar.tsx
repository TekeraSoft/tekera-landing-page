"use client";

import Container from "@/components/shared/Container";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import darkLogo from "../../../public/images/icondark.png";
import whiteLogo from "../../../public/images/iconwhite.png";
import NavItem from "./NavItem";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger menü ikonu için ekledik
import { usePathname, useRouter } from "@/i18n/navigation";
import useThemeStore from "@/store/ThemeStore";

function Navbar() {
  const t = useTranslations("heading");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const { toggleTheme, theme } = useThemeStore();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü açma durumunu izlemek için ekledik

  const navItems = [
    {
      href: "#",
      text: t("navItems.home"),
    },
    {
      href: "#projects",
      text: t("navItems.projects"),
    },
    {
      href: "#about",
      text: t("navItems.about"),
    },
    {
      href: "#contact",
      text: t("navItems.contact"),
    },
  ];

  // locale lang changes
  const supportedLocales = ["tr", "en"];

  const changeLanguage = (lang: string) => {
    router.push(pathname, { locale: lang });
    setIsLangDropdownOpen(false);
  };

  return (
    <header className="fixed bg-body inset-x-0 top-0 z-50 py-2 sm:py-2 border-box-border lg:border-b text-heading-2  ">
      <div className="flex md:hidden">
        <div
          className={`${
            isMenuOpen ? "h-auto" : "h-0"
          } flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent lg:h-auto overflow-hidden p-1 `}
        >
          <ul
            className="border-y border-box-border lg:border-y-0 px-6 lg:px-0 
                     py-5 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 
                     text-lg text-heading-2 w-full lg:justify-center lg:items-center"
          >
            {navItems.map((item, key) => (
              <NavItem href={item.href} text={item.text} key={key} />
            ))}
          </ul>
        </div>
      </div>
      <Container className="">
        <nav className="w-full flex items-center justify-between gap-6 relative">
          {/* Logo */}

          <div className="min-w-max inline-flex items-center gap-1 relative cursor-pointer">
            <Image
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              src={theme === "dark" ? darkLogo : whiteLogo}
              alt="Tekera Teklonogy Logo"
              className="w-auto h-12 sm:h-16"
              priority
            />
          </div>

          <div className="hidden md:flex">
            <div
              className={`${
                isMenuOpen ? "h-auto" : "h-0"
              } flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto overflow-hidden p-1 transition-all duration-300`}
            >
              <ul
                className="border-t border-box-border  lg:border-t-0 px-6 lg:px-0 
                     pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-8 
                     text-lg text-heading-2 w-full lg:justify-center lg:items-center "
              >
                {navItems.map((item, key) => (
                  <NavItem href={item.href} text={item.text} key={key} />
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-max flex items-center gap-x-3">
            <div
              className="relative z-50"
              onMouseLeave={() => setIsLangDropdownOpen(false)}
            >
              <button
                className="w-8 h-7 sm:w-10 sm:h-8 text-heading-1 flex items-center justify-center border border-slate-300 rounded-md cursor-pointer  text-xs font-semibold uppercase transition duration-500"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                onMouseLeave={() => setIsLangDropdownOpen(false)}
              >
                {locale}
              </button>
              {isLangDropdownOpen && (
                <ul
                  className="absolute top-8 w-10 bg-white border border-slate-300  rounded shadow-md text-xs md:text-sm "
                  onMouseEnter={() => setIsLangDropdownOpen(true)}
                >
                  {supportedLocales.map((lang, index) => (
                    <li key={index}>
                      <button
                        onClick={() => changeLanguage(lang)}
                        className="block w-full py-1 text-black text-center rounded  transition-all duration-300 cursor-pointer hover:bg-black  hover:text-white "
                      >
                        {lang === "tr" ? "TR" : "EN"}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              onClick={toggleTheme}
              className="outline-hidden flex relative text-heading-2 rounded-full p-1 sm:p-2  border border-box-border cursor-pointer"
            >
              {theme === "dark" ? (
                <MdDarkMode className="w-5 h-5" />
              ) : (
                <CiLight className="w-5 h-5" />
              )}
            </button>

            <div className="lg:hidden flex items-center">
              <button
                className="text-heading-1 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <FaTimes className=" w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <FaBars className=" w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
