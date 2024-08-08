import "./globals.css"

import { GeistSans } from "geist/font/sans"
import { type Metadata } from "next"

import Nav from "./_components/Navbar/Navbar"
import Providers from "./providers/providers"

export const metadata: Metadata = {
  title: "WannabeHired.ai",
  description: "WannabeHired.ai",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
