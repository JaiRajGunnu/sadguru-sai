import "./globals.css";
import { poppins, hso, nst } from "@/utils/font";

export const metadata = {
  title: "Sadguru Sai Telugu - Watch Online",
  description: "Watch Sadguru Sai serial, the Telugu dubbed version of Mere Sai. Enjoy watching this series from Episode 01 in online on all your compatible devices.",
  verification: {
    google: 'OZSdOBRXuwwqeM1Pz-L4GFy4tW0axfnrBNfjFN6wC0o',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins} ${hso} ${nst}`}>{children}
          <iframe
            className="opacity-0 w-[1px] h-[1px] bottom-[0%] left-[0%]"
            src="https://sadgurusai-help.blogspot.com/p/sadguru-sai-help-bot.html"
            style={{ overflow: 'hidden' }}
          >
            Loading…
          </iframe>       
      </body>
    </html>
  );
}