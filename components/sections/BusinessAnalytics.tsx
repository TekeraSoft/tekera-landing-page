"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import { FiCheckCircle } from "react-icons/fi";
import { useTranslations } from "next-intl";

export const BusinessAnalyticsSection = () => {
  const t = useTranslations("BusinessAnalytics");
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      "#business-analytics",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#business-analytics",
          start: "top 80%",
          toggleActions: "play none none reverse", // hem aşağı hem yukarı tetiklenir
        },
      }
    );
  }, []);

  return (
    <section
      id="business-analytics"
      className="relative  bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark"
    >
      {/* Arka Plan Efekti */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 opacity-30 rotate-45 blur-xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tr from-amber-400 to-orange-500 opacity-20 rounded-full blur-xl" />
      </div>

      <Container className="flex flex-col lg:flex-row-reverse items-center gap-16">
        {/* Sağ: Görsel */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/3.jpg"
            alt="İş Zekası ve Analitik"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Sol: İçerik */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <div className="text-2xl md:text-4xl font-bold text-heading-1">
            {t("title")}

            <span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-violet-400">
              {t("titleRgb")}
            </span>
            <h3
              className="text-lg
           md:text-2xl font-semibold text-muted-foreground text-heading-2"
            >
              {t("title2")}
            </h3>
          </div>

          <Paragraph>{t("paragraph")}</Paragraph>

          <ul className="text-muted-foreground list-disc pl-5 space-y-2 text-left text-heading-2">
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
