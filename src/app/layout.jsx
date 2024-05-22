import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './_components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "How's my Weather",
  description: 'We are weathering for you'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
