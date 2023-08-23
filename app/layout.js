import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// this constant's name MUST be "metadata", NOTHING ELSE
export const metadata = {
  title: 'My Blog',
  description: 'A blog page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add any additional meta tags or stylesheets here */}
      </head>
      <body className={`${inter.className} bg-gray-100`}>
        <Header />
        <main className="mt-10 container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}