import "./globals.css";
import Provider from "./providers/Provider";
import { UiProvider } from "./providers/UiProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinic | Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <UiProvider>
            <NavBar />
            {children}
          
          </UiProvider>
        </Provider>
      </body>
    </html>
  );
}
