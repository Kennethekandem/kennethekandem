import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenneth Ekandem — Software Engineer",
  description: "Software Engineer · Lagos, Nigeria",
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}