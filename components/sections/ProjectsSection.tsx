"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTools, FaTshirt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Image from "next/image";
import Link from "next/link";
import BtnLink from "../ui/BtnLink";

const projects = [
  {
    id: 1,
    name: "ArzuAmber",
    description: "Kadın modasına özel modern bir e-ticaret platformu.",
    image: "/images/arzuamber.png", // Görsel yolu
    icon: <FaTshirt className="text-3xl text-teal-500" />,
    link: "https://arzuamber.com", // örnek link
  },
  {
    id: 2,
    name: "Yeni Proje",
    description: "Yeni projemiz çok yakında burada yer alacak!",
    image: "/images/coming-soon.jpg", // Bulanık ya da inşaat temalı bir görsel
    icon: <FaTools className="text-3xl text-gray-400" />,
    link: "#",
    comingSoon: true,
  },
];

const ProjectsSection = () => {
  gsap.registerPlugin(ScrollTrigger);

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
      className="relative h-[80vh] flex flex-col justify-center items-center "
    >
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-400 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-700 opacity-10 rounded-full blur-3xl" />
      </div>

      <Container className="text-center ">
        <h2 className="text-4xl font-bold text-heading-1 mb-4">Projelerimiz</h2>
        <Paragraph>
          Tekera Teknoloji olarak farklı sektörlere özel modern çözümler
          geliştiriyoruz.
        </Paragraph>
      </Container>

      <Container className="grid grid-cols-1 md:grid-cols-2  gap-10">
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
            <BtnLink
              blank
              href={project.link}
              text="Siteyi Gör"
              claassName="mt-auto inline-flex items-center text-teal-400 hover:text-violet-400 transition font-medium"
            />
          </div>
        ))}
      </Container>
    </section>
  );
};

export default ProjectsSection;
