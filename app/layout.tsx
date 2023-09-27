import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { PT_Mono, Montserrat, Roboto } from 'next/font/google'

const ptMono = PT_Mono({ weight: '400', subsets: ['latin'] })
const montserrat = Montserrat({ weight: '300', subsets: ['latin'] })
const font = Roboto({ weight: '500', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hannah Redler Personal Website',
  description:
    'Hannah Redler, freelance software engineer. Website and contact information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/9c7bdda2d6.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`flex flex-col min-h-screen ${montserrat.className}`}>
        <header className="flex w-full flex-row gap-5 justify-end p-2 px-5">
          <Link
            className="pb-5 hover:underline hover:underline-offset-8"
            href="/"
          >
            home
          </Link>
          <Link
            className="pb-5 hover:underline hover:underline-offset-8"
            href="/about-me"
          >
            about me
          </Link>
          <Link
            className="pb-5 hover:underline hover:underline-offset-8"
            href="/contact"
          >
            contact
          </Link>
        </header>
        <div className="w-full flex flex-col items-center my-10">
          <h1 className={`text-4xl uppercase ${montserrat.className}`}>
            Hannah Redler
          </h1>
          <div className="flex flex-row gap-6">
            <div>engineer</div>
            <Separator />
            <div>fullstack</div>
            <Separator />
            <div>freelance</div>
          </div>
        </div>
        <div className="flex items-center justify-center">{children}</div>
        <footer className="absolute bottom-0 w-screen">
          <div className="flex flex-row w-full justify-end gap-5 p-3">
            <a
              href="https://www.linkedin.com/in/hannah-redler/"
              target="_blank"
            >
              {<i className="fa-brands fa-linkedin fa-2x" />}
            </a>
            <a href="https://medium.com/@hannahjredler" target="_blank">
              {<i className="fa text-sm fa-medium fa-2x" />}
            </a>
            <a href="https://github.com/hannahredler" target="_blank">
              {<i className="fa text-base fa-github fa-2x" />}
            </a>
          </div>
        </footer>
      </body>
    </html>
  )
}

const Separator: React.FC = () => (
  <div className="flex self-center h-2 w-2 bg-none border border-[#52452e] rounded-full" />
)
