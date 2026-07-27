import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timeline Taxi",
  description: "A 2D top-down time-travel taxi puzzle game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
