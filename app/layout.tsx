import type { Metadata } from "next";
import { BRIDE_NAME, GROOM_NAME } from "@/utils/constants";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: `${GROOM_NAME} & ${BRIDE_NAME}`,
  description: `The official RSVP site for the wedding of ${GROOM_NAME} and ${BRIDE_NAME}.`,
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
        <SpeedInsights />
      </body>
    </html>
  );
}
