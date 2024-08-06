import { Poppins,Hammersmith_One,Noto_Serif_Telugu } from "next/font/google";

const poppins_init = Poppins({
  subsets: ["latin"],
  weight: [ "400","500","600"],
  variable: "--poppins",
});

const hammersmith_One_init = Hammersmith_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--hso",
});

const telugu_init = Noto_Serif_Telugu({
  subsets: ["latin"],
  weight: [ "400","500","600"],
  variable: "--nst",
});

// const tmrw_init = Tomorrow({
//   subsets: ["latin"],
//   weight: [ "400","500","600"],
//   variable: "--tmrw",
// });

export const poppins = poppins_init.variable ;
export const hso = hammersmith_One_init.variable ;
export const nst = telugu_init.variable ;
// export const tmrw = tmrw_init.variable ;