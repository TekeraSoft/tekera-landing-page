"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import { FiCheckCircle } from "react-icons/fi";
import { useTranslations } from "next-intl";

export const DigitalTransformationSection = () => {
  const t = useTranslations("DigitalTransformation");
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      "#digital-transformation",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 150,
        duration: 1,
        scrollTrigger: {
          trigger: "#digital-transformation",
          start: "top 80%",
          toggleActions: "play none none reverse", // hem aşağı hem yukarı tetiklenir
        },
      }
    );
  }, []);

  return (
    <section
      id="digital-transformation"
      className="relative py-20 bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark"
    >
      {/* Arka Plan Efekti */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 opacity-30 rotate-45 blur-xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-teal-400 to-cyan-500 opacity-20 rounded-full blur-xl" />
      </div>

      <Container className="flex flex-col lg:flex-row items-center gap-16">
        {/* Sol: Görsel */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/4.jpg"
            alt="Dijital Dönüşüm"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Sağ: İçerik */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-heading-1">
            {t("title")}

            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
              {t("titleRgb")}
            </span>
          </h2>
          <Paragraph>{t("paragraph")}</Paragraph>

          <ul className="text-muted-foreground list-disc pl-5 space-y-2 text-left text-heading-3">
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-heading-2" />
              {t("check1")}
            </li>
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-heading-2" />
              {t("check2")}
            </li>
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-heading-2" />
              {t("check3")}
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
