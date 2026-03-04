import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thành & Linh",
  description: "Trân trọng kính mời quý khách đến tham dự lễ cưới của Đức Thành & Mỹ Linh",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Thành & Linh",
    description: "Trân trọng kính mời quý khách đến tham dự lễ cưới của Đức Thành & Mỹ Linh",
    url: "https://thanhlinh.online", // Replace with your actual domain
    siteName: "Thành & Linh Wedding",
    images: [
      {
        url: "/KEIY9680 (1).jpg", // Preview image when sharing
        width: 1200,
        height: 630,
        alt: "Đức Thành & Mỹ Linh",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thành & Linh",
    description: "Trân trọng kính mời quý khách đến tham dự lễ cưới của Đức Thành & Mỹ Linh",
    images: ["/KEIY9680 (1).jpg"],
  },
  metadataBase: new URL("https://thanhlinh.online"), // Replace with your actual domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
