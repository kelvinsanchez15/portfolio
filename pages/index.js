import Head from "next/head";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import PortfolioSection from "../components/home/PortfolioSection";
import ContactSection from "../components/home/ContactSection";

export default function Index() {
  const metaInfo = {
    title: "Kelvin Sanchez | Web Developer",
    description:
      "Kelvin Sánchez is a full stack web developer, experienced in creating beautiful and functional websites and web applications.",
    url: "https://kelvinsanchez.vercel.app/",
    previewImage:
      "https://user-images.githubusercontent.com/4708484/93688063-050a8980-fa91-11ea-89ca-3530a9038393.png",
  };

  const { title, description, url, previewImage } = metaInfo;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="portfolio, personal website, web developer"
        />
        <meta name="language" content="English" />
        <meta name="author" content="Kelvin Sanchez" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
      </Head>

      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
