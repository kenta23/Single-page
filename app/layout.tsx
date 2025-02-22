import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({ 
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: 'auto',
});


export const metadata: Metadata = {
  title: "Sample single web page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} overflow-x-hidden  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
