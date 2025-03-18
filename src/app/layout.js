import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/main-navbar";
import Footer from "./components/main-footer";
import Header from "./components/main-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Malayala Kshatriya Samajam",
  description: "Malayala Kshatriya Samajam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col max-w-full`}
      >
        <NavBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
