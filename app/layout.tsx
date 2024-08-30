import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sky and Princess",
  description: "The official RSVP site for Sky & Princess' wedding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
