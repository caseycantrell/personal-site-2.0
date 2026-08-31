import type { Metadata } from "next"
import { Archivo, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

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
    <html lang="en" className={`${archivo.variable} ${jetbrains.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
