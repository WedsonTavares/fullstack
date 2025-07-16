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
  metadataBase: new URL("https://tavaresdev.com"),
  title: "Tavares Sistemas",
  description: "Portfólio profissional de Wedson Tavares. Veja projetos, habilidades e experiências em desenvolvimento web com React, Next.js e mais.",
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
  creator: "Wedson Tavares",
  openGraph: {
    title: "Tavares Sistemas | Portfólio de Wedson Tavares",
    description: "Portfólio profissional de Wedson Tavares. Veja projetos, habilidades e experiências em desenvolvimento web.",
    url: "https://tavaresdev.com",
    siteName: "Tavares Sistemas",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tavares Sistemas"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tavares Sistemas",
    description: "Portfólio profissional de Wedson Tavares. Veja projetos, habilidades e experiências em desenvolvimento web com React, Next.js e mais.",
    images: ["/assets/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* SEO tags */}
        <title>Seu Título do Site</title>
        <meta name="description" content="Descrição da página para SEO e Google." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Seu Título do Site" />
        <meta property="og:description" content="Descrição da página para redes sociais." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seudominio.com" />
        <meta property="og:image" content="/assets/perfil.jpeg" />
        {/* Google Ads Global Site Tag (substitua AW-XXXXXXXXX pela sua chave) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXXXXXXXX');
            // Gatilho de conversão exemplo:
            window.triggerConversion = function(label) {
              gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/' + label});
            }
          `
        }} />
      </head>
      <body>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}