import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeSwitcher } from "./_components/ThemeSwitcher";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "WannabeHired.ai",
  description: "WannabeHired.ai",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers>
          <TRPCReactProvider>
            <ThemeSwitcher />
            {children}
          </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  );
}
