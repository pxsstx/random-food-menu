import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Ramdom Food Menu",
  description: "Random food menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='wireframe'>
      <body className={poppins.className}>
        <div className="h-[90svh] w-[90svw] mx-auto bg-neutral dark:bg-base-200 mt-10 rounded-md p-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
