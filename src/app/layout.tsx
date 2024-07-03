import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Casey Cantrell",
  description: "Personal website for Casey Cantrell, a Software Engineer living in Austin, TX.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Personal website for Casey Cantrell, a Software Engineer living in Austin, TX." />
        <meta name="keywords" content="Casey Cantrell, Software Engineer, Software Developer, Full-Stack, Backend, Frontend, Next.js, React, Ruby on Rails, Austin, Austin TX" />
        <meta name="author" content="Casey Cantrell" />
        <meta property="og:title" content="Casey Cantrell" />
        <meta property="og:description" content="Personal website for Casey Cantrell, a Software Engineer living in Austin, TX." />
        <meta property="og:image" content="/icons/person.png" />
        <meta property="og:url" content="https://www.caseycantrell.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/icons/person.png" />
        <title>Casey Cantrell</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
