"use client";

import React, { useEffect } from "react";
import FeatureCard from "../cards/FeaturedCard";
import Container from "../shared/Container";
import {
  FaBrain,
  FaCloudSun,
  FaCogs,
  FaLightbulb,
  FaLock,
  FaRocket,
} from "react-icons/fa";
import gsap from "gsap";

function FeaturedCards() {
  useEffect(() => {
    gsap.fromTo(
      "#fatured-cards",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#fatured-cards",
          start: "top 80%",
          toggleActions: "play none none reverse", // hem aşağı hem yukarı tetiklenir
        },
      }
    );
  }, []);

  const features = [
    {
      icon: FaBrain,
      title: "Dijital Zekâ",
      description: "Veriyle yönlendirilen kararlarla işinizi ileriye taşıyın.",
    },
    {
      icon: FaCloudSun,
      title: "Akıllı Bulut",
      description: "Her yerden erişim, maksimum performans ve esneklik.",
    },
    {
      icon: FaLock,
      title: "Güçlü Güvenlik",
      description: "Verilerinizi en yeni teknolojilerle koruyun.",
    },
    {
      icon: FaCogs,
      title: "Otomasyon Gücü",
      description: "Tekrarlayan işleri otomatikleştirerek zaman kazanın.",
    },
    {
      icon: FaRocket,
      title: "Hızlı Gelişim",
      description: "Projelerinizi kısa sürede başarıya ulaştırın.",
    },
    {
      icon: FaLightbulb,
      title: "Yaratıcılık",
      description: "Fikirlerinizi dijital çözümlerle hayata geçirin.",
    },
  ];

  return (
    <div id="fatured-cards" className="flex justify-center items-center">
      <Container className="relative pb-32">
        {/* Arka plan tasarımı */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -0  right-0 w-[250px] h-[350px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-40 rotate-45 blur-xl" />
          <div className="absolute top-20bottom  -left-20  w-[300px] h-[200px] bg-gradient-to-tr from-teal-400 to-cyan-500 opacity-30 rounded-full blur-2xl " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default FeaturedCards;
