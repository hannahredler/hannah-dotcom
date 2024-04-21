import './globals.css'
import type { Metadata } from 'next'

import { TypedString } from './components/TypedString'
import { PT_Mono } from 'next/font/google'
import { Poppins } from 'next/font/google'

import Script from 'next/script'
const fontMono = PT_Mono({ weight: '400', subsets: ['latin'] })
const fontPoppins = Poppins({ weight: '500', subsets: ['latin'] })

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
        <Script
          src="https://kit.fontawesome.com/9c7bdda2d6.js"
          crossOrigin="anonymous"
        ></Script>
      </head>
      <body
        className={`flex flex-col box-border min-h-screen  bg-[#030d1c] text-[rgb(210,213,221)] ${fontPoppins.className}`}
      >
        <header
          className={`flex flex-row w-full justify-end ${fontMono.className}`}
        >
          <ResumeButton />
        </header>
        <div className="w-full h-full flex flex-col text-center justify-center">
          <TypedString text={'Hannah Redler'}></TypedString>
          <h2 className="text-[#8892af]">Software Engineer</h2>

          <div className="flex flex-row w-full justify-center gap-5 p-3">
            <a
              href="https://www.linkedin.com/in/hannah-redler/"
              target="_blank"
            >
              {<i className="fa-brands fa-linkedin fa-2x text-neon" />}
            </a>
            <a href="https://medium.com/@hannahjredler" target="_blank">
              {<i className="fa text-sm fa-medium fa-2x text-neon" />}
            </a>
            <a href="https://github.com/hannahredler" target="_blank">
              {<i className="fa text-base fa-github fa-2x text-neon" />}
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">{children}</div>
        <footer className="absolute bottom-0 w-screen"></footer>
      </body>
    </html>
  )
}

const ResumeButton: React.FC = () => (
  <a
    href="HANNAH_REDLER_RESUME.pdf"
    download="hannah_redler_resume.pdf"
    target="_blank"
    className="text-neon border border-neon rounded py-1 px-2 m-4"
  >
    Resume
  </a>
)
