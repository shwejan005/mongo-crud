import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const font = League_Spartan({
  subsets: ["latin"]
});

export const metadata = {
  title: "Mongo CRUD",
  description: "Basic CRUD App using MongoDB and next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <Navbar />
        <main className="mt-4">
          {children}
        </main>
      </body>
    </html>
  );
}
