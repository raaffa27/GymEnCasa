import createMDX from "@next/mdx";

// Export estático SOLO cuando lo pides explícitamente (STATIC_EXPORT=1).
// Así Vercel hace su build normal de Next.js (sin "de-opt" del export)
// y en local seguimos pudiendo generar la carpeta `out/` con
// `npm run export` para abrirla con doble clic o subirla a Hostinger.
const isStaticExport = process.env.STATIC_EXPORT === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport ? { output: "export", trailingSlash: true } : {}),
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    // En export estático no hay servidor de optimización; en Vercel sí.
    unoptimized: isStaticExport,
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
