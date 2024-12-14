import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/ui/scrollUp";
import StoreProvider from "@/providers/StoreProvider";
import ParticlesComponent from "@/components/ui/Particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Elmadany",
  description: "I'm Front-end Developer| My solid foundation in data structures, algorithms, object-oriented programming, and design patterns has allowed me to develop efficient, maintainable, and scalable code. I am proficient in JavaScript and TypeScript and have extensive experience working with React and Redux. I have also worked with Next.js, GraphQl, Sass, Tailwind CSS, and other front-end technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <ParticlesComponent />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
            <ScrollUp />
            <Footer />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
