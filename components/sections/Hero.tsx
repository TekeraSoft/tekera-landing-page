import React from "react";
import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import {
  FaCloud,
  FaHandshake,
  FaMicrochip,
  FaRobot,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import FeatureCard from "../cards/FeaturedCard";

function Hero() {
  const features = [
    {
      icon: FaRobot,
      title: "Yapay Zeka Çözümleri",
      description:
        "İş süreçlerinizi optimize eden yapay zeka destekli sistemlerle geleceğe hazır olun.",
    },
    {
      icon: FaCloud,
      title: "Bulut Altyapı Yönetimi",
      description:
        "Esnek, güvenli ve ölçeklenebilir bulut altyapıları ile işinizi her yerden yönetin.",
    },
    {
      icon: FaShieldAlt,
      title: "Siber Güvenlik Hizmetleri",
      description:
        "Verilerinizi koruyan gelişmiş güvenlik çözümlerimizle riskleri en aza indirin.",
    },
  ];

  return (
    <section className="relative pt-32 lg:pt-36 ">
      <Container className="flex flex-col lg:flex-row  gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 ">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl opacity-60 lg:opacity-95 lg:block bg-gradient-to-r from-teal-600 to-violet-400 blur-xl hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>
        <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl">
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Empower Your Business
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-violet-400 ml-2">
              With AI
            </span>
          </h1>
          <Paragraph className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
            dolorum iste. Impedit ipsa porro officia ratione dolor optio
            corporis cumque deleniti beatae voluptates totam doloribus, rem vero
            sint esse nam nostrum molestiae
          </Paragraph>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-5">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;

// {/* <div className="mt-10 w-full max-w-md mx-auto lg:mx-0">
//   <div className="flex sm:flex-row flex-col gap-5 w-full">
//     <div className="w-full bg-box-bg border border-box-border rounded-2xl p-6 shadow-lg shadow-box-shadow text-heading-3">
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//         {/* Logo & Başlık */}
//         <div className="flex items-center gap-3">
//           <FaRocket className="text-3xl text-color-primary" />
//           <h2 className="text-xl font-semibold text-heading-1">
//             Tekera Teknoloji
//           </h2>
//         </div>

//         {/* Açıklama */}
//         <p className="text-center lg:text-left text-sm lg:text-base max-w-2xl">
//           Geleceği inşa eden çözümlerle tanışın. Yapay zeka, yazılım
//           geliştirme ve dijital dönüşüm projeleriyle işinizi ileriye
//           taşıyoruz.
//         </p>

//         {/* İkonlar */}
//         <div className="flex items-center gap-4">
//           <FaMicrochip className="text-2xl text-color-primary" />
//           <FaHandshake className="text-2xl text-color-primary" />
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}
