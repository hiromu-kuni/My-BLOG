// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

const site = process.env.SITE_URL ?? "https://example.com";
const siteUrl = new URL(site);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    mdx({
      optimize: true,
    }),
    sitemap(),
    robotsTxt({
      policy: [{ userAgent: "*", allow: "/" }],
      sitemap: new URL("/sitemap-index.xml", site).href,
      host: siteUrl.host,
    }),
  ],
  site,
});
