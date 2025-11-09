import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import { ThemeProvider } from "../contexts/ThemeContext";
import { IBM_Plex_Serif } from "next/font/google"; 

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "shrutiiyer's website",
  description: "Shruti Iyer's Portfolio",
  icons: {
    icon: "/favicon-new.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexSerif.className}>
      <body>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
