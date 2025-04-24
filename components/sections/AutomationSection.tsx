"use client";

import { useEffect } from "react";
import Container from "../shared/Container";
import {
  FaCogs,
  FaClock,
  FaRegCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";
import Paragraph from "../shared/Paragraph";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const AutomationSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      "#automation",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: "#automation", start: "top 80%" },
      }
    );

    gsap.utils.toArray(".feature-card").forEach((el: any, i: number) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          scrollTrigger: { trigger: el, start: "top 90%" },
        }
      );
    });
  }, []);

  return (
    <section
      id="automation"
      className="relative flex justify-center items-center bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark py-20"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-40 rotate-45 blur-xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-teal-400 to-cyan-500 opacity-30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-transparent via-white/5 to-transparent opacity-30" />
      </div>

      <Container className="flex flex-col justify-start items-center gap-10 lg:gap-16 w-full">
        <div className="w-full flex items-center justify-center">
          <FaCogs className="text-5xl text-primary" />
        </div>

        <div className="flex flex-col text-center lg:text-left w-full max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-heading-1">
            Kendi Projelerimizle Yüksek Performanslı Akıllı Otomasyon
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-violet-400">
              Çözümlerimiz
            </span>
          </h2>
          <Paragraph className="text-sm">
            Biz, kendi projelerimizde güçlü otomasyon çözümleri geliştirerek iş
            süreçlerini daha verimli hale getirmeye çalışıyoruz. Zaman
            kazandıran, hataları azaltan ve maliyetleri kontrol altına alan
            sistemlerimizle, işlerimizi en verimli şekilde yönetmeye
            odaklanıyoruz.
          </Paragraph>
        </div>

        {/* Projelerimiz */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-6">
          <div className="feature-card p-6 bg-white/10 rounded-lg backdrop-blur shadow-md text-center">
            <FaClock className="text-3xl mx-auto text-teal-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-heading-3">
              Zamanı Verimli Kullanalım
            </h3>
            <Paragraph className="text-sm">
              Geliştirdiğimiz otomasyon çözümleri ile projelerimizde zamanı en
              verimli şekilde kullanıyoruz. İş süreçlerini hızlandırarak her
              dakikayı daha değerli hale getiriyoruz.
            </Paragraph>
          </div>
          <div className="feature-card p-6 bg-white/10 rounded-lg backdrop-blur shadow-md text-center">
            <FaRegCheckCircle className="text-3xl mx-auto text-purple-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-heading-3">
              Hataları Azaltmak
            </h3>
            <Paragraph className="text-sm">
              Projelerimizde otomasyon sayesinde hataları minimize ediyor ve
              süreçlerin doğruluğunu artırıyoruz. Hem güvenliği sağlıyor hem de
              verimliliği arttırıyoruz.
            </Paragraph>
          </div>
          <div className="feature-card p-6 bg-white/10 rounded-lg backdrop-blur shadow-md text-center">
            <FaMoneyBillWave className="text-3xl mx-auto text-pink-400 mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-heading-3">
              Maliyetleri Kontrol Altına Alalım
            </h3>
            <Paragraph className="text-sm">
              Kendi projelerimizde maliyetleri azaltmak için verimli iş
              süreçleri geliştiriyoruz. Düşük bütçelerle yüksek performans elde
              etmenin yollarını arıyoruz.
            </Paragraph>
          </div>
        </div>

        {/* Proje Sonuçları */}
        <div className="flex flex-row gap-6 justify-center items-center mt-10">
          <div className="text-center">
            <h4 className="text-xl md:text-3xl font-bold text-teal-400">%45</h4>
            <p className="text-heading-3">Zaman Tasarrufu Sağladık</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl md:text-3xl font-bold text-purple-400">
              %60
            </h4>
            <p className="text-heading-3">Hataları Azalttık</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl md:text-3xl font-bold text-pink-400">%30</h4>
            <p className="text-heading-3">Maliyet Azalttık</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
