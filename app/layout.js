
import "./globals.css";
import localfont from "next/font/local"

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
  description: "Generated by create next app",
};

export default function RootLayout({ children,sidebar }) {
  return (
    <html lang="en" className={`${recoleta.variable} overflow-x-hidden`}>
      <body >
        <nav>
        {sidebar}
        </nav>
        <div className="flex flex-col w-full h-full ml-20 p-4">

        {children}
        </div>
      </body>
    </html>
  );
}
