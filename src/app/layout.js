import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "MZO Company",
  description: "Site vitrine de MZO Company",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/*<SEOProvider />*/}
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
