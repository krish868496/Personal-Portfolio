import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveContextProvider from "@/context/activeContext";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "./components/ThemeSwitch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krishan | Personal Portfolio",
  description:
    "Frontend developer proficient in React.js and Next.js, creating dynamic web applications with enhanced SEO capabilities. Harnessing server-side rendering and client-side routing for optimal user experiences.",
    keywords: ['Next.js', 'React', 'JavaScript'],
    openGraph: {
      title: 'Krishan | Personal Portfolio',
      description: 'Frontend developer proficient in React.js and Next.js, creating dynamic web applications with enhanced SEO capabilities. Harnessing server-side rendering and client-side routing for optimal user experiences.',
      images: "https://krishan-personal-portfolio-di4iszqbu-krishans-projects-58cbc211.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.316fe5ec.png&w=256&q=95",
  
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
          </ActiveContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
