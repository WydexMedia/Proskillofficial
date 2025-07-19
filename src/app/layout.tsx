import Link from "next/link";
import "./globals.css";
import Header from "../../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Head from "next/head";


export const metadata = {
  title: "Best skill academy in Kerala | Resin art course in Kerala",
  description: "Best skill academy in Kerala offering top Resin art course and Mehandi course in Kerala. Learn practical skills and grow with expert-led training.",
  metadataBase: new URL("https://proskilledu.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "QWHCTql45sfxfC041X4NKX-jcfFYro27GZbChgGmFoM"
  }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white font-sans min-h-screen flex flex-col">
 
        {/* Header / Navigation */}
        <Header />
        {/* Main Content */}
        <main className="flex-1 w-full flex flex-col items-center justify-start">
          {children}
        </main>
        {/* Footer */}
        <footer className="bg-black text-white py-12" style={{ zIndex: 10, marginTop: '50px' }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Get started now!</h2>
              <p className="text-gray-400">It takes less than a minute of your time.</p>
              <a
                href="https://wa.me/917034688802"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block border border-white py-2 px-6 "
              >
                Chat on WhatsApp →
              </a>
            </div>
            <h2 className="mb-10">Best skill academy in kerala</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-300 text-center md:text-left">
              <div>
                
                <h4 className="font-bold text-white mb-2">Contact</h4>
                <ul className="space-y-1">
                  <li>WhatsApp: 7034688802</li>
                  <li>Email: proskilledu@gmail.com</li>
                  <li>
                    <a href="https://www.instagram.com/the.proskill/?hl=en" target="_blank" rel="noopener noreferrer">
                      Instagram: @the.proskill
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-center space-x-6 text-gray-500 text-xl ">
              <a href="https://wa.me/917034688802" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"  >
                <FontAwesomeIcon icon={faWhatsapp} className="hover:text-white text-white" />
              </a>
              <a href="mailto:proskilledu@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} className="hover:text-white  text-white" />
              </a>
              <a href="https://www.instagram.com/the.proskill/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="hover:text-white text-white" />
              </a>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500">
              <p>Proskill © {new Date().getFullYear()} All rights reserved</p>
              <p>
                Design & Developed by{' '}
                <a
                  href="https://wydexmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-gray-300"
                >
                  Wydex
                </a>
              </p>

            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
