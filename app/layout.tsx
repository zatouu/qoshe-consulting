import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QOSHE Consulting — Cabinet QHSE au Sénégal",
  description:
    "Cabinet spécialisé en conseil et ingénierie QHSE : Qualité, Hygiène, Sécurité, Environnement. Expert BTP, industrie, hôtellerie au Sénégal.",
  keywords:
    "QHSE, cabinet conseil, Sénégal, BTP, ISO 9001, ISO 14001, ISO 45001, sécurité, qualité, environnement",
  openGraph: {
    title: "QOSHE Consulting — Cabinet QHSE expert",
    description:
      "Le cabinet QHSE orienté performance et réduction des coûts, pas juste conformité.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('qoshe-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}})();`,
          }}
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased font-sans transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
