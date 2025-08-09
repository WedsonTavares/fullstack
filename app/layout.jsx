// app/layout.tsx
import { JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
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
  metadataBase: new URL("https://tavaresdev.com"),
  title: {
    template: "%s | Tavares Sistemas",
    default: "Tavares Sistemas",
  },
  description: "Meu portfólio profissional. Veja meus projetos, habilidades e experiências em web com React, Next.js e mais.",
  keywords: [
    "Tavares Sistemas",
    "Wedson Tavares",
    "portfólio",
    "desenvolvedor web",
    "React",
    "Next.js",
    "Tailwind",
    "JavaScript",
    "Frontend",
    "Fullstack"
  ],
  authors: [{ name: "Wedson Tavares" }],
  openGraph: {
    title: "Tavares Sistemas",
    description: "Portfólio com projetos em React, Next.js e mais.",
    url: "https://tavaresdev.com",
    siteName: "Tavares Sistemas",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tavares Sistemas"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tavares Sistemas",
    description: "Portfólio profissional de Wedson Tavares.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <GoogleAnalytics gaId="G-7KW5L29VX8" />
      </body>
    </html>
  );
}
