"use client";

import { useEffect } from "react";
import Container from "../shared/Container";
import {
  FaHandshake,
  FaUsers,
  FaRegLightbulb,
  FaLaptopCode,
} from "react-icons/fa";
import Paragraph from "../shared/Paragraph";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

export const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const t = useTranslations("About");

  useEffect(() => {
    gsap.fromTo(
      "#about",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 150,
        duration: 1,
      }
    );
  }, []);

  const nelerYapiyoruz = [
    {
      icon: <FaHandshake className="text-primary" />,
      text: t("WhatWeDo.company"),
    },
    {
      icon: <FaLaptopCode className="text-primary" />,
      text: t("WhatWeDo.webMob"),
    },
    {
      icon: <FaUsers className="text-primary" />,
      text: t("WhatWeDo.team"),
    },
    {
      icon: <FaRegLightbulb className="text-primary" />,
      text: t("WhatWeDo.creative"),
    },
    {
      icon: <FaLaptopCode className="text-primary" />,
      text: t("WhatWeDo.solution"),
    },
  ];

  const degerlerimiz = [
    {
      icon: <FaHandshake className="text-primary" />,
      text: t("OurValues.value1"),
    },
    {
      icon: <FaHandshake className="text-primary" />,
      text: t("OurValues.value2"),
    },
    {
      icon: <FaHandshake className="text-primary" />,
      text: t("OurValues.value3"),
    },
    {
      icon: <FaHandshake className="text-primary" />,
      text: t("OurValues.value4"),
    },
  ];

  return (
    <section
      id="about"
      className="relative flex  text-foreground dark:text-foreground-dark md:mt-0"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 opacity-60 rotate-30 blur-xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-teal-600 to-cyan-500 opacity-30 rounded-full blur-xl" />
      </div>

      <Container className="flex flex-col h-screen w-full justify-center items-center gap-6 lg:gap-10">
        <div className="text-center lg:text-left w-full">
          <h2 className="text-xl md:text-3xl font-semibold mb-4 text-heading-1">
            {t("title")}

            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-violet-400">
              {t("titleRgb")}
            </span>
          </h2>
          <Paragraph className="text-xs md:text-sm text-start mb-6">
            {t("paragraph")}
          </Paragraph>

          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
              {t("WhatWeDo.title")}
            </h3>
            <ul className="space-y-4 text-left">
              {nelerYapiyoruz.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  {item.icon}
                  <span className="text-sm md:text-base text-heading-3">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
              {t("visionTitle")}
            </h3>
            <Paragraph className="text-left text-xs md:text-sm lg:text-base mb-6">
              {t("visionText")}
            </Paragraph>
          </div>

          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
              {t("OurValues.title")}
            </h3>
            <ul className="space-y-4 text-left">
              {degerlerimiz.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  {item.icon}
                  <span className="text-sm md:text-base text-heading-3">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
