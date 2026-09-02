import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import "./globals.css";

const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  title: {
    default: "RutaBeca | Becas, preparación y oportunidades en Perú",
    template: "%s | RutaBeca",
  },
  description:
    "Explora becas, revisa requisitos oficiales, practica con simulacros y organiza tu postulación desde un solo lugar.",
  keywords: [
    "becas Perú",
    "Beca 18",
    "Pronabec",
    "simulacros",
    "universidades elegibles",
    "postular a una beca",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        {adsenseClient ? (
          <Script
            id="adsense-script"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          />
        ) : null}
        <SiteHeader />
        <div id="contenido">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
