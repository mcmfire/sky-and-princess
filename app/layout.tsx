import type { Metadata } from "next";
import Head from "next/head";
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
