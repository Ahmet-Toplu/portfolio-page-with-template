import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "ahmet-toplu.vercel.app",
    template: "%s | chronark.com",
  },
  description: "A personal portfolio showcasing my web and open-source projects, case studies, and writing.",
  openGraph: {
    title: "ahmet-toplu.vercel.app",
    description:
      "Just a guy who loves to code.",
    url: "https://ahmet-toplu.vercel.app",
    siteName: "ahmet-toplu.vercel.app",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Ahmet Toplu",
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
  icons: {
    icon: "/ahmet_toplu_logo.png",
    shortcut: "/ahmet_toplu_logo.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
