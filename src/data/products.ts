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
        title: "BeforeTranslate",
        url: "https://github.com/riiimparm/before-translate",
        description: `
      Chrome extension that adjusts the DOM to provide a natural translation while preserving the layout.
    `,
        image: "https://private-user-images.githubusercontent.com/98566465/509654354-418c566a-1746-48b4-9fb9-09f6ae72c70b.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Njg4ODQxNDEsIm5iZiI6MTc2ODg4Mzg0MSwicGF0aCI6Ii85ODU2NjQ2NS81MDk2NTQzNTQtNDE4YzU2NmEtMTc0Ni00OGI0LTlmYjktMDlmNmFlNzJjNzBiLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAxMjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMTIwVDA0MzcyMVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE4NTNkNDlmY2Q5MWI1OTM5OGMxYWE1NjMxZjUzMzg4NzVmNWYyMjA1NWE1NWU0YmMwYWMyN2UyMDJjOTJiYTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.K8QVTNRaHD0MrHBuGRn6zADAVqd_VNh-AsvQZ1U5v4E",
        techStack: ["JavaScript", "Chrome Extension API"]
    },
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
    },
    {
        title: "RANDOM TRIPPER",
        url: "https://random-tripper.riiimparm.com/",
        description: `
      A site that sends users to random domains around the world.
    `,
        image: "https://random-tripper.riiimparm.com/thumbnail.png",
        techStack: ["Astro","Cloudflare DNS"]
    },
];
