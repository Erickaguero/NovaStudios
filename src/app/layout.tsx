
import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Nova Studios — Helping brands grow with intention",
  description:
    "Nova Studios is a communication and advertising agency based in NYC – NJ. Strategy. Content. Growth. Let's work together.",
  keywords: ["Nova Studios", "advertising agency", "communication agency", "branding", "content", "growth", "NYC", "NJ"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
