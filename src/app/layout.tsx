import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pipeline Grid",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <Header />
          {children}
          <Footer />
        </body>
    </html>
  );
}
