"use client";

import Container from "@/components/shared/Container";
import Image from "next/image";
import React from "react";
import darkLogo from "../../../public/images/icondark.png";
import whiteLogo from "../../../public/images/iconwhite.png";
import { useTranslations } from "next-intl";
import NavItems from "../navbar/NavItem";
import {
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import useThemeStore from "@/store/ThemeStore";

function Footer() {
  const t = useTranslations();
  const { theme } = useThemeStore();

  const navItems = [
    {
      href: "#",
      text: t("heading.navItems.home"),
    },
    {
      href: "#projects",
      text: t("heading.navItems.projects"),
    },
    {
      href: "#about-us",
      text: t("heading.navItems.about"),
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/company/tekera-teknoloji/posts/?feedView=all",
      label: "LinkedIn",
      class: "hover:text-blue-700",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/tekera_teknoloji/?igsh=MXdqNGJvMDJxZHBhbw%3D%3D#",
      label: "Instagram",
      class: "hover:text-pink-500",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative pt-20 pb-10 bg-box-bg text-heading-1 rounded-t-3xl "
    >
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-72 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 opacity-45 rotate-45 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-teal-400 to-cyan-500 opacity-50 rounded-full blur-2xl" />
      </div>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo ve Hakkımızda */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={theme === "dark" ? darkLogo : whiteLogo}
                alt="company logo"
                className="w-20 h-20"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footer.companyDesc")}
            </p>
          </div>
          {/* Navigasyon */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasyon</h4>
            <ul className="flex flex-col gap-3">
              {navItems.map((item, index) => (
                <NavItems key={index} href={item.href} text={item.text} />
              ))}
            </ul>
          </div>
          {/* İletişim ve Sosyal Medya */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim</h4>
            <div className="flex flex-col gap-5">
              <p className="flex items-center gap-2 text-sm ">
                <FaEnvelope className="text-primary text-xl" />
                info@tekeratechnology.com
              </p>
              <p className="flex items-center gap-2 text-sm ">
                <FaPhoneAlt className="text-primary text-xl" /> +90 (534) 268 83
                85
              </p>

              <p className="flex items-start gap-2 text-sm  md:max-w-xs">
                <FaMapMarkerAlt className="text-primary text-2xl md:text-3xl" />
                Kışla, 40. Sk. Kaya Apt No: 8A Kat 4 Daire 7, 07040
                Muratpaşa/Antalya
              </p>
              <div className="flex gap-4 text-primary text-lg">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`${link.class} text-2xl transition-transform hover:scale-105`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Telif hakkı */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
