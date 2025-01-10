import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveContextProvider from "@/context/activeContext";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "./components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krishan | Personal Portfolio",
  description:
    "Frontend developer proficient in React.js and Next.js, creating dynamic web applications with enhanced SEO capabilities. Harnessing server-side rendering and client-side routing for optimal user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-300`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-full rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] right-[11rem] left-[-35rem] -z-10 h-full w-[50.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
        <ActiveContextProvider>
        <Header />
        {children}
        <Toaster position="top-right" />
        </ActiveContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}
