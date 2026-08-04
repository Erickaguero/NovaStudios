
import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Nova Studios — Agencia de Crecimiento Creativo",
  description:
    "Nova Studios es una agencia de crecimiento creativo que combina estrategia, narrativa y producción para crear experiencias de marca significativas y crecimiento sostenible.",
  keywords: [
    "Nova Studios",
    "agencia de crecimiento creativo",
    "estrategia de marca",
    "branding",
    "producción audiovisual",
    "marketing digital",
    "desarrollo web",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
