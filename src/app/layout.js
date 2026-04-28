import dns from 'node:dns'
dns.setServers(["8.8.8.8","8.8.4.4"])
import {  Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shered/Header";
import Navbar from "@/components/shered/Navbar";

export const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
export const metadata = {
  title: "Dragon News",
  description: "A website developed by NEXT js",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      
      className={`  h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col `}>
       
        <main>
            {children}
        </main>
      
        
        </body>
    </html>
  );
}
