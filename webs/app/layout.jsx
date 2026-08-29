import { Fraunces, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600"],
  variable: "--font-disp",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL("https://webs.blablaele.com"),
  title: "blablaELE · Webs y servicios",
  description:
    "El escaparate de blablaELE: educación, IA y desarrollo web, y cultura y creación literaria.",
  icons: { icon: "https://www.blablaele.com/logo-blablaele.png" },
  openGraph: {
    title: "blablaELE · Webs y servicios",
    description: "Educación · IA y desarrollo web · Cultura y creación literaria",
    url: "https://webs.blablaele.com/",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${sourceSans.variable}`}>
      <body style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}>
        <nav className="top">
          <div className="nav-in">
            <Link className="nav-brand" href="/">
              <img src="https://www.blablaele.com/logo-blablaele.png" alt="blablaELE" />
              <span>blablaELE</span>
            </Link>
            <div className="nav-links">
              <Link href="/educacion">Educación</Link>
              <Link href="/ia-y-desarrollo-web">IA y desarrollo web</Link>
              <Link href="/cultura-y-creacion-literaria">Cultura y creación</Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="pie">
          <div className="wrap">
            <span>© blablaELE · Javier Benítez Láinez</span>
            <span>
              <a href="https://www.blablaele.com">blablaele.com</a>
              {" · "}
              <a href="https://www.clasesporzoom.com">clasesporzoom.com</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
