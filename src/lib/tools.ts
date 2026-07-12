// src/lib/tools.ts
import { toolUrls } from "../data/tools";

export interface ToolMeta {
  slug: string;
  title: string;
  description?: string;
  url: string;
}

function extractSlug(url: string): string {
  const filename = url.split("/").pop() ?? url;
  return filename.replace(/\.html?$/i, "");
}

function stripTags(text: string): string {
  return text.replace(/<[^>]*>/g, "").trim();
}

async function extractDescription(url: string): Promise<string | undefined> {
  try {
    const res = await fetch(url);
    if (!res.ok) return undefined;
    const html = await res.text();

    // 1. <meta name="description">
    const metaDescription = html.match(
      /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i,
    );
    if (metaDescription) return metaDescription[1];

    // 2. <meta property="og:description">
    const ogDescription = html.match(
      /<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i,
    );
    if (ogDescription) return ogDescription[1];

    // 3. <body>内の最初の<p>
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      const firstParagraph = bodyMatch[1].match(/<p[^>]*>([\s\S]*?)<\/p>/i);
      if (firstParagraph) {
        const text = stripTags(firstParagraph[1]);
        if (text) return text;
      }
    }

    return undefined;
  } catch (error) {
    console.error(`ツール説明の取得に失敗しました: ${url}`, error);
    return undefined;
  }
}

export async function getTools(): Promise<ToolMeta[]> {
  return Promise.all(
    toolUrls.map(async (url) => {
      const slug = extractSlug(url);
      const description = await extractDescription(url);
      return { slug, title: slug, description, url };
    }),
  );
}
