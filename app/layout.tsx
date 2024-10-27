import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "GenMail - Email HTML Generator AI",
    description: "Generate beautiful HTML email templates in seconds with AI",
    keywords: ["email generator", "html templates", "ai generator", "email templates"],
    authors: [{ name: "Email HTML Generator AI" }],
    openGraph: {
        title: "GenMail - Email HTML Generator AI",
        description: "Generate beautiful HTML email templates in seconds with AI",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "GenMail - Email HTML Generator AI",
        description: "Generate beautiful HTML email templates in seconds with AI",
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            {
                url: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                url: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        apple: [{ url: "/apple-touch-icon.png" }],
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={dmSans.className}>{children}</body>
        </html>
    );
}
