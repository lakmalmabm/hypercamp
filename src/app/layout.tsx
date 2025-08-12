import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HyperCamp - HyperEVM Ecosystem Hub",
  description: "Discover and explore projects in the HyperEVM ecosystem. An open-source community-driven platform for builders and creators.",
  keywords: "HyperEVM, blockchain, ecosystem, projects, community, decentralized, web3, DeFi, NFT",
  authors: [{ name: "HyperCamp Community" }],
  creator: "HyperCamp",
  publisher: "HyperCamp",
  metadataBase: new URL("https://hypercamp.xyz"),
  openGraph: {
    title: "HyperCamp - HyperEVM Ecosystem Hub",
    description: "Discover and explore projects in the HyperEVM ecosystem. An open-source community-driven platform for builders and creators.",
    url: "https://hypercamp.xyz",
    siteName: "HyperCamp",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "HyperCamp - HyperEVM Ecosystem Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperCamp - HyperEVM Ecosystem Hub",
    description: "Discover and explore projects in the HyperEVM ecosystem. An open-source community-driven platform for builders and creators.",
    images: ["/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PCQTBYP7Y3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PCQTBYP7Y3');
          `}
        </Script>
      </head>
      <body className={quicksand.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
