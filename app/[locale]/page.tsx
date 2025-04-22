"use client";

import BackgroundContainer from "@/components/containers/BackgroundContainer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
