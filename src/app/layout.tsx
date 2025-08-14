import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jacob Baginski",
  description: "Personal website of Jacob Baginski.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased`}
      >
        {children}

        <footer className="border-t border-gray-200 p-4">
          <div className="mx-auto max-w-[800px] flex justify-end">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Jacob Baginski
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
