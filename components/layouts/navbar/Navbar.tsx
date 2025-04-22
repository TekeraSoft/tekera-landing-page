"use client";

import Container from "@/components/shared/Container";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "../../../public/assets/icon.svg";
import NavItem from "./NavItem";
import BtnLink from "@/components/ui/BtnLink";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import { usePathname } from "@/i18n/navigation";
import useThemeStore from "@/store/ThemeStore";

function Navbar() {
  const t = useTranslations("heading");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const { toggleTheme, theme } = useThemeStore();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const navItems = [
    {
      href: "#",
      text: t("navItems.home"),
    },
    {
      href: "#services",
      text: t("navItems.services"),
    },
    {
      href: "#about-us",
      text: t("navItems.about"),
    },
    {
      href: "#features",
      text: t("navItems.features"),
    },
  ];

  // locale lang changes
  const supportedLocales = ["tr", "en"];

  const changeLanguage = (lang: string) => {
    router.push(pathname, { locale: lang });
    setIsLangDropdownOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex items-center justify-between gap-6 relative">
          {/* Logo */}
          <div className="min-w-max inline-flex items-center gap-1 relative">
            <Image
              src={logo}
              alt="Tekera Teklonogy Logo"
              width={50}
              height={50}
              priority
            />
            <div className="inline-flex text-lg font-semibold text-heading-1">
              {t("logoName")}
            </div>
          </div>

          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent 
                border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden p-1"
          >
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                     pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 
                     text-lg text-heading-2 w-full lg:justify-center lg:items-center"
            >
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} />
              ))}
            </ul>
            <div
              className="lg:min-w-max flex items-center sm:w-max w-full pb-6 
                      lg:pb-0 border-b border-box-border lg:border-0
                      px-6 lg:px-0"
            >
              <BtnLink text="Get Started" href="#cta" />
            </div>
          </div>
          <div className="min-w-max flex items-center gap-x-3">
            <div
              className="relative z-50"
              onMouseLeave={() => setIsLangDropdownOpen(false)}
            >
              <button
                className="w-10 h-8  text-heading-1 flex items-center justify-center border border-slate-300  rounded-md  cursor-pointer text-xs font-semibold uppercase transition duration-500  "
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
                  {supportedLocales.map((lang, index) => (
                    <li key={index}>
                      <button
                        onClick={() => changeLanguage(lang)}
                        className="block w-full  py-1 text-black text-center rounded  transition-all duration-300 cursor-pointer"
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
              className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
            >
              {theme === "dark" ? (
                <MdDarkMode className="w-5 h-5 " />
              ) : (
                <CiLight className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
