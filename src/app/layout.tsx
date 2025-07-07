import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Proskill Education",
  description: "Empowering your skills for the future.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white font-sans min-h-screen flex flex-col">
        {/* Header / Navigation */}
        <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md border-b border-black/10 dark:border-white/10">
          <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-8">
            <Link href="/" className="flex items-center">
              <img src="/proskillblack.webp" alt="Proskill Logo" width={40} height={40} />
            </Link>
            <nav className="flex gap-2 md:gap-4 text-base font-medium">
              <Link href="/about" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">About</Link>
              <Link href="/courses" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">Courses</Link>
              <Link href="/calculator" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">Calculator</Link>
              <Link href="/testimonials" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">Testimonials</Link>
              <Link href="/contact" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">Contact</Link>
            </nav>
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-1 w-full flex flex-col items-center justify-start">
          {children}
        </main>
        {/* Footer */}
        <footer className="w-full bg-black text-white py-10 px-6 mt-0">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <img src="/proskillblack.webp" alt="Proskill Logo" width={48} height={48} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Proskill Education</h3>
              <p className="text-gray-300 mb-2">Empowering your skills for the future.</p>
              <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Proskill Education. All rights reserved.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact</h4>
              <p className="text-gray-300">123 Main Street, City, Country</p>
              <p className="text-gray-300">Email: <a href="mailto:info@proskilledu.com" className="underline">info@proskilledu.com</a></p>
              <p className="text-gray-300">Phone: +1 234 567 890</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-4 mt-2">
                <a href="https://www.instagram.com/the.proskill/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-2xl"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-gray-400 text-2xl"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-gray-400 text-2xl"><i className="fab fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
