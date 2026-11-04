import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const GTM_ID = "GTM-NPWGNV43";

export const metadata: Metadata = {
  title: "Kenneth Ekandem — Senior Backend Engineer",
  description:
    "Senior backend engineer building real-time, high-scale systems and blockchain infrastructure. Seven years in fintech and web3 — from a platform serving 40,000+ users to wallet and chain integrations. Lagos, WAT. Open to senior remote roles and select contracts.",
  authors: [{ name: "Kenneth Ekandem", url: "https://kennethekandem.com" }],
  openGraph: {
    title: "Kenneth Ekandem — Senior Backend Engineer",
    description:
      "Real-time, high-scale backend systems and blockchain infrastructure. Seven years in fintech and web3.",
    type: "profile",
    siteName: "Kenneth Ekandem",
    locale: "en_NG",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}