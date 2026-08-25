import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kraknot's Portfolio",
  description: "The personal portfolio of Muhammed Shihan S.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
