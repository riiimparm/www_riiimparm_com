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
    image: "https://private-user-images.githubusercontent.com/98566465/420124978-c34b995d-70ae-4b60-afb2-63b896a855ef.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM4ODY2NTksIm5iZiI6MTc2Mzg4NjM1OSwicGF0aCI6Ii85ODU2NjQ2NS80MjAxMjQ5NzgtYzM0Yjk5NWQtNzBhZS00YjYwLWFmYjItNjNiODk2YTg1NWVmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTExMjMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMTIzVDA4MjU1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM2ZTY0ZDYxZDRkZGRkMzQ1YjMwMTRmZTI5NjBhZDJkNDE4MThiNTViNDY2NWZlYTQwOGI3Yzc4M2VkOTQyZjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.4ylYngjig1sBQvM_v-M6IGsibjZpmI6qkRb6Fxeg7rU",
    techStack: ["Kotlin", "Burp Suite API"]
  }
];
