// src/data/index.ts
export interface SiteData {
  about: string;
  navigation: NavigationLink[];
  skills: SkillCategory[];
  socialLinks: SocialLink[];
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  href: string;
  label: string;
  iconUrl: string;
  iconUrlHover: string;
}

// SpeakerDeckのスライドURL末尾のスラッグ -> public/slides/ 配下のローカルPDFファイル名
// 対応するPDFが用意できたスライドのみここに追加する
export const slidePdfMap: Record<string, string> = {
  "nazepuresuhorudadesqlinziekusiyondui-ce-gadekiruka": "sqli-place-hd.pdf",
};

export const siteData: SiteData = {
  about: `riiimparm
ツール開発とセキュリティのエンジニア
このサイトでは個人的に作ったツールやブログ内容をまとめている`,

  
  navigation: [
    { href: "/blogs/", label: "Blogs" },
    { href: "/tools/", label: "Tools" },
    { href: "/products/", label: "Products" },
    { href: "/slides/", label: "Slides" }
  ],
  
  socialLinks: [
    {
      href: "https://github.com/riiimparm",
      label: "GitHub",
      iconUrl: "https://api.iconify.design/grommet-icons:github.svg?color=%232b2820",
      iconUrlHover: "https://api.iconify.design/grommet-icons:github.svg?color=%234f7942"
    },
    {
      href: "https://x.com/riiimparm",
      label: "X",
      iconUrl: "https://api.iconify.design/grommet-icons:x.svg?color=%232b2820",
      iconUrlHover: "https://api.iconify.design/grommet-icons:x.svg?color=%234f7942"
    }
  ]
};