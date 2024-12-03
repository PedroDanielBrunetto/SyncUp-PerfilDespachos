import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Perfil Despachos",
  description:
    "Somos especializados em soluções ágeis e eficientes para o comércio exterior. Com uma equipe altamente qualificada, oferecemos suporte completo para que sua empresa realize operações internacionais com tranquilidade e segurança.",
  keywords: [
    "comércio exterior",
    "despachos aduaneiros",
    "consultoria de comércio exterior",
    "Perfil Despachos",
    "soluções ágeis",
  ],
  openGraph: {
    title: "Perfil Despachos",
    description:
      "Somos especializados em soluções ágeis e eficientes para o comércio exterior.",
    url: "https://www.perfildespachos.com.br",
    type: "website",
    images: [
      {
        url: "https://www.perfildespachos.com.br/favicon.ico",
        alt: "Perfil Despachos",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
