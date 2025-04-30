import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import "./globals.css";
import MainLayout from "@/components/layouts/layout";
import Head from "next/head";

// `locale` parametresinin tipi belirlenmeli
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale }; // Burada `Locale` türünü kullanıyoruz
}) {
  const { locale } = await params;

  // Geçerli bir dil olup olmadığını kontrol et
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Dil mesajlarını getir
  const messages = await getMessages();

  const title = "Tekera Teknoloji"; // Örnek Başlık, dilinize göre dinamik hale getirilebilir.
  const description =
    "Tekera Teknoloji, dijital dönüşüm hizmetleri sunarak işletmelerin iş süreçlerini verimli hale getirmektedir."; // Örnek açıklama
  const keywords = "Tekera, dijital dönüşüm, teknoloji, yazılım çözümleri"; // Anahtar kelimeler

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className="overflow-hidden overflow-y-auto bg-body"
        suppressHydrationWarning
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Head>
            {/* SEO Etiketleri */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Tekera Teknoloji" />

            {/* Open Graph (Facebook, LinkedIn, vb.) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="/images/og-image.jpg" />
            <meta
              property="og:url"
              content="https://www.tekeratechnology.com"
            />
            <meta property="og:type" content="website" />

            {/* Twitter Cards */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="/images/og-image.jpg" />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <MainLayout>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
