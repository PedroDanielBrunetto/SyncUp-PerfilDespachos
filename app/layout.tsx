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
