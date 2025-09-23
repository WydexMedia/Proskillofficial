import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best skill academy in kerala | ProSkill Academy",
  description:
    "ProSkill Academy is the best skill academy in Kerala, offering expert resin art course in Kerala and creative skill development programs with hands-on training and personalized guidance.",
  authors: [{ name: "ProSkill Academy", url: "https://proskilledu.com" }],
  generator: "Next.js",
  applicationName: "ProSkill Academy",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Best skill academy in kerala",
    "Resin art course in kerala",
    "Mehendi art course kerala",
    "Skill development kerala",
    "ProSkill Academy",
    "Creative courses kerala",
    "Art and craft courses",
    "Hands-on training kerala",
    "Skill academy calicut",
    "Resin art training",
    "Creative learning kerala",
    "Online art classes",
    "Offline art classes",
    "Ocean art projects",
    "Clock making course",
    "Keychain making",
    "Frame making course",
  ],
  creator: "ProSkill Academy",
  publisher: "ProSkill Academy",
  metadataBase: new URL("https://www.proskilledu.com"),
  alternates: {
    canonical: "https://www.proskilledu.com",
  },
  openGraph: {
    title: "ProSkill Academy | Best Skill Academy in Kerala",
    description:
      "Join Kerala's leading skill academy offering expert resin art courses and creative skill development programs with hands-on training and personalized guidance.",
    url: "https://proskilledu.com",
    siteName: "ProSkill Academy",
    images: [
      {
        url: "https://proskilledu.com/og-image.jpg", // Replace with real image
        width: 1200,
        height: 630,
        alt: "ProSkill Academy - Best Skill Academy in Kerala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProSkill Academy",
    description:
      "Kerala's premier skill academy specializing in resin art courses and creative skill development with expert guidance.",
    site: "@the.proskill", // Replace with your real Twitter handle
    creator: "@the.proskill",
    images: ["https://proskilledu.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
