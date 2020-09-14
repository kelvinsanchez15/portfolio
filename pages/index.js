import Head from "next/head";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";

export default function Index() {
  return (
    <>
      <Head>
        <title>Kelvin Sanchez | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <AboutSection />
    </>
  );
}
