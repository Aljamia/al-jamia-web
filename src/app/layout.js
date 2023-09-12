import "./page.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Al Jamia Al Islamia - Official Website of Al Jamia Al Islamia, Santhapuram Kerala,",
  description: "Al Jamia - official website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://img.sur.ly/favicons/a/aljamia.net.ico"
          style={{ cursor: "pointer" }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
