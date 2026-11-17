const BASE_URL = "https://mi-proyecto-seo-puce.vercel.app";

// Simulamos una consulta a una base de datos o CMS
const fetchPagesFromDatabase = async () => {
  // Aquí en un caso real harías: const data = await db.query("SELECT slug FROM posts");
  // Simulamos un retraso de red y devolvemos las rutas
  return [
    { url: "/", updatedAt: "2026-11-17" },
    { url: "/blog", updatedAt: "2026-11-17" },
    { url: "/contacto", updatedAt: "2026-11-17" },
    // Simulamos un artículo dinámico del CMS
    { url: "/blog/como-mejorar-tu-seo", updatedAt: "2026-11-17" },
    { url: "/blog/optimizacion-de-imagenes", updatedAt: "2026-11-17" }
  ];
};

export default async function handler(req, res) {
  try {
    // Obtenemos los datos de la "base de datos"
    const pages = await fetchPagesFromDatabase();

    // Generamos el XML dinámicamente
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${BASE_URL}${page.url}</loc>
              <lastmod>${page.updatedAt}</lastmod>
            </url>
          `;
        })
        .join("")}
    </urlset>`;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  } catch (error) {
    res.status(500).json({ error: "Error generando el sitemap" });
  }
}