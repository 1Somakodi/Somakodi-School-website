import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";   // 🔹 IMPORTANT IMPORT

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Somakodi School",
    template: "%s | Somakodi School",
  },
  description:
    "At Somakodi, we believe that education should evolve with the world. That’s why we offer an innovative way to learn, blending practical, project-based training with expert mentorship to prepare learners for real-world careers in tech.",
  icons: {
    icon: "/logos/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 base script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0R04CN5RGD"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0R04CN5RGD');
          `}
        </Script>

        {/* Nepcha Analytics (safe Next.js version) */}
        <Script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        />

        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>

      <body className={roboto.className}>
        {/* GA pageview tracking for Next.js routing — CORRECTLY WRAPPED */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>

        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
