import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contáctanos | Mi Sitio Optimizado</title>
        <meta name="description" content="Ponte en contacto con nuestro equipo para consultas sobre desarrollo web y optimización SEO." />
        <meta name="keywords" content="Contacto, soporte, desarrollo web" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contáctanos" />
        <meta property="og:description" content="¿Tienes un proyecto en mente? Hablemos." />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>
      <h1>Contacto</h1>
      <p>Escríbenos a: contacto@misitio.com</p>
    </>
  );
}