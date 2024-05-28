import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs';
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from './providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'NextGPT',
  description:
    'NextGPT: Your AI language companion. Powered by OpenAI, it enhances your conversations, content creation, and more!',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ReactQueryProvider>
            <Toaster position="bottom-center" />
            {children}
          </ReactQueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
