import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Componentes
import Header from "@/components/Header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Tavares Tecnologia",
  description: "Desenvolvimento de soluções digitais modernas com foco em performance, design e tecnologia de ponta.",
  metadataBase: new URL("https://tavaresdev.com"),
  openGraph: {
    title: "Tavares Tecnologia",
    description: "Soluções web modernas com Next.js, React, Tailwind e tecnologias de alto desempenho.",
    url: "https://tavaresdev.com",
    siteName: "Tavares Tecnologia",
    images: [
      {
        url: "/ogimage.png",
        width: 1200,
        height: 630,
        alt: "Banner Tavares Tecnologia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tavares Tecnologia",
    description: "Criação de sites e sistemas web com tecnologia de ponta.",
    images: ["/ogimage.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}