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

export const AboutSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      "#about",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);
  const vizyonumuz = [
    "Tekera olarak, teknolojiyi herkes için erişilebilir hale getirmeyi hedefliyoruz. Sürekli olarak gelişen ve değişen dünyaya ayak uydurabilen, yenilikçi projeler üreterek her sektörde sürdürülebilir çözümler sunmayı amaçlıyoruz. Amacımız, her işletmeye katma değer sağlayarak büyümelerine yardımcı olmak ve sektörlerinde lider olmalarını desteklemektir.",
  ];

  const nelerYapiyoruz = [
    {
      icon: <FaHandshake className="text-primary" />,
      text: "İşletmelerin verimliliğini artıracak projeler geliştiriyoruz.",
    },
    {
      icon: <FaLaptopCode className="text-primary" />,
      text: "Web ve mobil uygulamalarla müşterilere kolay ve hızlı çözümler sunuyoruz.",
    },
    {
      icon: <FaUsers className="text-primary" />,
      text: "Takım çalışmasıyla projelerin her aşamasında etkili bir iletişim sağlıyoruz.",
    },
    {
      icon: <FaRegLightbulb className="text-primary" />,
      text: "Yaratıcı ve yenilikçi projelerle sektöre değer katacak çözümler üretiyoruz.",
    },
    {
      icon: <FaLaptopCode className="text-primary" />,
      text: "Yazılım çözümleri ile işletmelerin dijital altyapılarını güçlendiriyoruz.",
    },
  ];

  const degerlerimiz = [
    {
      icon: <FaHandshake className="text-primary" />,
      text: "Güven: Müşterilerimize güvenilir, kaliteli ve doğru çözümler sunmak.",
    },
    {
      icon: <FaHandshake className="text-primary" />,
      text: "İnovasyon: Sürekli yenilikçi projelerle sektörlerde fark yaratmak.",
    },
    {
      icon: <FaHandshake className="text-primary" />,
      text: "Müşteri Odaklılık: Müşterilerimizin ihtiyaçlarına en iyi şekilde çözüm sağlamak.",
    },
    {
      icon: <FaHandshake className="text-primary" />,
      text: "Sürdürülebilirlik: Çevre dostu ve sürdürülebilir iş süreçleriyle geleceğe yatırım yapmak.",
    },
  ];
  return (
    <section
      id="about"
      className="relative flex  text-foreground dark:text-foreground-dark"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 opacity-60 rotate-30 blur-xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-teal-600 to-cyan-500 opacity-30 rounded-full blur-xl" />
      </div>

      <Container className="flex flex-col h-screen w-full justify-center items-center gap-6 lg:gap-10">
        <div className="text-center lg:text-left w-full">
          <h2 className="text-xl md:text-3xl font-semibold mb-4 text-heading-1">
            Biz Kimiz
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-violet-400">
              Tekera Teknoloji
            </span>
          </h2>
          <Paragraph className="text-xs md:text-sm text-start mb-6">
            Tekera, işletmelerin dijital dönüşümüne öncülük eden bir teknoloji
            firmasıdır. Teknolojik yeniliklerimizle iş süreçlerinizi daha
            verimli hale getiriyoruz.
          </Paragraph>

          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
              Neler Yapıyoruz?
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
              Vizyonumuz
            </h3>
            <Paragraph className="text-left text-xs md:text-sm lg:text-base mb-6">
              {vizyonumuz}
            </Paragraph>
          </div>

          <div className="mt-8">
            <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">
              Değerlerimiz
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
