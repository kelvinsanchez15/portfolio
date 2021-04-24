import Head from 'next/head';
import { GetStaticProps } from 'next';

import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import PortfolioSection from '../components/home/PortfolioSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const response = await import(`../locales/${locale}.json`);

  return {
    props: {
      content: response.default,
    },
  };
};

export default function Index({
  content,
}: {
  content: typeof import('../locales/en.json');
}) {
  const { heroData, aboutData, portfolioData, blogData, contactData } = content;
  const metaInfo = {
    title: 'Kelvin Sánchez | Web Developer',
    description:
      'Kelvin Sánchez is a full stack developer, experienced in creating beautiful and functional websites and web applications.',
    url: 'https://www.kelvinsanchez15.com/',
    previewImage:
      'https://user-images.githubusercontent.com/4708484/93688063-050a8980-fa91-11ea-89ca-3530a9038393.png',
  };

  const { title, description, url, previewImage } = metaInfo;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta
          content="portfolio, personal website, web developer"
          name="keywords"
        />
        <meta content="English" name="language" />
        <meta content="Kelvin Sanchez" name="author" />
        <link href="/favicon.ico" rel="icon" />

        {/* Open Graph */}
        <meta key="ogtitle" content={title} property="og:title" />
        <meta key="ogdesc" content={description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta key="ogurl" content={url} property="og:url" />
        <meta key="ogimage" content={previewImage} property="og:image" />
      </Head>

      <HeroSection heroData={heroData} />
      <AboutSection aboutData={aboutData} />
      <PortfolioSection portfolioData={portfolioData} />
      <BlogSection blogData={blogData} />
      <ContactSection contactData={contactData} />
    </>
  );
}
