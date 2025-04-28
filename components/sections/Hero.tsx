import React from "react";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-[70vh] mt-32 sm:mt-24 md:mt-52 lg:mt-32 flex justify-center items-center">
      <Container className="flex flex-col lg:flex-row gap-5 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl opacity-60 lg:opacity-95 lg:block bg-gradient-to-r from-teal-600 to-violet-400 blur-xl hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl">
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            {t("title")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-violet-400 ml-2">
              {t("titleRgb")}
            </span>
          </h1>
          <Paragraph className="mt-3 md:mt-8 text-xs text-start ">
            {t("paragraph")}
          </Paragraph>
        </div>
        <div className="flex flex-1 lg:w-1/2 h-auto relative lg:max-w-none lg:mx-0 mx-8 md:mx-auto max-w-3xl justify-center items-center">
          <div className="relative w-96 h-40 md:h-96">
            <Image
              src="/images/2.jpg"
              alt="Tekera Teknoloji"
              width={1000}
              height={1000}
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
