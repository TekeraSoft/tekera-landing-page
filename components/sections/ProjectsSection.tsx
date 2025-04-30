"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTshirt } from "react-icons/fa";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Image from "next/image";
import BtnLink from "../ui/BtnLink";
import { useTranslations } from "next-intl";
import { ImCart } from "react-icons/im";

const ProjectsSection = () => {
  const t = useTranslations("Projects");
  gsap.registerPlugin(ScrollTrigger);

  const projects = [
    {
      id: 1,
      name: t("project1.name"), // Dinamik olarak gelen proje adı
      description: t("project1.description"), // Dinamik olarak gelen açıklama
      image: "/images/arzuamber.png", // Görsel yolu
      icon: <FaTshirt className="text-3xl text-teal-500" />,
      link: "https://arzuamber.com", // örnek link
      comingSoon: false,
    },
    {
      id: 2,
      name: t("project2.name"), // Dinamik olarak gelen proje adı
      description: t("project2.description"), // Dinamik olarak gelen açıklama
      image: "/images/coming-soon2.jpg", // Bulanık ya da inşaat temalı bir görsel
      icon: <ImCart className="text-2xl text-teal-400" />,
      link: "#",
      comingSoon: true,
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      "#projects",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: "#projects", start: "top 80%" },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      className="relative h-screen flex flex-col justify-center items-center mt-32 md:mt-0"
    >
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-400 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-700 opacity-10 rounded-full blur-3xl" />
      </div>

      <Container className="text-center ">
        <h2 className="text-4xl font-bold text-heading-1 mb-4">{t("head")}</h2>
        <Paragraph>{t("paragraph")}</Paragraph>
      </Container>

      <Container className="grid grid-cols-1 md:grid-cols-2  gap-10  mt-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-start"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={400}
              height={250}
              className="rounded-xl object-cover w-full h-80 mb-4"
            />
            <h3 className="flex justify-center items-center gap-2 text-xl font-semibold mb-2 text-white text-heading-3">
              <div>{project.icon}</div> {project.name}
            </h3>
            <p className="text-sm text-white/80 mb-4 text-heading-3">
              {project.description}
            </p>

            {!project.comingSoon ? (
              <BtnLink
                blank
                href={project.link}
                text={t("BtnText")}
                claassName="mt-auto inline-flex items-center text-teal-400 hover:text-violet-400 transition font-medium"
              />
            ) : (
              <div className="text-center text-xs sm:text-sm bg-primary px-2 py-2 rounded-lg text-white mt-2">
                This project is currently under development. Stay tuned for
                updates!
              </div>
            )}
          </div>
        ))}
      </Container>
    </section>
  );
};

export default ProjectsSection;
