// src/lib/slides.ts
import { slidePdfMap } from "../data/index";

const RSS_URL = "https://speakerdeck.com/riiimparm.rss";

export interface SlideMeta {
  slug: string;
  title: string;
  link: string;
  pubDate: Date;
  description: string;
  imageUrl: string;
  slideId: string;
  pdfUrl: string | null;
}

export async function getSlides(): Promise<SlideMeta[]> {
  try {
    const response = await fetch(RSS_URL);
    const rssText = await response.text();

    // XMLを正規表現でパース（Astroのビルド時に動作）
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items = [...rssText.matchAll(itemRegex)];

    return items.map((match) => {
      const itemContent = match[1];

      const titleMatch = itemContent.match(/<title>(.*?)<\/title>/);
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = itemContent.match(/<description>(.*?)<\/description>/);
      const mediaContentMatch = itemContent.match(/<media:content url="(.*?)"/);

      const title = titleMatch ? titleMatch[1] : "";
      const link = linkMatch ? linkMatch[1] : "";
      const pubDate = pubDateMatch ? new Date(pubDateMatch[1]) : new Date();
      const description = descriptionMatch ? descriptionMatch[1] : "";
      const imageUrl = mediaContentMatch ? mediaContentMatch[1] : "";

      // 画像URLからIDを抽出（presentations/以降、/preview_slide_0.jpgの前まで）
      const imageUrlMatch = imageUrl.match(/presentations\/([a-f0-9]+)\//);
      const slideId = imageUrlMatch ? imageUrlMatch[1] : "";

      // SpeakerDeckのURL末尾のスラッグからローカルPDFを探す
      const slug = link.split("/").filter(Boolean).pop() || "";
      const pdfFile = slidePdfMap[slug];
      const pdfUrl = pdfFile ? `/slides/${pdfFile}` : null;

      return { slug, title, link, pubDate, description, imageUrl, slideId, pdfUrl };
    });
  } catch (error) {
    console.error("RSS取得エラー:", error);
    return [];
  }
}
