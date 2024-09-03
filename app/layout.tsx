import type { Metadata } from "next";
import { BRIDE_NAME, GROOM_NAME, HASHTAG } from "@/utils/constants";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: `${GROOM_NAME} & ${BRIDE_NAME}`,
  description: `The official RSVP site for the wedding of ${GROOM_NAME} and ${BRIDE_NAME}.`,
  keywords: [
    `${HASHTAG}`, 
    `${GROOM_NAME} & ${BRIDE_NAME}`,
    `${GROOM_NAME} and ${BRIDE_NAME} wedding`,
    `${GROOM_NAME} and ${BRIDE_NAME} rsvp`,
    `${GROOM_NAME.charAt(0)}A${BRIDE_NAME.charAt(0)} rsvp`,
  ],
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
