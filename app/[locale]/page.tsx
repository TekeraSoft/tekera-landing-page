"use client";

import BackgroundContainer from "@/components/containers/BackgroundContainer";
import MainLayout from "@/components/layouts/layout";
import Hero from "@/components/sections/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
