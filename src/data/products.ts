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
        title: "mapmake",
        url: "https://mapmake.riiimparm.com/",
        description: `
      ブラウザローカル動作のシンプルなコンセプトマップツール
    `,
        image: "https://private-user-images.githubusercontent.com/98566465/617248024-2cd9e675-b4a6-46cd-9190-766f9aa381e3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODMyNzU5NzIsIm5iZiI6MTc4MzI3NTY3MiwicGF0aCI6Ii85ODU2NjQ2NS82MTcyNDgwMjQtMmNkOWU2NzUtYjRhNi00NmNkLTkxOTAtNzY2ZjlhYTM4MWUzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA3MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNzA1VDE4MjExMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJhZGZmOGJjNWRhOGQwMjRhMGYxZmFlMGFmODNmMWIwOWY4MjUxMzE3YzJiOTc1YTRkMDg5ZWZhNTI0OGJlZjEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.2t6XumhF1bLLDHKTwrcKpoP42eDi5zynzR1GBltkRNw",
        techStack: ["Mindmap"]
    },
        {
        title: "md-looks-good",
        url: "https://github.com/riiimparm/md-looks-good",
        description: `
      MarkDownレンダリング用Chrome拡張機能
    `,
        image: "https://private-user-images.githubusercontent.com/98566465/617259665-3c4145f8-4328-4c8d-bc9d-4ed343aed5b2.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODMyNzY4MjIsIm5iZiI6MTc4MzI3NjUyMiwicGF0aCI6Ii85ODU2NjQ2NS82MTcyNTk2NjUtM2M0MTQ1ZjgtNDMyOC00YzhkLWJjOWQtNGVkMzQzYWVkNWIyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA3MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNzA1VDE4MzUyMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWExZGY0MmMxODM2NGFmMGQ2NzA5MjE1M2E0MWIwNTUxYTZmNTlmYzViMDZlMDQ2MjU5NWY5MzVmNDI0Yzc1MTImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.DXoBLf1mvsQEog9d9soNYetfkrTy5XNYLypiUBsy878",
        techStack: ["Chrome Extension"]
    },
    {
        title: "BeforeTranslate",
        url: "https://github.com/riiimparm/before-translate",
        description: `
      インラインブロックを除去してChromeのページ翻訳を自然にする拡張機能
    `,
        image: "https://private-user-images.githubusercontent.com/98566465/509289817-43197248-bd70-4e1e-a3bd-e963b0e6cac3.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODMyNzU4NTcsIm5iZiI6MTc4MzI3NTU1NywicGF0aCI6Ii85ODU2NjQ2NS81MDkyODk4MTctNDMxOTcyNDgtYmQ3MC00ZTFlLWEzYmQtZTk2M2IwZTZjYWMzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA3MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNzA1VDE4MTkxN1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdkYjJjNzJiODdhOWY3MTI5ODAyYmNiNDAwNGNlMmJmMzYzY2QxZmNkYThmNDFjODNjYTE5NWY0NzlmODA4ZmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.tYzmWoZOo7uSvv2MCH-XdQ2tfhgyUnkYOzAvgXcSJSo",
        techStack: ["Chrome Extension"]
    },
    {
        title: "Meeats BoardGame&Kitchen",
        url: "https://meeats-bgk.com/",
        description: `
      友人のボードゲームカフェのHP
    `,
        image: "https://fnyfcmfyjoirlrsrdzva.supabase.co/storage/v1/object/public/img//thumbnail.jpg",
        techStack: ["Next.js", "Supabase"]
    },
    {
        title: "Burpee - BurpSuite Extension",
        url: "https://github.com/riiimparm/burpee",
        description: `
      BurpLogからExecelに出力するBurpSuiteの拡張機能
    `,
        image: "/product/burpee.webp",
        techStack: ["BurpExtension"]
    },
    {
        title: "Scanned Notify - BurpSuite Extension",
        url: "https://github.com/riiimparm/scanned_notify",
        description: `
      Audit終了を通知するBurpSuiteの拡張機能
    `,
        image: "/product/scanned_notify.webp",
        techStack: ["BurpExtension"]
    },
    {
        title: "RANDOM TRIPPER",
        url: "https://random-tripper.riiimparm.com/",
        description: `
      世界中のランダムなドメインにユーザーを飛ばす悪質なサイト
    `,
        image: "https://random-tripper.riiimparm.com/thumbnail.png",
        techStack: ["Astro","Cloudflare DNS"]
    },
];
