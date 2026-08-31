import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

const description = "Personal website for Casey Cantrell, a Full-Stack Software Engineer living in Austin, TX."

export const metadata: Metadata = {
  metadataBase: new URL("https://www.caseycantrell.com"),
  title: "Casey Cantrell",
  description,
  keywords: ["Casey Cantrell", "Software Engineer", "Software Developer", "Full-Stack", "Backend", "Frontend", "Python", "Django", "Next.js", "React", "Ruby on Rails", "Austin", "Austin TX"],
  authors: [{ name: "Casey Cantrell" }],
  icons: { icon: "/icons/person.png" },
  openGraph: {
    title: "Casey Cantrell",
    description,
    url: "https://www.caseycantrell.com",
    siteName: "Casey Cantrell",
    images: ["/icons/person.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Casey Cantrell",
    description,
    images: ["/icons/person.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
