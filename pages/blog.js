import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de Desarrollo Web | Mi Sitio Optimizado</title>
        <meta name="description" content="Artículos, tutoriales y noticias sobre Next.js, optimización SEO y desarrollo web avanzado." />
        <meta name="keywords" content="Blog, Next.js, desarrollo web, tutoriales" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog de Desarrollo Web" />
        <meta property="og:description" content="Aprende sobre Next.js y SEO en nuestro blog." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>
      <h1>Nuestro Blog</h1>
      <p>Aquí encontrarás los mejores artículos sobre desarrollo web.</p>
    </>
  );
}