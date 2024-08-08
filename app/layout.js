
import "./globals.css";
import localfont from "next/font/local"
import Navigation from './@sidebar/page'
const recoleta = localfont(
  {
    src:[
      {
        path:"../public/Fonts/Recoleta-RegularDEMO.otf",
        weight:"400"
      }
    ],
    variable:"--font-recoleta",
  }
)
export const metadata = {
  title: "RetainIQ Assesment - Hrishi",
  description: "This website is created as an assessment for RetainIQ hiring, This web app uses Next JS , Tailwind",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en" className={`${recoleta.variable} overflow-x-hidden`}>
      <body >
        <nav>
        <Navigation/>
        </nav>
        <main>
          <div className="flex flex-col w-full h-full ml-20 p-4">
        {children}
          </div>
        </main>
      </body>
    </html>
  );
}
