"use client";

import { FaLightbulb, FaRobot, FaRocket, FaCogs } from "react-icons/fa";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

export const InnovationSection = () => {
  const t = useTranslations("Innovation");
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".innovation-card", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#innovation",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      "#innovation",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#innovation",
          start: "top 80%",
          toggleActions: "play none none reverse", // hem aşağı hem yukarı tetiklenir
        },
      }
    );
  }, []);

  return (
    <section
      id="innovation"
      className="relative py-10 text-white overflow-hidden"
    >
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-32 left-20 w-40 h-40 bg-teal-800 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-500 opacity-40 rounded-full blur-xl animate-spin-slow" />
      </div>

      <Container className="flex flex-col w-full justify-center items-center gap-10">
        <div className="w-full flex justify-center items-center">
          <FaLightbulb className="text-6xl text-white drop-shadow-lg text-heading-1" />
        </div>

        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white text-heading-1">
            {t("title")}

            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-violet-400">
              {t("titleRgb")}
            </span>
          </h2>
          <Paragraph className="text-sm md:text-base">
            {t("paragraph")}
          </Paragraph>
        </div>

        {/* Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mt-10">
          {[
            { icon: <FaLightbulb />, title: t("icontitle1") },
            { icon: <FaCogs />, title: t("icontitle2") },
            { icon: <FaRocket />, title: t("icontitle3") },
            { icon: <FaRobot />, title: t("icontitle4") },
          ].map((item, index) => (
            <div
              key={index}
              className="innovation-card flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl py-7 px-2 text-center text-white shadow-lg transition-transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
