import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  title: {
    default: "GSOC Portfolio",
    template: "%s | GSOC Portfolio",
  },
  description: "A professional showcase of my Google Summer of Code contributions, projects, and insights.",
  openGraph: {
    title: "GSOC Portfolio",
    description: "A professional showcase of my Google Summer of Code contributions, projects, and insights.",
    url: "https://your-username.github.io/gsoc-blog/",
    siteName: "GSOC Portfolio",
    images: [
      {
        url: "https://your-username.github.io/gsoc-blog/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSOC Portfolio",
    description: "A professional showcase of my Google Summer of Code contributions, projects, and insights.",
    images: ["https://your-username.github.io/gsoc-blog/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
