import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export estático: genera una carpeta `out/` con HTML+CSS+JS puros
  // que se pueden abrir con doble clic o subir a Hostinger/Netlify/etc.
  output: "export",
  // Cada ruta se exporta como /carpeta/index.html — necesario para que los
  // enlaces internos funcionen al abrir con file:// y para hostings simples.
  trailingSlash: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    // En export estático no hay servidor de optimización: las imágenes
    // se sirven tal cual desde /public.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
