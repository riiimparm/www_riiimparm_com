// src/data/index.ts
export interface SiteData {
  matrixText: string;
  about: string;
  hobby: string;
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
}

export const siteData: SiteData = {
  matrixText: `01001001 01000001 01001101 01010010 01001001 01001001 01001001 01001101
01010100 01001000 01011111 01000100 01000001 01010010 01001011 01001110
01000101 01010011 01010011 00101110 00101110 00101110`,
  
  about: `riiimparm
セキュリティ, SRE, ツール開発を中心にしています. 活動グループ: Rowicy (https://rowicy.com)`,
  
  hobby: "Personal development, pen testing tool extensions, etc.",
  
  navigation: [
    { href: "/blogs/", label: "Blogs" },
    { href: "/tools/", label: "Tools" },
    { href: "/products/", label: "Products" }
  ],
  
  skills: [
    {
      title: "Development",
      skills: ["Python", "Go", "Rust", "TypeScript"]
    },
    {
      title: "Offensive Security",
      skills: [
        "Web Pentesting",
        "Penetration Testing",
        "Vulnerability Research"
      ]
    },
    {
        title: "Cloud / DevOps",
        skills: ["AWS", "GCP", "Terraform", "Kubernetes"]
    }
  ],
  
  socialLinks: [
    {
      href: "https://github.com/riiimparm",
      label: "GitHub",
      iconUrl: "https://api.iconify.design/grommet-icons:github.svg?color=%230aff0a"
    },
    {
      href: "https://x.com/riiimparm",
      label: "X",
      iconUrl: "https://api.iconify.design/grommet-icons:x.svg?color=%230aff0a"
    }
  ]
};