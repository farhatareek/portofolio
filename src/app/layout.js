import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page";
import Nav from "./nav/page";
import Footer from "./footer/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Farha tareek",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
