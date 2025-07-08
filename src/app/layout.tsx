import Link from "next/link";
import "./globals.css";
import Header from "../../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: "Proskill",
  description: "Upskill from experts",
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
        <footer className="w-full bg-black text-white py-10 px-6 mt-0">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <img src="/proskillblack.webp" alt="Proskill Logo" width={48} height={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Proskill</h3>
              <p className="text-gray-300 mb-2">Upskill from experts</p>
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Proskill Education. All rights reserved.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact</h4>
              <p className="text-gray-300">4th floor, Empora Gemz, Thondayad, Kozhikode, Kerala 673016</p>
              <p className="text-gray-300">Email: <a href="mailto:info@proskilledu.com" className="underline">info@proskilledu.com</a></p>
              <p className="text-gray-300">Phone: +1 234 567 890</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-4 mt-2">
                <a href="https://wa.me/7034688802" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-500 text-2xl text-green-500 hover:text-gray-300 transition-colors">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href="https://www.instagram.com/the.proskill/?hl=en" target="_blank" rel="noopener noreferrer" title="Instagram" className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-500 text-2xl text-pink-500 hover:text-gray-300 transition-colors">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="mailto:teamproskill@gmail.com" title="Email" className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-500 text-2xl text-blue-400 hover:text-gray-300 transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
