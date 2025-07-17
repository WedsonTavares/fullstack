
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
        {/* Tags SEO e comentários em português */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={metadata.authors[0].name} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content="https://tavaresdev.com" />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="icon" href={metadata.icons.icon} />
        {/* Google Ads Global Site Tag (substitua AW-XXXXXXXXX pela sua chave) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXXXXXXXX');
            // Exemplo de gatilho de conversão:
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