import "./globals.css";
import { poppins,hso,nst } from "@/utils/font";

export const metadata = {
  title: "Sadguru Sai",
  description: "This year marks the 100-year completion of a momentous event of Sai Baba taking Samadhi in Shirdi. In last 100 years, his teachings continue to comfort millions of followers worldwide. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins} ${hso} ${nst}`}>{children}</body>
      
          </html>
  );
}
