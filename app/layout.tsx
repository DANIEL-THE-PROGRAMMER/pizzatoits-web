import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import MouseContextProvider from "./context/globalcontext";
import DotRing from "./components/customcursor";
import { Loader } from "./components/loader/loader";
import SmoothScroll from "./components/smoothscroll";
import { Preloader } from "./components/preloader";
import { Wrapper } from "./components/wrapper";
import StyledComponentsRegistry from "./lib/registry";

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
        <StyledComponentsRegistry>
          <MouseContextProvider>
            <Preloader />
            <Loader />
            <DotRing />
            <Wrapper>{children}</Wrapper>
          </MouseContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
