import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MouseContextProvider from "./context/globalcontext";
import DotRing from "./components/customcursor";
import { Loader } from "./components/loader/loader";
import SmoothScroll from "./components/smoothscroll";
import { Preloader } from "./components/preloader";

const inter = Inter({ subsets: ["latin"] });

const font = localFont({
  src: "../public/fonts/NeueMontreal-Regular.otf",
  variable: "--font-neue",
});

const dusk = localFont({
  src: "../public/fonts/DrukTextWide-Bold-Trial.otf",
  variable: "--font-dusk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.variable} ${dusk.variable}`}>
        <MouseContextProvider>
          <Preloader />
          <Loader />
          <DotRing />
          {children}
        </MouseContextProvider>
      </body>
    </html>
  );
}
