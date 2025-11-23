// src/data/products.ts

export interface ProductItem {
    title: string;
    url: string;
    description: string;
    image: string;
    techStack: string[];
}

export const products: ProductItem[] = [
    {
        title: "Meeats BoardGame&Kitchen",
        url: "https://meeats-bgk.com/",
        description: `
      My Friend's Restaurant's official website.
      Built using Next.js and Supabase.
    `,
        image: "https://fnyfcmfyjoirlrsrdzva.supabase.co/storage/v1/object/public/img//thumbnail.jpg",
        techStack: ["Next.js", "Supabase", "Tailwind CSS"]
    },
    {
        title: "Burpee - BurpSuite Extension",
        url: "https://github.com/riiimparm/burpee",
        description: `
      Burp Suite extension that organizes HTTP requests and exports them to Excel.
    `,
        image: "/product/burpee.webp",
        techStack: ["Kotlin", "Burp Suite API"]
    },
    {
        title: "Scanned Notify - BurpSuite Extension",
        url: "https://github.com/riiimparm/scanned_notify",
        description: `
      Notifies you via Gmail when a Task Scan is complete.
    `,
        image: "/product/scanned_notify.webp",
        techStack: ["Kotlin", "Burp Suite API"]
    }
];
